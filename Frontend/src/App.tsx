import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
// import { AboutPage } from "./pages/AboutPage";
import { AboutPage } from "./pages/About/AboutPage";
//import { ProductPage } from "./pages/ProductPage"; // Handles single product details
import { ProductPage } from "./pages/Product/ProductPage";
// import { ProductsPageBase } from "./pages/ProductsPageBase";
import { ProductsPageBase } from "./pages/Products/ProductsPageBase";
import { BagsPage } from './pages/BagsPage';
import { CapsPage } from './pages/CapsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { TshirtsPage } from './pages/TshirtsPage';
import { JacketsPage } from './pages/JacketsPage';
import { DrinkwarePage } from './pages/DrinkwarePage';
import { DiariesPage } from './pages/DiariesPage';
// import { Contact } from "./components/Contact";
import { Contact } from "./components/Contact/Contact";
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

            {/* Products - Important: Order matters! More specific routes first */}
            <Route path="/products/bags" element={<BagsPage />} />
            <Route path="/products/caps" element={<CapsPage />} />
            <Route path="/products/drinkware" element={<DrinkwarePage />} />
            <Route path="/products/jackets" element={<JacketsPage />} />
            <Route path="/products/diaries" element={<DiariesPage />} />
            <Route path="/products/tshirts" element={<TshirtsPage />} />
            <Route path="/products/accessories" element={<AccessoriesPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/products" element={<ProductsPageBase category="All" />} />

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
