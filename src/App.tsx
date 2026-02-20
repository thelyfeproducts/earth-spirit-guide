import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useCartSync } from "./hooks/useCartSync";
import StPatricksBanner from "./components/StPatricksBanner";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Ambassadors from "./pages/Ambassadors";
import OurStory from "./pages/OurStory";
import CommunityPage from "./pages/CommunityPage";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import PreOrdersPage from "./pages/PreOrdersPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import WhyOrganicPage from "./pages/WhyOrganicPage";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import Ingredients from "./pages/Ingredients";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Donate from "./pages/Donate";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Cart sync wrapper component
function CartSyncProvider({ children }: { children: React.ReactNode }) {
  useCartSync();
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartSyncProvider>
          <StPatricksBanner />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/why-organic" element={<WhyOrganicPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/ambassadors" element={<Ambassadors />} />
            <Route path="/products/:handle" element={<ProductPage />} />
            <Route path="/product/:handle" element={<ProductPage />} />
            <Route path="/collections/:slug" element={<CollectionPage />} />
            <Route path="/pre-orders" element={<PreOrdersPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartSyncProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
