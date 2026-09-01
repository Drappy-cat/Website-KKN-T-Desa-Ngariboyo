import { useState } from "react";
import { ID_CARD_MEMBERS, DIVISI_TABS, IdCardMember } from "../data/idCards";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn, Download, UserCheck, Mail, Building, GraduationCap } from "lucide-react";

const JURUSAN_MAP: Record<string, { label: string; warna: string; warnaLight: string }> = {
  pgsd: { label: "PGSD", warna: "#14532D", warnaLight: "#E8F5E9" },
  ti: { label: "Teknik Informatika", warna: "#1565C0", warnaLight: "#E3F2FD" },
  manajemen: { label: "Manajemen", warna: "#E65100", warnaLight: "#FFF3E0" },
  ikor: { label: "Ilmu Keolahragaan", warna: "#6A1B9A", warnaLight: "#F3E5F5" },
};

function SingleIDCardItem({
  member,
  onSelect,
}: {
  member: IdCardMember;
  onSelect: (m: IdCardMember) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const jurusanInfo = JURUSAN_MAP[member.jurusanKey] || {
    label: member.prodi,
    warna: member.warnaDivisi,
    warnaLight: "#F3F4F6",
  };

  return (
    <div
      className="group relative flex flex-col items-center bg-card rounded-[24px] p-6 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onClick={() => onSelect(member)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── LANYARD & STRAP ATAS ──────────────────────────────────────── */}
      <div className="flex flex-col items-center -mt-8 mb-3 relative z-10">
        {/* Ribbon strap */}
        <div className="flex items-center gap-0.5">
          <div className="w-2.5 h-10 bg-primary rounded-t-full shadow-inner" />
          <div className="w-1.5 h-10 bg-accent rounded-t-full shadow-inner" />
          <div className="w-2.5 h-10 bg-primary rounded-t-full shadow-inner" />
        </div>
        {/* Clip logam lanyard */}
        <div className="w-6 h-3 bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-sm border border-gray-400 dark:border-gray-500 shadow-sm -mt-0.5" />
        {/* Ring lubang gantungan */}
        <div className="w-3 h-3 rounded-full border-2 border-gray-400 dark:border-gray-500 -mt-1 bg-white/40 dark:bg-card/40" />
      </div>

      {/* ── ID CARD FRAME & SVG CONTAINER ────────────────────────────── */}
      <div
        className="relative w-full max-w-[240px] h-[340px] flex items-center justify-center rounded-[20px] p-2 bg-gradient-to-b from-white/80 to-white/40 dark:from-muted/80 dark:to-muted/40 backdrop-blur-sm border border-white/60 dark:border-white/10 shadow-lg overflow-hidden transition-transform duration-500 ease-out"
        style={{
          transform: isHovered
            ? "perspective(800px) rotateY(-4deg) rotateX(4deg) scale(1.03)"
            : "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)",
        }}
      >
        {/* ID Card SVG Image with automatic proportional scaling */}
        <img
          src={member.svg}
          alt={`ID Card ${member.nama}`}
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />

        {/* Hover zoom overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 rounded-[20px] backdrop-blur-[2px]">
          <div className="w-11 h-11 rounded-full bg-white/90 dark:bg-card/90 flex items-center justify-center text-primary shadow-lg transform group-hover:scale-110 transition-transform">
            <ZoomIn className="w-5 h-5" />
          </div>
          <span className="text-white text-xs font-semibold font-caption px-3 py-1 bg-black/50 rounded-full">
            Klik untuk Detail
          </span>
        </div>
      </div>

      {/* ── METADATA MAHASISWA ───────────────────────────────────────── */}
      <div className="w-full text-center mt-5 pt-4 border-t border-border/80">
        <h3 className="font-display font-bold text-foreground text-base leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-1">
          {member.nama}
        </h3>
        <div className="text-xs font-caption text-muted-foreground mt-0.5 tracking-wide">
          NIM: {member.nim}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
          {/* Badge Divisi */}
          <span
            className="text-[11px] px-2.5 py-1 rounded-lg font-caption font-semibold"
            style={{
              backgroundColor: `${member.warnaDivisi}18`,
              color: member.warnaDivisi,
            }}
          >
            {member.divisi}
          </span>
          {/* Badge Prodi */}
          <span
            className="text-[11px] px-2.5 py-1 rounded-lg font-caption font-semibold"
            style={{
              backgroundColor: `${jurusanInfo.warna}18`,
              color: jurusanInfo.warna,
            }}
          >
            {jurusanInfo.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IDCardGallery() {
  const [selectedDivisi, setSelectedDivisi] = useState<string>("semua");
  const [activeModalMember, setActiveModalMember] = useState<IdCardMember | null>(null);

  const filteredMembers =
    selectedDivisi === "semua"
      ? ID_CARD_MEMBERS
      : ID_CARD_MEMBERS.filter((m) => m.divisiKey === selectedDivisi);

  return (
    <div className="w-full">
      {/* ── FILTER TABS DIVISI ────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {DIVISI_TABS.map((tab) => {
          const isActive = selectedDivisi === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedDivisi(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold font-caption transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── GRID ID CARDS ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6">
        {filteredMembers.map((member) => (
          <SingleIDCardItem
            key={member.id}
            member={member}
            onSelect={(m) => setActiveModalMember(m)}
          />
        ))}
      </div>

      {/* ── MODAL LIGHTBOX DETAIL ID CARD ─────────────────────────────────── */}
      <Dialog.Root
        open={activeModalMember !== null}
        onOpenChange={(open) => {
          if (!open) setActiveModalMember(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[210] w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-[28px] shadow-2xl border border-border p-6 sm:p-8 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <Dialog.Title className="sr-only">
              ID Card {activeModalMember?.nama}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Detail ID Card resmi {activeModalMember?.nama} mahasiswa {activeModalMember?.prodi} KKNT Desa Ngariboyo 2024.
            </Dialog.Description>

            <Dialog.Close className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-muted/80 hover:bg-muted text-foreground transition-colors border border-border">
              <X className="w-5 h-5" />
            </Dialog.Close>

            {activeModalMember && (
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* ID Card Display */}
                <div className="relative w-full max-w-[280px] h-[400px] flex items-center justify-center p-3 rounded-[24px] bg-gradient-to-b from-muted to-card border border-border shadow-2xl shrink-0">
                  <img
                    src={activeModalMember.svg}
                    alt={`ID Card ${activeModalMember.nama}`}
                    className="w-full h-full object-contain filter drop-shadow-xl"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-caption bg-primary/10 text-primary dark:text-accent mb-3">
                    <UserCheck className="w-3.5 h-3.5" /> ID Card Resmi KKNT 2024
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground leading-tight mb-1">
                    {activeModalMember.nama}
                  </h2>
                  <p className="text-muted-foreground font-caption text-sm mb-5">
                    NIM: <span className="font-mono font-semibold text-foreground">{activeModalMember.nim}</span>
                  </p>

                  <div className="space-y-2.5 bg-muted/50 rounded-[20px] p-5 border border-border text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-border/60">
                      <span className="text-muted-foreground font-body">Divisi</span>
                      <span className="font-semibold text-foreground font-caption">
                        {activeModalMember.divisi}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/60">
                      <span className="text-muted-foreground font-body">Program Studi</span>
                      <span className="font-semibold text-foreground font-caption">
                        {activeModalMember.prodi}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/60">
                      <span className="text-muted-foreground font-body">Fakultas / Kampus</span>
                      <span className="font-semibold text-foreground font-caption">
                        {activeModalMember.fakultas}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/60">
                      <span className="text-muted-foreground font-body">Email Mahasiswa</span>
                      <span className="font-semibold text-primary dark:text-accent font-caption text-xs">
                        {activeModalMember.email}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground font-body">Universitas</span>
                      <span className="font-semibold text-foreground font-caption">
                        Universitas Negeri Surabaya
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={activeModalMember.svg}
                      download={`ID_Card_${activeModalMember.nama.replace(/\s+/g, "_")}.svg`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white text-sm font-semibold font-caption hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full"
                    >
                      <Download className="w-4 h-4" /> Unduh ID Card (SVG)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
