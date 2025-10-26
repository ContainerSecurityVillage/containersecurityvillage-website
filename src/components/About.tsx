import { Shield, Container, Lock, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const focuses = [
    {
      icon: Shield,
      title: "Container Hardening",
      description: "Best practices for securing container images and runtime environments"
    },
    {
      icon: Lock,
      title: "Runtime Defense",
      description: "Real-time threat detection and response for containerized workloads"
    },
    {
      icon: Container,
      title: "Kubernetes Security",
      description: "Security best practices for self-managed and cloud-managed K8s (EKS, AKS, GKE)"
    },
    {
      icon: Search,
      title: "Supply Chain Security",
      description: "Securing container pipelines from build to deployment across all environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About the Village</h2>
          <p className="text-lg text-muted-foreground">
          We are dedicated to fostering a vibrant community where Kubernetes as well as container security enthusiasts and professionals can converge to share knowledge and exchange ideas. Whether you're a seasoned Kubernetes security expert or just beginning your journey in container security, our community offers a wealth of resources and opportunities for growth and learning on self managed and cloud managed Kubernetes environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{focus.title}</h3>
                  <p className="text-muted-foreground">{focus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
