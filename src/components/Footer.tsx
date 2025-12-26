import { Separator } from "@/components/ui/separator";
import logo from "@/assets/container-security-seasides-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Container Security Village" className="h-16 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/80">
              Part of Seasides Conference at International Centre Goa, India
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground">About</a></li>
              <li><a href="#schedule" className="text-primary-foreground/80 hover:text-primary-foreground">Schedule</a></li>
              <li><a href="#cfp" className="text-primary-foreground/80 hover:text-primary-foreground">Call for Papers</a></li>
              <li><a href="#sponsors" className="text-primary-foreground/80 hover:text-primary-foreground">Sponsors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Participate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#cfp" className="text-primary-foreground/80 hover:text-primary-foreground">Call for Papers</a></li>
              <li><a href="#volunteers" className="text-primary-foreground/80 hover:text-primary-foreground">Volunteer</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#code-of-conduct" className="text-primary-foreground/80 hover:text-primary-foreground">Code of Conduct</a></li>
              <li><a href="https://seasides.net" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">Seasides Conference</a></li>
              <li><a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 my-8" />

        <div className="text-sm text-primary-foreground/60 space-y-2">
          <p>
            © {currentYear} Container Security Village. All rights reserved.
          </p>
          <p className="text-xs">
            Container Security Village is an independent community event. When sessions mention orchestration platforms 
            for microservice deployments, such references are purely descriptive and educational in nature.
          </p>
          <p className="text-xs">
            Kubernetes® is a registered trademark of The Linux Foundation in the United States and other countries. 
            This event is not affiliated with, endorsed by, or sponsored by The Linux Foundation or the Cloud Native Computing Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
