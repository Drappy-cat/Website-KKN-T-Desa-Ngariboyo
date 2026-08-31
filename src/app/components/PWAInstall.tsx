import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstall() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Inject manifest link
    if (!document.querySelector('link[rel="manifest"]')) {
      const link = document.createElement("link");
      link.rel = "manifest";
      link.href = "/manifest.json";
      document.head.appendChild(link);
    }
    // Inject theme-color meta
    if (!document.querySelector('meta[name="theme-color"]')) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#14532D";
      document.head.appendChild(meta);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setInstalled(true));
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setPrompt(null);
  };

  if (!prompt || dismissed || installed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] w-full max-w-sm mx-4">
      <div className="bg-card border border-border rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
          <Download className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-bold text-foreground text-sm">Pasang sebagai Aplikasi</div>
          <div className="text-muted-foreground text-xs font-caption">Akses KKNT Ngariboyo lebih cepat</div>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={install}
            className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-secondary transition-colors font-body"
          >
            Pasang
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
