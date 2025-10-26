import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertCircle, Mail } from "lucide-react";

const CodeOfConduct = () => {
  const principles = [
    {
      icon: Users,
      title: "Be Respectful",
      description: "Treat all participants with respect and consideration. We value diverse perspectives and experiences."
    },
    {
      icon: Shield,
      title: "Inclusive Environment",
      description: "We're committed to providing a harassment-free experience for everyone, regardless of background."
    },
    {
      icon: AlertCircle,
      title: "Zero Tolerance",
      description: "Harassment, discrimination, or inappropriate behavior will not be tolerated and may result in removal."
    },
    {
      icon: Mail,
      title: "Report Concerns",
      description: "If you experience or witness unacceptable behavior, please report it to event organizers immediately."
    }
  ];

  return (
    <section id="code-of-conduct" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Code of Conduct</h2>
            <p className="text-lg text-muted-foreground">
              We are committed to creating a safe, welcoming, and inclusive environment for all participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Expected Behavior</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Exercise consideration and respect in your speech and actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Attempt collaboration before conflict</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Refrain from demeaning, discriminatory, or harassing behavior and speech</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Be mindful of your surroundings and fellow participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Alert organizers if you notice violations of this Code of Conduct</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card mt-6">
            <CardHeader>
              <CardTitle>Unacceptable Behavior</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Unacceptable behavior includes, but is not limited to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Harassment, intimidation, or discrimination in any form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Physical, verbal, or written abuse or threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Sexist, racist, homophobic, or otherwise discriminatory jokes or language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Unwelcome sexual attention or advances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Deliberate disruption of talks or other events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
