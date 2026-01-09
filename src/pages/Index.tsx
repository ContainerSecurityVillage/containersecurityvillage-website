import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WaitlistBand from "@/components/WaitlistBand";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import CFP from "@/components/CFP";
import Volunteers from "@/components/Volunteers";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import CodeOfConduct from "@/components/CodeOfConduct";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WaitlistBand />
      <About />
      <Schedule />
      <Volunteers />
      <CFP />
      <Sponsors />
      <FAQ />
      <CodeOfConduct />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
