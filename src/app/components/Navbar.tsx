import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, ChevronDown, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "../data";
import logoTransparent from "../../imports/LOGO_VERSI_FIX_NON_PISAH_ELEMENT-removebg-preview.png";

// ── Global Search Overlay ─────────────────────────────────────────────────────
import { PROKER, BERITA, MAHASISWA } from "../data";
import { useNavigate } from "react-router";

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = query.length < 2 ? [] : [
    ...PROKER.filter((p) => p.nama.toLowerCase().includes(query.toLowerCase()) || p.deskripsi.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 4).map((p) => ({ type: "Program Kerja", label: p.nama, href: "/proker" })),
    ...BERITA.filter((b) => b.judul.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 3).map((b) => ({ type: "Berita", label: b.judul, href: "/berita" })),
    ...MAHASISWA.filter((m) => m.nama.toLowerCase().includes(query.toLowerCase()) || m.prodi.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 3).map((m) => ({ type: "Mahasiswa", label: `${m.nama} — ${m.prodi}`, href: "/tim" })),
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4" onClick={onClose}>
      <div
        className="w-full max-w-xl bg-card rounded-[20px] shadow-2xl border border-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Cari program kerja, berita, mahasiswa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground font-body"
          />
          <kbd className="hidden sm:flex px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-caption">ESC</kbd>
        </div>
        {results.length > 0 && (
          <ul className="py-2 max-h-80 overflow-y-auto">
            {results.map((r, i) => (
              <li key={i}>
                <button
                  className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-muted transition-colors"
                  onClick={() => { navigate(r.href); onClose(); }}
                >
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-caption shrink-0">{r.type}</span>
                  <span className="text-sm text-foreground font-body truncate">{r.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query.length >= 2 && results.length === 0 && (
          <div className="px-5 py-8 text-center text-muted-foreground font-body text-sm">
            Tidak ada hasil untuk "<span className="text-foreground font-semibold">{query}</span>"
          </div>
        )}
        {query.length < 2 && (
          <div className="px-5 py-6 text-center text-muted-foreground font-body text-sm">
            Ketik minimal 2 karakter untuk mencari...
          </div>
        )}
      </div>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Cmd/Ctrl+K to open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    const nextTheme = isDark ? "light" : "dark";

    if (!("startViewTransition" in document)) {
      setTheme(nextTheme);
      return;
    }

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    (document as Document & { startViewTransition: (cb: () => void) => { ready: Promise<void> } })
      .startViewTransition(() => { setTheme(nextTheme); })
      .ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
        );
      });
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors px-1 py-0.5 group font-body ${
      isActive ? "text-accent" : scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
    }`;

  return (
    <>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <nav
        className={`fixed inset-x-0 top-1 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] mx-4 rounded-2xl border border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setDrawerOpen(false)}>
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 overflow-hidden border-2 border-white/40">
              <img src={logoTransparent} alt="KKNT Ngariboyo" className="w-9 h-9 object-contain" />
            </div>
            <div className="leading-tight">
              <div className={`font-display font-extrabold text-sm tracking-wide transition-colors ${scrolled ? "text-primary dark:text-accent" : "text-white"}`}>
                KKNT 2024
              </div>
              <div className={`text-xs font-caption transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Desa Ngariboyo
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((n) =>
              n.sub ? (
                <div key={n.href} className="relative group">
                  <NavLink to={n.href} className={linkClass}>
                    <span className="flex items-center gap-1">
                      {n.label}
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </span>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </NavLink>
                  <div className="absolute top-full left-0 mt-3 w-52 bg-card rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50">
                    {n.sub.map((s) => (
                      <Link key={s.href} to={s.href} className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors font-body">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={n.href} to={n.href} end={n.href === "/"} className={linkClass}>
                  {n.label}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </NavLink>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm transition-colors font-body ${
                scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted border border-border" : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              title="Cari (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline text-xs">Ctrl K</span>
            </button>

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={(e) => toggleTheme(e)}
                className={`p-2 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                  scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                }`}
                title={isDark ? "Mode Terang" : "Mode Gelap"}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? "hover:bg-muted text-foreground" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${drawerOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setDrawerOpen(false)}
        />
        <div className={`absolute right-0 top-0 bottom-0 w-72 bg-card shadow-2xl flex flex-col transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white shadow border border-border flex items-center justify-center shrink-0 overflow-hidden">
                <img src={logoTransparent} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-primary dark:text-accent text-sm">KKNT 2024</div>
                <div className="text-xs text-muted-foreground font-caption">Desa Ngariboyo</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {mounted && (
                <button onClick={(e) => toggleTheme(e)} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle theme">
                  {isDark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-foreground" />}
                </button>
              )}
              <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-lg hover:bg-muted">
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <button
            onClick={() => { setSearchOpen(true); setDrawerOpen(false); }}
            className="mx-4 mt-3 flex items-center gap-2 px-4 py-2.5 bg-muted rounded-xl text-muted-foreground text-sm font-body border border-border"
          >
            <Search className="w-4 h-4" />
            Cari...
          </button>

          <div className="flex-1 overflow-y-auto py-3">
            {NAV_LINKS.map((n) => (
              <div key={n.href}>
                {n.sub ? (
                  <>
                    <button
                      onClick={() => setOpenSub(openSub === n.href ? null : n.href)}
                      className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors font-body"
                    >
                      {n.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openSub === n.href ? "rotate-180" : ""}`} />
                    </button>
                    {openSub === n.href && (
                      <div className="bg-muted/50 py-1">
                        {n.sub.map((s) => (
                          <Link key={s.href} to={s.href} className="block px-8 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setDrawerOpen(false)}>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={n.href}
                    end={n.href === "/"}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-sm font-medium transition-colors font-body ${isActive ? "text-accent bg-muted border-r-2 border-accent" : "text-foreground hover:text-accent hover:bg-muted"}`
                    }
                    onClick={() => setDrawerOpen(false)}
                  >
                    {n.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-border">
            <p className="text-xs text-muted-foreground font-caption text-center">
              KKNT Universitas Negeri Surabaya<br />Desa Ngariboyo, Magetan 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
