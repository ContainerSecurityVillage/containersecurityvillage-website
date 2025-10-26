import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Container Security Village"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Container Security Village
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
          Where Kubernetes and containers meet security!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-white/80">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>International Centre Goa, India</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <span>February 19-21, 2026 • Seasides Conference</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-accent text-lg px-8" asChild>
            <a href="#cfp">Submit to CFP</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20" asChild>
            <a href="#volunteers">Volunteer</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
