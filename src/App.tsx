import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import SpeciesDetail from "./pages/SpeciesDetail";
import MapPage from "./pages/MapPage";
import LifeCycle from "./pages/LifeCycle";
import Cultivation from "./pages/Cultivation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/species/:id" element={<SpeciesDetail />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/lifecycle" element={<LifeCycle />} />
              <Route path="/cultivation" element={<Cultivation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
