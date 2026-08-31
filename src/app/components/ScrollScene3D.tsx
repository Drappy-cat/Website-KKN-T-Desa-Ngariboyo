import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

// ── Floating geometry config ──────────────────────────────────────────────────
const SHAPES = [
  { id: 1, x: 83, y:   4, w: 340, h: 340, speed: 0.09, rot0:  12, type: "ring",    color: "#14532D", opacity: 0.055 },
  { id: 2, x: -6, y:  30, w: 180, h: 180, speed: 0.21, rot0:  45, type: "diamond", color: "#F4B400", opacity: 0.085 },
  { id: 3, x: 91, y:  54, w: 115, h: 115, speed: 0.35, rot0:   0, type: "cross",   color: "#14532D", opacity: 0.075 },
  { id: 4, x:  3, y:  76, w: 260, h: 260, speed: 0.15, rot0: -18, type: "ring",    color: "#F4B400", opacity: 0.050 },
  { id: 5, x: 79, y:  88, w: 145, h: 145, speed: 0.28, rot0:  28, type: "diamond", color: "#14532D", opacity: 0.065 },
  { id: 6, x: 44, y: 120, w: 100, h: 100, speed: 0.43, rot0:   0, type: "ring",    color: "#F4B400", opacity: 0.070 },
  { id: 7, x: 15, y:  10, w:  70, h:  70, speed: 0.55, rot0:  60, type: "cross",   color: "#F4B400", opacity: 0.060 },
  { id: 8, x: 65, y:  40, w: 130, h: 130, speed: 0.18, rot0: -30, type: "diamond", color: "#14532D", opacity: 0.045 },
];

// ── CSS injected once ─────────────────────────────────────────────────────────
const S3D_CSS = `
  @keyframes kkntS3dUp {
    from { opacity:0; transform: perspective(1000px) rotateX(24deg) translateY(60px) scale(0.95); }
    to   { opacity:1; transform: perspective(1000px) rotateX(0deg)  translateY(0px)  scale(1);    }
  }
  @keyframes kkntS3dLeft {
    from { opacity:0; transform: perspective(1000px) rotateY(-28deg) translateX(-70px) scale(0.96); }
    to   { opacity:1; transform: perspective(1000px) rotateY(0deg)   translateX(0px)  scale(1);    }
  }
  @keyframes kkntS3dRight {
    from { opacity:0; transform: perspective(1000px) rotateY(28deg)  translateX(70px)  scale(0.96); }
    to   { opacity:1; transform: perspective(1000px) rotateY(0deg)   translateX(0px)   scale(1);   }
  }
  .kknt-s3d-up    { animation: kkntS3dUp    0.85s cubic-bezier(0.16,1,0.3,1) both; }
  .kknt-s3d-left  { animation: kkntS3dLeft  0.85s cubic-bezier(0.16,1,0.3,1) both; }
  .kknt-s3d-right { animation: kkntS3dRight 0.85s cubic-bezier(0.16,1,0.3,1) both; }
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

  // ── 3D section entrance ─────────────────────────────────────────────────────
  useEffect(() => {
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
          trigger(el, "kknt-s3d-up", i * 80);
        });

        // Grid children — alternate left/right for staggered 3D effect
        wrap.querySelectorAll(":scope > .grid > *").forEach((el, i) => {
          const cls = i % 2 === 0 ? "kknt-s3d-left" : "kknt-s3d-right";
          trigger(el, cls, i * 110);
        });

        // Flex/block children that are cards (not inside a grid)
        wrap.querySelectorAll(":scope > .flex > *, :scope > .space-y-4 > *").forEach((el, i) => {
          trigger(el, "kknt-s3d-up", i * 90);
        });
      });
    }, 280);

    return () => {
      clearTimeout(tid);
      cleanup.forEach((fn) => fn());
    };
  }, [pathname]);

  // ── 3D card tilt on hover ───────────────────────────────────────────────────
  useEffect(() => {
    const tid = setTimeout(() => {
      const cards: HTMLElement[] = [];

      // Target grid children inside sections (cards, stat blocks, etc.)
      document.querySelectorAll("section .grid > *").forEach((el) => {
        const h = el as HTMLElement;
        if (h.dataset.tilt) return;
        h.dataset.tilt = "1";
        cards.push(h);

        const onMove = (e: MouseEvent) => {
          const rect = h.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width  - 0.5;
          const y = (e.clientY - rect.top)  / rect.height - 0.5;
          h.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) translateY(-6px) scale(1.015)`;
          h.style.transition = "transform 0.12s ease";
          h.style.zIndex     = "2";
        };
        const onLeave = () => {
          h.style.transform  = "";
          h.style.transition = "transform 0.4s cubic-bezier(0.16,1,0.3,1)";
          h.style.zIndex     = "";
          setTimeout(() => { h.style.transition = ""; }, 400);
        };

        h.addEventListener("mousemove",  onMove);
        h.addEventListener("mouseleave", onLeave);
        // Store cleanup refs
        (h as HTMLElement & { _s3dClean?: () => void })._s3dClean = () => {
          h.removeEventListener("mousemove",  onMove);
          h.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => cards.forEach((h) => {
        (h as HTMLElement & { _s3dClean?: () => void })._s3dClean?.();
      });
    }, 400);

    return () => clearTimeout(tid);
  }, [pathname]);

  // ── Parallax rAF loop ───────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => { syRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const sy = syRef.current;
      shapeEls.current.forEach((el, i) => {
        if (!el) return;
        const s   = SHAPES[i];
        const ty  = sy * s.speed;
        const rot = s.rot0 + sy * 0.022 * (i % 2 === 0 ? 1 : -1);
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
