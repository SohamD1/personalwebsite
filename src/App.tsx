
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShootingStars from "./components/effects/ShootingStars";
import { StarsBackground } from "./components/effects/StarsBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen overflow-hidden">
        {/* Global background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground starDensity={0.0003} className="z-0" /> {/* Increased star density */}
          <ShootingStars 
            minDelay={500}
            maxDelay={2000}
            starColor="#ff4d4d"
            trailColor="#ff4d4d"
            className="z-0"
          />
        </div>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
