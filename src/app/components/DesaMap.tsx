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
// Ditracing presisi 1:1 sesuai peta batas resmi administratif Desa Ngariboyo di Google Maps
const NGARIBOYO_POLYGON: [number, number][] = [
  [-7.682068, 111.317954], // Ujung Barat: Jl. Ngariboyo-Plaosan / Perbatasan Balegondo
  [-7.679180, 111.320633],
  [-7.677887, 111.322192],
  [-7.676923, 111.324637],
  [-7.676582, 111.325995],
  [-7.675596, 111.328335], // Barat Laut
  [-7.674634, 111.332849],
  [-7.673069, 111.336422], // Menghadap Balegondo Utara
  [-7.672339, 111.339428], // Utara: Sisi utara Puskesmas Ngariboyo
  [-7.672289, 111.342115], // Puncak Batas Utara (Jl. Sriwijaya)
  [-7.672491, 111.343010],
  [-7.672386, 111.344400],
  [-7.672562, 111.344646],
  [-7.672943, 111.344727],
  [-7.673735, 111.346005],
  [-7.675312, 111.346176], // Timur Laut: Utara Jl. Raya Mojopurno
  [-7.675517, 111.347651],
  [-7.676826, 111.347054],
  [-7.677637, 111.346014],
  [-7.677872, 111.346321],
  [-7.677216, 111.350371], // Menuju Kawasan Hutan & Perbukitan Timur
  [-7.676285, 111.353354],
  [-7.675983, 111.357179],
  [-7.676298, 111.357741],
  [-7.676900, 111.360114],
  [-7.677375, 111.360862], // Puncak Batas Paling Timur (kawasan perbukitan)
  [-7.677778, 111.360814],
  [-7.678123, 111.360529],
  [-7.678607, 111.359626],
  [-7.679146, 111.359023],
  [-7.679534, 111.358947],
  [-7.680079, 111.359609],
  [-7.680449, 111.359558],
  [-7.681858, 111.357561],
  [-7.682429, 111.357491],
  [-7.682135, 111.355857], // Tenggara: Barat Embung Klumpit & Dekat Masjid Al Fallah
  [-7.682272, 111.353636],
  [-7.682436, 111.353495],
  [-7.682991, 111.353418],
  [-7.683566, 111.352767],
  [-7.684058, 111.351623],
  [-7.684734, 111.350630],
  [-7.685365, 111.348556],
  [-7.686278, 111.347320],
  [-7.687163, 111.345166],
  [-7.687266, 111.344617], // Selatan-Timur: Melintasi kontur persawahan
  [-7.687208, 111.341982], // Memotong Jl. Raya Parang selatan pemukiman
  [-7.686921, 111.336071],
  [-7.688001, 111.334699],
  [-7.688695, 111.333505],
  [-7.689157, 111.332264], // Selatan: Menuju arah barat
  [-7.689160, 111.331703],
  [-7.689517, 111.331073],
  [-7.689616, 111.329684],
  [-7.689916, 111.328318],
  [-7.691584, 111.327962],
  [-7.691746, 111.327018],
  [-7.692316, 111.326014],
  [-7.692358, 111.325477],
  [-7.692791, 111.324262],
  [-7.692812, 111.323023], // Barat Daya: Sisi utara Jl. Raya Slungguh
  [-7.692680, 111.322021],
  [-7.693000, 111.321025], // Titik Terendah Selatan
  [-7.692925, 111.320791],
  [-7.692725, 111.320767],
  [-7.692135, 111.320882],
  [-7.691061, 111.321465],
  [-7.690361, 111.321393],
  [-7.687947, 111.320576],
  [-7.687019, 111.320819],
  [-7.686794, 111.321019], // Barat: Lereng barat perbukitan
  [-7.685554, 111.323470],
  [-7.684848, 111.324044],
  [-7.684552, 111.323873],
  [-7.684192, 111.322708],
  [-7.683747, 111.318572],
  [-7.683414, 111.318221],
  [-7.682725, 111.317826], // Titik Terjauh Barat
  [-7.682068, 111.317954], // Kembali ke titik awal (menutup loop)
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
    lat: -7.6784,
    lng: 111.3394,
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
    id: "puskesmas-ngariboyo",
    nama: "Puskesmas Ngariboyo",
    kategori: "Kesehatan",
    lat: -7.6730,
    lng: 111.3394,
    deskripsi: "Pusat pelayanan kesehatan masyarakat bagi warga Desa & Kecamatan Ngariboyo di sisi utara.",
    alamat: "Jl. Raya Parang (Perbatasan Utara Desa Ngariboyo)",
    ikon: "🏥",
    warna: "#0284C7",
  },
  {
    id: "terapi-paz",
    nama: "Terapi PAZ AL-KASAW Magetan",
    kategori: "Kesehatan",
    lat: -7.68235,
    lng: 111.3250,
    deskripsi: "Layanan terapi kesehatan holistik dan alternatif rujukan di wilayah barat desa.",
    alamat: "Jl. Ngariboyo-Plaosan, Desa Ngariboyo",
    ikon: "🩺",
    warna: "#7C3AED",
  },
  {
    id: "masjid-al-fallah",
    nama: "Masjid Al Fallah",
    kategori: "Fasilitas",
    lat: -7.6824,
    lng: 111.3558,
    deskripsi: "Pusat ibadah dan kegiatan keagamaan masyarakat Dusun bagian timur Desa Ngariboyo.",
    alamat: "Wilayah Timur Desa Ngariboyo",
    ikon: "🕌",
    warna: "#0D9488",
  },
  {
    id: "kawasan-pertanian",
    nama: "Kawasan Persawahan & Perbukitan Hijau",
    kategori: "Fasilitas",
    lat: -7.6775,
    lng: 111.3520,
    deskripsi: "Hamparan sawah subur dan perbukitan hijau penghasil komoditas pertanian unggulan desa.",
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
      center: [-7.6810, 111.3395],
      zoom: 14,
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

    // Auto fit pandangan awal ke poligon resmi Desa Ngariboyo
    map.fitBounds(villagePolygon.getBounds(), {
      padding: [30, 30],
      maxZoom: 15,
      animate: false,
    });

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
              <Info className="w-3.5 h-3.5 text-rose-600" /> Batas Wilayah (Sesuai Google Maps)
            </div>
            <div className="flex justify-between">
              <span>Utara:</span> <span className="font-medium text-foreground">Puskesmas / Jl. Sriwijaya</span>
            </div>
            <div className="flex justify-between">
              <span>Timur:</span> <span className="font-medium text-foreground">Perbukitan Hijau & Sabiilul Huda</span>
            </div>
            <div className="flex justify-between">
              <span>Tenggara:</span> <span className="font-medium text-foreground">Barat Embung Klumpit / Al-Fallah</span>
            </div>
            <div className="flex justify-between">
              <span>Selatan:</span> <span className="font-medium text-foreground">Sawah Selatan Jl. Raya Parang</span>
            </div>
            <div className="flex justify-between">
              <span>Barat Daya:</span> <span className="font-medium text-foreground">Utara Jl. Raya Slungguh</span>
            </div>
            <div className="flex justify-between">
              <span>Barat:</span> <span className="font-medium text-foreground">Jl. Ngariboyo-Plaosan / PAZ Al-Kasaw</span>
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
