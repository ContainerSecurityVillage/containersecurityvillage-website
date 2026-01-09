import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? Get in touch with the organizing team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="text-accent" size={20} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:peachyclouds3curity@gmail.com" className="text-accent hover:underline">
                    peachyclouds3curity@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="text-accent" size={20} />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold">International Centre Goa</p>
                  <p className="text-muted-foreground">Dona Paula, Goa, India</p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <a href="https://www.seasides.net" target="_blank" rel="noopener noreferrer">
                      Visit Seasides Conference
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay updated on the latest news and announcements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://peachycloudsecurity.com" target="_blank" rel="noopener noreferrer">
                      Website
                      <ExternalLink size={16} className="ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://topmate.io/peachycloudsecurity" target="_blank" rel="noopener noreferrer">
                      Topmate
                      <ExternalLink size={16} className="ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://youtube.com/@Peachycloudsecurity" target="_blank" rel="noopener noreferrer">
                      YouTube
                      <ExternalLink size={16} className="ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
