import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Download } from "lucide-react";

const Sponsors = () => {
  const tiers = [
    {
      name: "Diamond",
      color: "from-blue-500 to-purple-600",
      benefits: [
        "Logo printed on the badge, Lanyard and lead logo placed on sponsorship page as Diamond sponsors",
        "LinkedIn and X Shout Outs featuring your brand/Logo and during Seasides and periodic posts",
        "Logo printed on all promotional materials (standees) which will be displayed at event venues",
        "Standee with the company logo to be kept at the venue",
        "Acknowledgement/Thank You in Seasides materials developed for the conference",
        "Periodic posts thanking the sponsors"
      ]
    },
    {
      name: "Platinum",
      color: "from-slate-400 to-slate-600",
      benefits: [
        "Logo placed on sponsorship page as Platinum sponsors",
        "LinkedIn and X Shout Outs featuring your brand/Logo and during Seasides and periodic posts",
        "Logo printed on all promotional materials (standees) which will be displayed at event venues",
        "Standee with the company logo to be kept at the venue",
        "Periodic posts thanking the sponsors"
      ]
    },
    {
      name: "Gold",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Company logo featured sponsorship page as Gold sponsors",
        "LinkedIn and X Shout Outs featuring your brand/Logo and during Seasides and periodic posts",
        "Logo printed on all promotional materials (standees) which will be displayed at event venues",
        "Standee with the company logo to be kept at the venue"
      ]
    },
    {
      name: "Food & Beverage",
      color: "from-orange-400 to-red-500",
      benefits: [
        "Credit as Food and Beverage sponsors for each day, announced at the venues",
        "Company logo featured on sponsors pages",
        "LinkedIn and X shoutout featuring your brand/Logo",
        "Sponsor recognition and acknowledgement featured at the venue"
      ]
    },
    {
      name: "Bronze",
      color: "from-amber-600 to-orange-700",
      benefits: [
        "Company logo featured on Seasides' Sponsors page",
        "LinkedIn and X Shout Outs featuring your brand/Logo and during Seasides and periodic posts",
        "Sponsor recognition and acknowledgement at the venue"
      ]
    },
    {
      name: "Silver",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Credit as Evening snacks sponsors, announced at the venue",
        "Company logo featured on Seasides' Sponsors page",
        "LinkedIn and X shoutout featuring your brand/Logo",
        "Standee with the company logo to be kept at the venue",
        "Sponsor recognition and acknowledgement at the venue"
      ]
    },
    {
      name: "Special Supporter",
      color: "from-green-500 to-emerald-600",
      benefits: [
        "As special supporter we will send thankyou posts and Mention at the event"
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sponsorship Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Support Container Security Village and connect with security professionals
            </p>
            <p className="text-sm font-semibold text-accent mb-6">
              Note: This redirects to Seasides sponsorship kit as we don't have separate sponsorship
            </p>
            <Button size="lg" className="gradient-accent" asChild>
              <a href="https://www.seasides.net/Seasides_Proposal.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-2" />
                Download Sponsorship Kit
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  index === 6 ? 'md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-t-lg bg-gradient-to-r ${tier.color} mb-4`} />
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
