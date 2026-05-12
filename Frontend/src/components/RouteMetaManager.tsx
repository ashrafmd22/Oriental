import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

const SITE_URL = "https://www.orientalgifting.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type MetaConfig = {
  title: string;
  description: string;
  keywords: string;
};

const defaultMeta: MetaConfig = {
  title: "Corporate Gifting Solutions | Oriental Enterprises",
  description:
    "Oriental Enterprises helps brands source and customize all types of corporate gift items across budgets, timelines, and campaigns.",
  keywords:
    "corporate gifting, corporate gift suppliers, custom branded gifts, employee gifts, client gifting",
};

const staticRoutes: Record<string, MetaConfig> = {
  "/": {
    title: "All Corporate Gift Items with Custom Branding | Oriental Enterprises",
    description:
      "Explore all categories of corporate gift items with custom branding, packaging, and pan-India delivery support for teams, clients, and events.",
    keywords:
      "corporate gift items, custom corporate gifts, employee welcome kits, festive corporate gifting, branded merchandise",
  },
  "/about": {
    title: "About Oriental Enterprises | Corporate Gifting Since 1990",
    description:
      "Learn about Oriental Enterprises, a trusted corporate gifting partner with decades of experience in sourcing, customization, and business gifting support.",
    keywords:
      "about oriental enterprises, corporate gifting company, business gifting partner",
  },
  "/products": {
    title: "Corporate Gift Product Catalogue | Oriental Enterprises",
    description:
      "Browse corporate gift products across bags, drinkware, apparel, diaries, caps, accessories, and more with branding-ready options.",
    keywords:
      "corporate gift catalogue, promotional products, corporate merchandise categories",
  },
  "/branded-collection": {
    title: "Branded Corporate Gifts Collection | Oriental Enterprises",
    description:
      "Discover premium brand gifting options for executive gifting, client appreciation, and high-value corporate campaigns.",
    keywords:
      "branded corporate gifts, premium gifting brands, executive corporate gifts",
  },
  "/contact": {
    title: "Contact for Corporate Gift Quotes | Oriental Enterprises",
    description:
      "Request a corporate gifting quote with quantity, budget, and timeline. Our team helps with sourcing, branding, and delivery planning.",
    keywords:
      "corporate gifting quote, custom gifting inquiry, bulk gift supplier contact",
  },
  "/gift-box": {
    title: "Gift Box Shortlist | Oriental Enterprises",
    description:
      "Build your corporate gift shortlist and share requirements for a curated proposal with pricing and branding options.",
    keywords:
      "corporate gift shortlist, gift box planner, custom gift proposal",
  },
  "/corporate-gifts-delhi": {
    title: "Corporate Gifts Supplier in Delhi | Oriental Enterprises",
    description:
      "Corporate gifts supplier in Delhi for onboarding kits, festive gifting, client gifts, and branded merchandise with practical delivery support.",
    keywords:
      "corporate gifts delhi, corporate gifting company delhi, bulk corporate gifts delhi",
  },
  "/employee-welcome-kits": {
    title: "Employee Welcome Kits with Branding | Oriental Enterprises",
    description:
      "Plan employee welcome kits with curated products, custom branding, and onboarding-friendly delivery coordination.",
    keywords:
      "employee welcome kits, onboarding kits, branded joining kits",
  },
  "/festive-corporate-gifting": {
    title: "Festive Corporate Gifting Solutions | Oriental Enterprises",
    description:
      "Festive corporate gifting options across budgets with custom branding and practical planning support for teams and clients.",
    keywords:
      "festive corporate gifting, diwali corporate gifts, client festive gifts",
  },
  "/privacy": {
    title: "Privacy Policy | Oriental Enterprises",
    description: "Read the privacy policy for Oriental Enterprises.",
    keywords: "privacy policy",
  },
  "/terms": {
    title: "Terms and Conditions | Oriental Enterprises",
    description: "Read the terms and conditions for Oriental Enterprises.",
    keywords: "terms and conditions",
  },
  "/refund": {
    title: "Refund and Cancellation Policy | Oriental Enterprises",
    description: "Review refund and cancellation policy details.",
    keywords: "refund policy, cancellation policy",
  },
  "/warranty": {
    title: "Warranty Policy | Oriental Enterprises",
    description: "Review warranty terms for products and services.",
    keywords: "warranty policy",
  },
};

const categoryMeta: Record<string, MetaConfig> = {
  bags: {
    title: "Corporate Gift Bags | Oriental Enterprises",
    description:
      "Bulk corporate gift bags with branding options for onboarding, events, and client gifting campaigns.",
    keywords: "corporate bags, branded bags, custom office gift bags",
  },
  caps: {
    title: "Custom Corporate Caps | Oriental Enterprises",
    description:
      "Promotional and team caps for events, campaigns, and employee engagement with logo branding support.",
    keywords: "corporate caps, promotional caps, logo caps bulk",
  },
  drinkware: {
    title: "Corporate Drinkware Gifts | Oriental Enterprises",
    description:
      "Discover bottles, flasks, mugs, and premium drinkware gifts for corporate programs and events.",
    keywords: "corporate bottles, branded drinkware, promotional mugs",
  },
  diaries: {
    title: "Corporate Diaries and Stationery Gifts | Oriental Enterprises",
    description:
      "Premium diaries, notebooks, and office stationery gifting options with branding and packaging support.",
    keywords: "corporate diaries, branded notebooks, office gifts",
  },
  jackets: {
    title: "Corporate Jackets and Apparel Gifts | Oriental Enterprises",
    description:
      "Corporate jackets for teams, events, and premium gifting with embroidery and branding options.",
    keywords: "corporate jackets, branded jackets, team apparel gifts",
  },
  tshirts: {
    title: "Corporate T-Shirts and Apparel | Oriental Enterprises",
    description:
      "Custom corporate t-shirts for teams, campaigns, and promotional events in bulk quantities.",
    keywords: "corporate t shirts, branded t shirts, promotional apparel",
  },
  accessories: {
    title: "Corporate Gift Accessories | Oriental Enterprises",
    description:
      "Explore practical corporate accessories and giveaway items for employees, clients, and events.",
    keywords: "corporate accessories, giveaway products, office utility gifts",
  },
};

function getMetaForPath(pathname: string): MetaConfig {
  if (pathname in staticRoutes) {
    return staticRoutes[pathname];
  }

  if (pathname.startsWith("/products/")) {
    const segment = pathname.split("/")[2];
    if (segment && categoryMeta[segment]) {
      return categoryMeta[segment];
    }
    return staticRoutes["/products"];
  }

  return defaultMeta;
}

function isIndexablePath(pathname: string): boolean {
  if (pathname in staticRoutes) {
    return true;
  }

  if (pathname.startsWith("/products/")) {
    return true;
  }

  return false;
}

export function RouteMetaManager() {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  const meta = useMemo(() => getMetaForPath(location.pathname), [location.pathname]);
  const isIndexable = useMemo(() => isIndexablePath(location.pathname), [location.pathname]);

  const structuredData = useMemo(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Oriental Enterprises",
      url: SITE_URL,
      logo: `${SITE_URL}/Favicon.svg`,
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9899987779",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Store",
      name: "Oriental Enterprises",
      image: DEFAULT_OG_IMAGE,
      url: SITE_URL,
      telephone: "+91-9899987779",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8769/14-B, Shidipura Karol Bagh",
        addressLocality: "New Delhi",
        postalCode: "110005",
        addressCountry: "IN",
      },
      areaServed: "India",
    };

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      url: canonicalUrl,
    };

    return [organizationSchema, localBusinessSchema, webPageSchema];
  }, [canonicalUrl, meta.description, meta.title]);

  useEffect(() => {
    trackPageView(location.pathname, meta.title);
  }, [location.pathname, meta.title]);

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={isIndexable ? "index, follow" : "noindex, nofollow"} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content="Oriental Enterprises" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
