import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

// ── Check if user prefers reduced motion ───────────────────────────────────────
const prefersReducedMotion = () => 
  typeof window !== "undefined" && 
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── Floating geometry config (reduced from 8 to 4 shapes for lighter look) ─────
const SHAPES = [
  { id: 1, x: 83, y:   4, w: 340, h: 340, speed: 0.05, rot0:  12, type: "ring",    color: "#14532D", opacity: 0.03 },
  { id: 2, x: -6, y:  30, w: 180, h: 180, speed: 0.08, rot0:  45, type: "diamond", color: "#F4B400", opacity: 0.04 },
  { id: 4, x:  3, y:  76, w: 260, h: 260, speed: 0.06, rot0: -18, type: "ring",    color: "#F4B400", opacity: 0.025 },
  { id: 6, x: 44, y: 120, w: 100, h: 100, speed: 0.25, rot0:   0, type: "ring",    color: "#F4B400", opacity: 0.035 },
];

// ── CSS injected once (simplified animations without 3D perspective) ───────────
const S3D_CSS = `
  @keyframes kkntS3dUp {
    from { opacity:0; transform: translateY(40px) scale(0.98); }
    to   { opacity:1; transform: translateY(0px)  scale(1);    }
  }
  @keyframes kkntS3dLeft {
    from { opacity:0; transform: translateX(-40px) scale(0.98); }
    to   { opacity:1; transform: translateX(0px)   scale(1);    }
  }
  @keyframes kkntS3dRight {
    from { opacity:0; transform: translateX(40px)  scale(0.98); }
    to   { opacity:1; transform: translateX(0px)   scale(1);    }
  }
  @media (prefers-reduced-motion: reduce) {
    .kknt-s3d-up, .kknt-s3d-left, .kknt-s3d-right {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
  .kknt-s3d-up    { animation: kkntS3dUp    0.6s ease-out both; }
  .kknt-s3d-left  { animation: kkntS3dLeft  0.6s ease-out both; }
  .kknt-s3d-right { animation: kkntS3dRight 0.6s ease-out both; }
`;

// ── Shape renderers ───────────────────────────────────────────────────────────
function ShapeIcon({ type, color }: { type: string; color: string }) {
  if (type === "ring") return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="5" />
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" strokeDasharray="8 5" />
    </svg>
  );
  if (type === "diamond") return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <polygon points="50,3 97,50 50,97 3,50" stroke={color} strokeWidth="5" />
      <polygon points="50,22 78,50 50,78 22,50" stroke={color} strokeWidth="2" strokeDasharray="6 4" />
    </svg>
  );
  // cross / plus
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <line x1="50" y1="8"  x2="50" y2="92" stroke={color} strokeWidth="5"  strokeLinecap="round" />
      <line x1="8"  y1="50" x2="92" y2="50" stroke={color} strokeWidth="5"  strokeLinecap="round" />
      <line x1="50" y1="8"  x2="50" y2="92" stroke={color} strokeWidth="16" strokeLinecap="round" opacity="0.2" />
      <line x1="8"  y1="50" x2="92" y2="50" stroke={color} strokeWidth="16" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ScrollScene3D() {
  const { pathname } = useLocation();
  const rafRef    = useRef<number>(0);
  const syRef     = useRef(0);
  const shapeEls  = useRef<(HTMLDivElement | null)[]>([]);

  // ── Inject animation CSS once ───────────────────────────────────────────────
  useEffect(() => {
    const id = "kknt-s3d-css";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = S3D_CSS;
    document.head.appendChild(el);
  }, []);

  // ── Section entrance animation ─────────────────────────────────────────────
  useEffect(() => {
    if (prefersReducedMotion()) return; // Skip if user prefers reduced motion

    const cleanup: (() => void)[] = [];
    const tid = setTimeout(() => {
      const trigger = (el: Element, cls: string, delay: number) => {
        const h = el as HTMLElement;
        if (h.dataset.s3d) return;
        h.dataset.s3d = "1";

        const observer = new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return;
            observer.disconnect();

            setTimeout(() => {
              h.style.opacity = "0";
              requestAnimationFrame(() => {
                h.style.animationDelay = "0ms";
                h.classList.add(cls);
                h.addEventListener(
                  "animationend",
                  () => {
                    h.classList.remove(cls);
                    h.style.opacity    = "1";
                    h.style.animationDelay = "";
                    delete h.dataset.s3d;
                  },
                  { once: true }
                );
              });
            }, delay);
          },
          { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
        );

        observer.observe(el);
        cleanup.push(() => observer.disconnect());
      };

      document.querySelectorAll("section").forEach((section) => {
        // Skip hero sections that already have their own CSS animations
        if (section.querySelector(".anim-fade-up-0, .anim-mountain, .logo-pulse, .cloud-l")) return;

        const wrap = section.querySelector(":scope > div");
        if (!wrap) return;

        // Section header blocks (text-center)
        wrap.querySelectorAll(":scope > .text-center").forEach((el, i) => {
          trigger(el, "kknt-s3d-up", i * 60);
        });

        // Grid children — alternate left/right for lighter effect
        wrap.querySelectorAll(":scope > .grid > *").forEach((el, i) => {
          const cls = i % 2 === 0 ? "kknt-s3d-left" : "kknt-s3d-right";
          trigger(el, cls, i * 80);
        });

        // Flex/block children that are cards (not inside a grid)
        wrap.querySelectorAll(":scope > .flex > *, :scope > .space-y-4 > *").forEach((el, i) => {
          trigger(el, "kknt-s3d-up", i * 70);
        });
      });
    }, 200);

    return () => {
      clearTimeout(tid);
      cleanup.forEach((fn) => fn());
    };
  }, [pathname]);

  // ── Lighter card hover effect (no 3D tilt) ─────────────────────────────────
  useEffect(() => {
    if (prefersReducedMotion()) return; // Skip if user prefers reduced motion

    const tid = setTimeout(() => {
      const cards: HTMLElement[] = [];

      // Target grid children inside sections (cards, stat blocks, etc.)
      document.querySelectorAll("section .grid > *").forEach((el) => {
        const h = el as HTMLElement;
        if (h.dataset.tilt) return;
        h.dataset.tilt = "1";
        cards.push(h);

        const onMove = () => {
          h.style.transform = `scale(1.02)`;
          h.style.transition = "transform 0.2s ease";
          h.style.zIndex     = "2";
        };
        const onLeave = () => {
          h.style.transform  = "scale(1)";
          h.style.transition = "transform 0.3s ease-out";
          h.style.zIndex     = "";
          setTimeout(() => { h.style.transition = ""; }, 300);
        };

        h.addEventListener("mouseenter", onMove);
        h.addEventListener("mouseleave", onLeave);
        // Store cleanup refs
        (h as HTMLElement & { _s3dClean?: () => void })._s3dClean = () => {
          h.removeEventListener("mouseenter", onMove);
          h.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => cards.forEach((h) => {
        (h as HTMLElement & { _s3dClean?: () => void })._s3dClean?.();
      });
    }, 300);

    return () => clearTimeout(tid);
  }, [pathname]);

  // ── Parallax rAF loop (lighter and smoother) ──────────────────────────────
  useEffect(() => {
    if (prefersReducedMotion()) return; // Skip if user prefers reduced motion

    const onScroll = () => { syRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const sy = syRef.current;
      shapeEls.current.forEach((el, i) => {
        if (!el) return;
        const s   = SHAPES[i];
        const ty  = sy * s.speed * 0.5; // Reduced from 1.0 to 0.5 for lighter effect
        const rot = s.rot0 + sy * 0.008 * (i % 2 === 0 ? 1 : -1); // Reduced rotation
        el.style.transform = `translateY(${ty}px) rotate(${rot}deg)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    /* z-index 2 → floats above sections (z:0) but below navbar (z:50), modals, drawer */
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {SHAPES.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => { shapeEls.current[i] = el; }}
          className="absolute"
          style={{
            left:      `${s.x}%`,
            top:       `${s.y}%`,
            width:     s.w,
            height:    s.h,
            opacity:   s.opacity,
            transform: `rotate(${s.rot0}deg)`,
            willChange: "transform",
          }}
        >
          <ShapeIcon type={s.type} color={s.color} />
        </div>
      ))}
    </div>
  );
}
