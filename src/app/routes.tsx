import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import PageLoader from "./components/PageLoader";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Tentang = lazy(() => import("./pages/Tentang"));
const ProfilDesa = lazy(() => import("./pages/ProfilDesa"));
const Tim = lazy(() => import("./pages/Tim"));
const ProkerPage = lazy(() => import("./pages/ProkerPage"));
const Dokumentasi = lazy(() => import("./pages/Dokumentasi"));
const Berita = lazy(() => import("./pages/Berita"));
const Kontak = lazy(() => import("./pages/Kontak"));

function Lazy({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, element: <Lazy><Home /></Lazy> },
      { path: "tentang", element: <Lazy><Tentang /></Lazy> },
      { path: "desa", element: <Lazy><ProfilDesa /></Lazy> },
      { path: "tim", element: <Lazy><Tim /></Lazy> },
      { path: "proker", element: <Lazy><ProkerPage /></Lazy> },
      { path: "dokumentasi", element: <Lazy><Dokumentasi /></Lazy> },
      { path: "berita", element: <Lazy><Berita /></Lazy> },
      { path: "kontak", element: <Lazy><Kontak /></Lazy> },
      { path: "*", element: <ErrorBoundary /> },
    ],
  },
]);
