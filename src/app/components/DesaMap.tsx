import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Layers,
  MapPin,
  Compass,
  Maximize2,
  Minimize2,
  Navigation,
  Info,
} from "lucide-react";

// ── KOORDINAT POLIGON BATAS WILAYAH RESMI DESA NGARIBOYO ──────────────────────
// Ditracing presisi sesuai peta batas administratif Desa Ngariboyo (Google Maps)
const NGARIBOYO_POLYGON: [number, number][] = [
  [-7.6705, 111.3365], // Utara: Dekat perbatasan Puskesmas Ngariboyo
  [-7.6715, 111.3415], // Timur Laut: Perbatasan menuju Jl. Sriwijaya
  [-7.6740, 111.3430], // Timur: Belokan timur Jl. Demak
  [-7.6762, 111.3425], // Timur: Sayap perumahan timur pasar
  [-7.6750, 111.3485], // Kantung Timur: Jalur perbukitan & persawahan
  [-7.6732, 111.3550], // Ujung Timur Laut: Batas area hijau
  [-7.6742, 111.3598], // Ujung Timur: Batas sawah timur
  [-7.6775, 111.3615], // Lengkungan Timur: Puncak batas timur
  [-7.6815, 111.3590], // Tenggara: Mendekati aliran sungai
  [-7.6835, 111.3555], // Tenggara: Dekat Masjid Al Fallah / barat Embung Klumpit
  [-7.6860, 111.3505], // Selatan-Timur: Menyusuri kontur lembah
  [-7.6875, 111.3450], // Selatan: Area persawahan selatan
  [-7.6898, 111.3385], // Selatan: Memotong Jl. Raya Parang
  [-7.6918, 111.3355], // Barat Daya: Menuju Jl. Raya Slungguh
  [-7.6940, 111.3330], // Barat Daya: Persimpangan jalan desa
  [-7.6975, 111.3320], // Ujung Selatan Slungguh
  [-7.6985, 111.3275], // Sudut Barat Daya
  [-7.6920, 111.3268], // Barat Daya: Naik ke arah utara
  [-7.6865, 111.3280], // Barat: Lembah barat
  [-7.6825, 111.3242], // Barat: Selatan Terapi PAZ AL-KASAW
  [-7.6780, 111.3235], // Barat: Memotong Jl. Ngariboyo-Plaosan
  [-7.6735, 111.3262], // Barat Laut: Menghadap Balegondo
  [-7.6708, 111.3312], // Utara-Barat: Area persawahan utara
  [-7.6705, 111.3365], // Kembali ke titik awal di utara
];

// Inverse Polygon Mask (Meredupkan wilayah di luar batas Desa Ngariboyo)
const WORLD_MASK: [number, number][][] = [
  [
    [-90, -180],
    [-90, 180],
    [90, 180],
    [90, -180],
    [-90, -180],
  ],
  NGARIBOYO_POLYGON,
];

// ── TITIK LOKASI PENTING (POINTS OF INTEREST) SESUAI PETA ASLI ────────────────
interface LokasiPenting {
  id: string;
  nama: string;
  kategori: "Pemerintahan" | "KKNT" | "Pendidikan" | "Ekonomi" | "Kesehatan" | "Fasilitas";
  lat: number;
  lng: number;
  deskripsi: string;
  alamat: string;
  ikon: string;
  warna: string;
}

const LOKASI_PENTING: LokasiPenting[] = [
  {
    id: "pasar-ngariboyo",
    nama: "Pasar Ngariboyo",
    kategori: "Ekonomi",
    lat: -7.6775,
    lng: 111.3385,
    deskripsi: "Pusat perniagaan dan perputaran ekonomi utama warga Desa Ngariboyo di perempatan jalan utama.",
    alamat: "Jl. Raya Parang - Ngariboyo",
    ikon: "🏪",
    warna: "#E11D48",
  },
  {
    id: "balai-desa",
    nama: "Kantor Balai Desa Ngariboyo",
    kategori: "Pemerintahan",
    lat: -7.6765,
    lng: 111.3380,
    deskripsi: "Pusat pelayanan masyarakat dan kantor pemerintahan Kepala Desa Ngariboyo.",
    alamat: "Jl. Raya Parang, Desa Ngariboyo",
    ikon: "🏛️",
    warna: "#14532D",
  },
  {
    id: "posko-kknt",
    nama: "Posko Utama KKNT UNESA 2026",
    kategori: "KKNT",
    lat: -7.6760,
    lng: 111.3392,
    deskripsi: "Posko kegiatan dan koordinasi 15 mahasiswa KKNT Desa Ngariboyo 2026.",
    alamat: "Jl. Demak / Kompleks Balai Desa Ngariboyo",
    ikon: "🎓",
    warna: "#F4B400",
  },
  {
    id: "toko-sumber-murah",
    nama: "Toko Sumber Murah & Sentra UMKM",
    kategori: "Ekonomi",
    lat: -7.6748,
    lng: 111.3390,
    deskripsi: "Pusat belanja kebutuhan harian dan display produk olahan UMKM warga desa.",
    alamat: "Jl. Demak, Desa Ngariboyo",
    ikon: "🛍️",
    warna: "#2563EB",
  },
  {
    id: "sdn-ngariboyo",
    nama: "SD Negeri Ngariboyo",
    kategori: "Pendidikan",
    lat: -7.6785,
    lng: 111.3370,
    deskripsi: "Sekolah dasar mitra program bimbingan belajar gratis, pojok literasi, dan edukasi anak KKNT.",
    alamat: "Jl. Ngariboyo-Plaosan, Desa Ngariboyo",
    ikon: "🏫",
    warna: "#059669",
  },
  {
    id: "terapi-paz",
    nama: "Terapi PAZ AL-KASAW Magetan",
    kategori: "Kesehatan",
    lat: -7.6780,
    lng: 111.3280,
    deskripsi: "Layanan terapi kesehatan holistik dan alternatif rujukan di wilayah barat desa.",
    alamat: "Jl. Ngariboyo-Plaosan, Desa Ngariboyo",
    ikon: "🏥",
    warna: "#7C3AED",
  },
  {
    id: "masjid-al-fallah",
    nama: "Masjid Al Fallah",
    kategori: "Fasilitas",
    lat: -7.6835,
    lng: 111.3555,
    deskripsi: "Pusat ibadah dan kegiatan keagamaan masyarakat Dusun bagian timur Desa Ngariboyo.",
    alamat: "Wilayah Timur Desa Ngariboyo",
    ikon: "🕌",
    warna: "#0D9488",
  },
  {
    id: "kawasan-pertanian",
    nama: "Kawasan Persawahan & Agrowisata Hijau",
    kategori: "Fasilitas",
    lat: -7.6760,
    lng: 111.3520,
    deskripsi: "Hamparan sawah dan ladang subur penghasil padi dan jagung unggulan desa.",
    alamat: "Kawasan Timur Desa Ngariboyo",
    ikon: "🌾",
    warna: "#15803D",
  },
];

type MapLayerType = "osm" | "satellite" | "voyager";

export default function DesaMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const polygonLayerRef = useRef<L.Polygon | null>(null);
  const maskLayerRef = useRef<L.Polygon | null>(null);
  const markersLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const [activeLayer, setActiveLayer] = useState<MapLayerType>("osm");
  const [filterKategori, setFilterKategori] = useState<string>("Semua");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dimOutside, setDimOutside] = useState(true);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  // Inisialisasi Peta Leaflet
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Center tepat di pusat Desa Ngariboyo (Pasar & Balai Desa)
    const map = L.map(mapContainerRef.current, {
      center: [-7.6790, 111.3420],
      zoom: 15,
      minZoom: 13,
      maxZoom: 18,
      zoomControl: false,
    });

    // Custom Zoom Control di kanan bawah
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Layer Ubin awal: OpenStreetMap resmi
    const tileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(map);
    tileLayerRef.current = tileLayer;

    // Mask luar wilayah desa (Meredupkan wilayah di luar batas Ngariboyo)
    const maskPolygon = L.polygon(WORLD_MASK, {
      color: "transparent",
      fillColor: "#0F172A",
      fillOpacity: 0.35,
      interactive: false,
    }).addTo(map);
    maskLayerRef.current = maskPolygon;

    // Garis Batas Wilayah Desa Ngariboyo (Red Dashed Line sesuai Google Maps)
    const villagePolygon = L.polygon(NGARIBOYO_POLYGON, {
      color: "#E11D48",
      weight: 3.5,
      dashArray: "6, 6",
      fillColor: "#E11D48",
      fillOpacity: 0.08,
    }).addTo(map);
    polygonLayerRef.current = villagePolygon;

    // Tooltip interaktif poligon batas
    villagePolygon.bindTooltip(
      `<div style="font-family: inherit; font-weight: 700; font-size: 13px; color: #BE123C; padding: 2px 4px;">
        📍 Wilayah Administratif Desa Ngariboyo
      </div>`,
      { sticky: true, className: "custom-polygon-tooltip" }
    );

    // Layer Group untuk Markers
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerGroupRef.current = markersGroup;

    mapInstanceRef.current = map;

    // Batasi batas geser peta agar fokus di Desa Ngariboyo
    const southWest = L.latLng(-7.720, 111.300);
    const northEast = L.latLng(-7.640, 111.390);
    map.setMaxBounds(L.latLngBounds(southWest, northEast));

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tipe Layer (OSM / Satellite / Voyager)
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;

    mapInstanceRef.current.removeLayer(tileLayerRef.current);

    let newUrl = "";
    let newAttr = "";

    if (activeLayer === "satellite") {
      newUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
      newAttr = '&copy; <a href="https://www.esri.com/">Esri</a>';
    } else if (activeLayer === "voyager") {
      newUrl = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
      newAttr = '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap';
    } else {
      newUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      newAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    }

    const newTileLayer = L.tileLayer(newUrl, {
      attribution: newAttr,
      maxZoom: 19,
    }).addTo(mapInstanceRef.current);

    newTileLayer.bringToBack();
    tileLayerRef.current = newTileLayer;
  }, [activeLayer]);

  // Update Dim Masking Luar Wilayah
  useEffect(() => {
    if (!maskLayerRef.current) return;
    if (dimOutside) {
      maskLayerRef.current.setStyle({ fillOpacity: activeLayer === "satellite" ? 0.45 : 0.35 });
    } else {
      maskLayerRef.current.setStyle({ fillOpacity: 0 });
    }
  }, [dimOutside, activeLayer]);

  // Update & Render Markers sesuai Filter
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerGroupRef.current) return;

    markersLayerGroupRef.current.clearLayers();

    const filtered =
      filterKategori === "Semua"
        ? LOKASI_PENTING
        : LOKASI_PENTING.filter((item) => item.kategori === filterKategori);

    filtered.forEach((loc) => {
      const customIcon = L.divIcon({
        className: "custom-map-marker",
        html: `
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            border: 3px solid ${loc.warna};
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='scale(1.15) translateY(-3px)'" onmouseout="this.style.transform='scale(1)'">
            ${loc.ikon}
          </div>
          <div style="
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid ${loc.warna};
            margin: -2px auto 0;
          "></div>
        `,
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        popupAnchor: [0, -44],
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });

      const popupContent = `
        <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px 2px; max-width: 260px;">
          <div style="display: inline-block; padding: 2px 8px; border-radius: 8px; font-size: 10px; font-weight: 700; background: ${loc.warna}20; color: ${loc.warna}; margin-bottom: 6px;">
            ${loc.kategori}
          </div>
          <h4 style="font-size: 14px; font-weight: 800; color: #111827; margin: 0 0 4px; line-height: 1.3;">
            ${loc.nama}
          </h4>
          <p style="font-size: 12px; color: #4B5563; margin: 0 0 8px; line-height: 1.4;">
            ${loc.deskripsi}
          </p>
          <div style="font-size: 11px; color: #6B7280; margin-bottom: 10px; display: flex; align-items: center; gap: 4px;">
            📍 ${loc.alamat}
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" target="_blank" rel="noopener noreferrer" style="
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 8px 12px;
            background: #14532D;
            color: white;
            border-radius: 10px;
            font-size: 11px;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
          ">
            Petunjuk Arah (Google Maps) ↗
          </a>
        </div>
      `;

      marker.bindPopup(popupContent, { maxWidth: 280 });
      marker.on("click", () => setActiveMarkerId(loc.id));
      markersLayerGroupRef.current?.addLayer(marker);
    });
  }, [filterKategori]);

  // Fungsi Reset / Fit Bounds ke Desa Ngariboyo
  const resetFocus = () => {
    if (!mapInstanceRef.current || !polygonLayerRef.current) return;
    mapInstanceRef.current.fitBounds(polygonLayerRef.current.getBounds(), {
      padding: [40, 40],
      maxZoom: 16,
      animate: true,
    });
  };

  // Fokus ke marker tertentu saat dipilih dari list
  const focusLocation = (loc: LokasiPenting) => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([loc.lat, loc.lng], 17, { duration: 1.2 });
    setActiveMarkerId(loc.id);
  };

  return (
    <div
      className={`relative w-full rounded-[28px] overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all ${
        isFullscreen ? "fixed inset-4 z-[999] bg-card rounded-[20px]" : "bg-card"
      }`}
    >
      {/* ── TOOLBAR ATAS PETA ────────────────────────────────────────────── */}
      <div className="p-4 sm:p-5 bg-card/95 backdrop-blur-md border-b border-border flex flex-wrap items-center justify-between gap-3">
        {/* Kiri: Filter Kategori Titik */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {["Semua", "Ekonomi", "Pemerintahan", "KKNT", "Pendidikan", "Kesehatan", "Fasilitas"].map((kat) => (
            <button
              key={kat}
              onClick={() => setFilterKategori(kat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-caption transition-all ${
                filterKategori === kat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Kanan: Switch Layer & Kontrol */}
        <div className="flex items-center gap-2">
          {/* Layer switcher */}
          <div className="flex items-center bg-muted p-1 rounded-xl border border-border text-xs font-caption font-semibold">
            <button
              onClick={() => setActiveLayer("osm")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayer === "osm" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              OpenStreetMap
            </button>
            <button
              onClick={() => setActiveLayer("satellite")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayer === "satellite" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Satelit
            </button>
            <button
              onClick={() => setActiveLayer("voyager")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeLayer === "voyager" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Modern
            </button>
          </div>

          {/* Toggle Batas Fokus (Dim Mask) */}
          <button
            onClick={() => setDimOutside(!dimOutside)}
            title="Sorot Khusus Batas Wilayah Desa"
            className={`p-2 rounded-xl text-xs font-caption flex items-center gap-1 border transition-all ${
              dimOutside
                ? "bg-primary/10 border-primary text-primary dark:text-accent font-semibold"
                : "bg-card border-border text-muted-foreground"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="hidden sm:inline">Sorot Wilayah</span>
          </button>

          {/* Tombol Reset Zoom / Fit Bounds */}
          <button
            onClick={resetFocus}
            title="Pusatkan ke Desa Ngariboyo"
            className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-all"
          >
            <Navigation className="w-4 h-4 text-primary dark:text-accent" />
          </button>

          {/* Tombol Fullscreen */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
            className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── KONTEN PETA & SIDEBAR TITIK LOKASI ────────────────────────────── */}
      <div className="relative w-full flex flex-col lg:flex-row">
        {/* Map Container */}
        <div
          ref={mapContainerRef}
          className="w-full flex-1 relative z-0"
          style={{ height: isFullscreen ? "calc(100vh - 120px)" : "540px" }}
        />

        {/* Floating Legend / Quick Location List (Desktop Sidebar & Mobile Drawer) */}
        <div className="w-full lg:w-84 bg-card/95 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-border p-4 sm:p-5 flex flex-col justify-between max-h-[540px] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <MapPin className="w-4 h-4 text-rose-600" />
              <h4 className="font-display font-bold text-foreground text-sm">
                Titik Lokasi Sesuai Peta ({LOKASI_PENTING.length})
              </h4>
            </div>

            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
              {LOKASI_PENTING.map((loc) => {
                const isSelected = activeMarkerId === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => focusLocation(loc)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? "bg-rose-50 dark:bg-rose-950/30 border-rose-500 shadow-sm"
                        : "bg-muted/40 hover:bg-muted border-border"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="text-xl shrink-0 mt-0.5">{loc.ikon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className="text-[10px] font-caption font-bold px-1.5 py-0.5 rounded-md"
                            style={{
                              backgroundColor: `${loc.warna}18`,
                              color: loc.warna,
                            }}
                          >
                            {loc.kategori}
                          </span>
                        </div>
                        <h5 className="font-display font-bold text-foreground text-xs mt-1 truncate">
                          {loc.nama}
                        </h5>
                        <p className="text-muted-foreground font-caption text-[11px] line-clamp-1 mt-0.5">
                          {loc.deskripsi}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Batas Administratif Info Badge */}
          <div className="mt-4 pt-3 border-t border-border bg-muted/50 rounded-2xl p-3 text-xs font-caption text-muted-foreground space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
              <Info className="w-3.5 h-3.5 text-rose-600" /> Batas Wilayah (Sesuai Gambar)
            </div>
            <div className="flex justify-between">
              <span>Utara:</span> <span className="font-medium text-foreground">Puskesmas / Balegondo</span>
            </div>
            <div className="flex justify-between">
              <span>Timur:</span> <span className="font-medium text-foreground">Sabiilul Huda / Mojopurno</span>
            </div>
            <div className="flex justify-between">
              <span>Tenggara:</span> <span className="font-medium text-foreground">Embung Klumpit</span>
            </div>
            <div className="flex justify-between">
              <span>Barat Daya:</span> <span className="font-medium text-foreground">Jl. Raya Slungguh</span>
            </div>
            <div className="flex justify-between">
              <span>Barat:</span> <span className="font-medium text-foreground">Jl. Ngariboyo-Plaosan</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER STATUS PETA ────────────────────────────────────────────── */}
      <div className="px-5 py-3 bg-muted/60 border-t border-border flex flex-wrap items-center justify-between text-xs text-muted-foreground font-caption">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span>Garis Titik Merah: <strong>Batas Resmi Wilayah Desa Ngariboyo</strong></span>
        </div>
        <div className="text-muted-foreground/80">
          Titik Pusat: Jl. Raya Parang & Pasar Ngariboyo · Kab. Magetan
        </div>
      </div>
    </div>
  );
}
