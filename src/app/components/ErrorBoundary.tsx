import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = "Terjadi kesalahan yang tidak terduga saat memuat halaman.";
  let errorTitle = "Terjadi Kesalahan";
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 404) {
      errorTitle = "Halaman Tidak Ditemukan";
      errorMessage = "Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak tersedia.";
    } else {
      errorMessage = error.statusText || errorMessage;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-foreground font-body">
      <div className="max-w-md w-full bg-card rounded-[28px] border border-border p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.1)] space-y-6">
        <div className="w-16 h-16 bg-amber-500/15 rounded-2xl flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <div className="text-xs font-bold font-caption uppercase tracking-wider text-muted-foreground mb-1">
            Status {statusCode}
          </div>
          <h1 className="font-display font-extrabold text-2xl text-foreground">
            {errorTitle}
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {errorMessage}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-secondary transition-all shadow-md font-body"
          >
            <RefreshCw className="w-4 h-4" /> Muat Ulang
          </button>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-muted text-foreground hover:bg-muted/80 font-semibold text-sm transition-all border border-border font-body"
          >
            <Home className="w-4 h-4" /> Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
