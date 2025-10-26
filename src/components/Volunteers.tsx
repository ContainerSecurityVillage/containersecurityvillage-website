import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import teamAnjali from "@/assets/team-anjali.jpg";
import teamDivyanshu from "@/assets/team-divyanshu.jpg";

const Volunteers = () => {
  const team = [
    {
      name: "Anjali",
      role: "Founder",
      image: teamAnjali,
      bio: "Seasoned cloud security engineer skilled in DevSecOps, Kubernetes security (EKS/GKE), and multi-cloud security (AWS/Azure/GCP). Founder of Kubernetes Village, leads OWASP EKS Goat project, AWS Community Builder, and speaks at conferences including Black Hat, Nullcon, Seasides Goa, and BSides.",
      socials: [
        { icon: Linkedin, url: "https://www.linkedin.com/in/peachycloudsecurity", label: "LinkedIn" },
        { icon: Youtube, url: "https://www.youtube.com/@peachycloudsecurity", label: "YouTube" },
        { icon: Instagram, url: "https://www.instagram.com/peachycloudsecurity", label: "Instagram" }
      ]
    },
    {
      name: "Divyanshu",
      role: "Volunteer",
      image: teamDivyanshu,
      bio: "Senior security engineer skilled in product, cloud security, Kubernetes security, and DevSecOps. Co-lead of OWASP EKS Goat, reported vulnerabilities to Google, Microsoft, AWS, Apple, and others (CVE-2019-8727, CVE-2019-16918). AWS Community Builder, speaks at Black Hat Europe, Seasides, Nullcon, and BSides.",
      socials: [
        { icon: Linkedin, url: "https://www.linkedin.com/in/iamdivyanshu", label: "LinkedIn" }
      ]
    }
  ];

  return (
    <section id="volunteers" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet The Team</h2>
          <p className="text-lg text-muted-foreground">
            The masterminds behind the container security village
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent/20"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                {member.socials && member.socials.length > 0 && (
                  <div className="flex justify-center gap-3 mt-4">
                    {member.socials.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
