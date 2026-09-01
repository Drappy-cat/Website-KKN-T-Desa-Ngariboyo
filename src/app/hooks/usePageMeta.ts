import { useEffect } from "react";

const SITE = "KKNT Desa Ngariboyo 2026";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} · ${SITE}`;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description ?? `${title} — Program KKNT Universitas Negeri Surabaya di Desa Ngariboyo, Magetan, Jawa Timur (13 Agustus – 25 September 2026).`;

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = `${title} · ${SITE}`;

    return () => {
      document.title = SITE;
    };
  }, [title, description]);
}
