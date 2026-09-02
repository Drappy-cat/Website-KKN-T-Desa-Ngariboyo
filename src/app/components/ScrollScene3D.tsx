import { useEffect } from "react";
import { useLocation } from "react-router";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollScene3D() {
  const { pathname } = useLocation();

  // Animasi section reveal yang ringan via IntersectionObserver
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const cleanup: (() => void)[] = [];
    const tid = setTimeout(() => {
      const trigger = (el: Element, delay: number) => {
        const h = el as HTMLElement;
        if (h.dataset.revealed) return;
        h.dataset.revealed = "1";

        const observer = new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return;
            observer.disconnect();

            setTimeout(() => {
              h.style.animationDelay = `${delay}ms`;
              h.classList.add("kknt-fade-up");
            }, 50);
          },
          { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
        );

        observer.observe(el);
        cleanup.push(() => observer.disconnect());
      };

      document.querySelectorAll("section").forEach((section) => {
        // Skip hero banner
        if (section.querySelector(".anim-fade-up-0, .anim-mountain, .logo-pulse")) return;

        const wrap = section.querySelector(":scope > div");
        if (!wrap) return;

        // Section header
        wrap.querySelectorAll(":scope > .text-center").forEach((el, i) => {
          trigger(el, i * 60);
        });

        // Grid cards
        wrap.querySelectorAll(":scope > .grid > *").forEach((el, i) => {
          trigger(el, Math.min(i * 70, 300));
        });
      });
    }, 200);

    return () => {
      clearTimeout(tid);
      cleanup.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
