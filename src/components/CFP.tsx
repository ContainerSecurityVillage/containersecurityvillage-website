import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const CFP = () => {
  const topics = [
    "Container image scanning",
    "Kubernetes security attack ",
    "Kubernetes security defense",
    "Kubernetes hardening",
    "Secrets management in K8s",
    "RBAC and access controls",
    "Cloud-managed K8s security (EKS, AKS, GKE)",
    "Cloud-native security architectures",
    "Runtime kubernetes security",
    "Supply-chain security and SBOM in K8s",
    "Container breakout",
    "Self-hosted Kubernetes security",
    "Anything related to Kubernetes security"
  ];

  const formats = [
    { type: "Talks", duration: "25–30 minutes", description: "Technical presentations on security practices" },
    { type: "Hands-on Talks", duration: "30–45 minutes", description: "Interactive demonstrations with hands-on sessions" },
    { type: "Lightning Talks", duration: "10–15 minutes", description: "Quick insights and case studies" },
    { type: "Tool Demonstrations", duration: "30–45 minutes", description: "Showcase new tools, techniques, and innovations" }
  ];

  const benefits = [
    "AWS credits for speakers",
    "Community recognition",
    "Networking opportunities",
    "Limited Swag opportunities"
  ];

  return (
    <section id="cfp" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Call for Papers 2026</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seeking research, practical implementations, and hands-on sessions on Kubernetes security, 
              container hardening, supply-chain protection, and cloud-native security. 
              Vendor-neutral, tool-focused, and experience-sharing sessions welcome.
            </p>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">CFP is open!</CardTitle>
              <p className="text-muted-foreground mb-2">
                Submit via the form below. You can edit your response later. All experience levels and formats welcome.
              </p>
              <p className="text-sm font-semibold text-accent">
                Deadline: January 20, 2026 | Speakers notified by January 26, 2026
              </p>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="gradient-accent w-full" asChild>
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  <Send size={18} className="mr-2" />
                  Open CFP Form
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Topics We Love</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Formats & Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {formats.map((format, index) => (
                    <div key={index} className="pb-3 border-b last:border-0">
                      <div className="font-semibold">{format.type}</div>
                      <div className="text-sm text-muted-foreground">{format.duration}</div>
                      <div className="text-sm text-muted-foreground">{format.description}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="font-semibold mb-2">Speaker Benefits:</div>
                  <ul className="space-y-1">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card mt-8 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                <span>As a free community event, attendees and speakers are responsible for their own accommodation and travel arrangements</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                <span>Please note that internet access will be limited to trainers only. Attendees are expected to use their personal mobile hotspots for any internet connectivity needs during the conference</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                <span>Still not sure or have more questions? Contact us at <a href="mailto:anjali.shukla@owasp.org" className="text-accent underline">anjali.shukla@owasp.org</a></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CFP;
