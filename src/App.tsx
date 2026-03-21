import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NebullaOS from "./pages/NebullaOS";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BrandingIdentity from "./pages/services/BrandingIdentity";
import WebsitesSEO from "./pages/services/WebsitesSEO";
import ContentSocial from "./pages/services/ContentSocial";
import AutomationIntelligence from "./pages/services/AutomationIntelligence";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/branding-identity" element={<BrandingIdentity />} />
          <Route path="/services/websites-seo" element={<WebsitesSEO />} />
          <Route path="/services/content-social" element={<ContentSocial />} />
          <Route path="/services/automation-intelligence" element={<AutomationIntelligence />} />
          <Route path="/nebullaos" element={<NebullaOS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
