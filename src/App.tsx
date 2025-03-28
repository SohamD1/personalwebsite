
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShootingStars from "./components/effects/ShootingStars";
import { StarsBackground } from "./components/effects/StarsBackground";
import { SparklingStars } from "./components/effects/SparklingStars";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen overflow-hidden">
        {/* Global background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground starDensity={0.0005} className="z-0" /> 
          <ShootingStars 
            minDelay={300}
            maxDelay={1000}
            starColor="#ff7a7a"
            trailColor="#ff7a7a"
            className="z-0"
          />
          <SparklingStars count={70} className="z-0" />
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
