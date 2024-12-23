import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductPage } from "./pages/ProductPage"; // Handles single product details
import { ProductsPageBase } from "./pages/ProductsPageBase";
import { BagsPage } from './pages/BagsPage';
import { CapsPage } from './pages/CapsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { TshirtsPage } from './pages/TshirtsPage';
import { JacketsPage } from './pages/JacketsPage';
import { RaincoatsPage } from './pages/RaincoatsPage';
import { TracksuitsPage } from './pages/TracksuitsPage';
import { Contact } from "./components/Contact";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import RefundPage from "./pages/RefundPage";
import WarrantyPage from "./pages/WarrantyPage";

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />

            {/* Products */}
            <Route path="/products" element={<ProductsPageBase category="All" />} />
            <Route path="/products/bags" element={<BagsPage />} />
            <Route path="/products/caps" element={<CapsPage />} />
            <Route path="/products/raincoats" element={<RaincoatsPage />} />
            <Route path="/products/jackets" element={<JacketsPage />} />
            <Route path="/products/tracksuits" element={<TracksuitsPage />} />
            <Route path="/products/Tshirts" element={<TshirtsPage />} />
            <Route path="/products/accessories" element={<AccessoriesPage />} />
            <Route path="/products/:category" element={<ProductsPageBase category="All" />} /> {/* Dynamic category route */}
            <Route path="/products/:category/:id" element={<ProductPage />} /> {/* Single product detail */}

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Policies */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />

            {/* Default/fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
