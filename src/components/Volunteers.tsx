import { Card, CardContent } from "@/components/ui/card";
import teamAnjali from "@/assets/team-anjali.jpg";
import teamDivyanshu from "@/assets/team-divyanshu.jpg";

const Volunteers = () => {
  const team = [
    {
      name: "Anjali",
      role: "Founder",
      image: teamAnjali,
      bio: "Visionary leader and founder of Container Security Village, passionate about building secure containerized systems and fostering the security community."
    },
    {
      name: "Divyanshu",
      role: "Volunteer",
      image: teamDivyanshu,
      bio: "Dedicated volunteer helping make Container Security Village a success through tireless support and community engagement."
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
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
