import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
const AboutPage = lazy(() => import("./pages/About/AboutPage").then((m) => ({ default: m.AboutPage })));
const ProductPage = lazy(() => import("./pages/Product/ProductPage").then((m) => ({ default: m.ProductPage })));
const ProductsPageBase = lazy(() => import("./pages/Products/ProductsPageBase").then((m) => ({ default: m.ProductsPageBase })));
const BagsPage = lazy(() => import('./pages/BagsPage').then((m) => ({ default: m.BagsPage })));
const CapsPage = lazy(() => import('./pages/CapsPage').then((m) => ({ default: m.CapsPage })));
const AccessoriesPage = lazy(() => import('./pages/AccessoriesPage').then((m) => ({ default: m.AccessoriesPage })));
const TshirtsPage = lazy(() => import('./pages/TshirtsPage').then((m) => ({ default: m.TshirtsPage })));
const JacketsPage = lazy(() => import('./pages/JacketsPage').then((m) => ({ default: m.JacketsPage })));
const DrinkwarePage = lazy(() => import('./pages/DrinkwarePage').then((m) => ({ default: m.DrinkwarePage })));
const DiariesPage = lazy(() => import('./pages/DiariesPage').then((m) => ({ default: m.DiariesPage })));

const BrandedCollection = lazy(() => import('./pages/Branded Collection/BrandedCollection').then((m) => ({ default: m.BrandedCollection })));
const Contact = lazy(() => import("./components/Contact/Contact").then((m) => ({ default: m.Contact })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const RefundPage = lazy(() => import("./pages/RefundPage"));
const WarrantyPage = lazy(() => import("./pages/WarrantyPage"));
import { ScrollToTop } from "./components/ScrollToTop";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
import { MobileStickyCta } from "./components/MobileStickyCta";
import { GiftBoxFloating } from "./components/GiftBoxFloating";
const GiftBoxPage = lazy(() => import("./pages/GiftBoxPage").then((m) => ({ default: m.GiftBoxPage })));
import { RouteMetaManager } from "./components/RouteMetaManager";
const CorporateGiftsDelhiPage = lazy(() => import("./pages/CorporateGiftsDelhiPage").then((m) => ({ default: m.CorporateGiftsDelhiPage })));
const EmployeeWelcomeKitsPage = lazy(() => import("./pages/EmployeeWelcomeKitsPage").then((m) => ({ default: m.EmployeeWelcomeKitsPage })));
const FestiveCorporateGiftingPage = lazy(() => import("./pages/FestiveCorporateGiftingPage").then((m) => ({ default: m.FestiveCorporateGiftingPage })));

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMetaManager />
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow pb-16 md:pb-0">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />

            {/* Products routes - Order matters! */}
            <Route path="/products" element={<ProductsPageBase category="All" />} />
            <Route path="/products/all" element={<ProductsPageBase category="All" />} />
            <Route path="/products/all/:id" element={<ProductPage />} />
            <Route path="/products/bags" element={<BagsPage />} />
            <Route path="/products/bags/:id" element={<ProductPage />} />
            <Route path="/products/caps" element={<CapsPage />} />
            <Route path="/products/caps/:id" element={<ProductPage />} />
            <Route path="/products/drinkware" element={<DrinkwarePage />} />
            <Route path="/products/drinkware/:id" element={<ProductPage />} />
            <Route path="/products/jackets" element={<JacketsPage />} />
            <Route path="/products/jackets/:id" element={<ProductPage />} />
            <Route path="/products/diaries" element={<DiariesPage />} />
            <Route path="/products/diaries/:id" element={<ProductPage />} />
            <Route path="/products/tshirts" element={<TshirtsPage />} />
            <Route path="/products/tshirts/:id" element={<ProductPage />} />
            <Route path="/products/accessories" element={<AccessoriesPage />} />
            <Route path="/products/accessories/:id" element={<ProductPage />} />

            {/* Branded Collection */}
            <Route path="/branded-collection" element={<BrandedCollection />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-box" element={<GiftBoxPage />} />
            <Route path="/corporate-gifts-delhi" element={<CorporateGiftsDelhiPage />} />
            <Route path="/employee-welcome-kits" element={<EmployeeWelcomeKitsPage />} />
            <Route path="/festive-corporate-gifting" element={<FestiveCorporateGiftingPage />} />

            {/* Policies */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />

            {/* Default/fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
        <GiftBoxFloating />
        <MobileStickyCta />
      </div>
    </BrowserRouter>
  );
}
