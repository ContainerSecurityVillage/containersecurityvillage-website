import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who should attend Container Security Village?",
      answer: "Security professionals, DevOps engineers, SREs, developers, and anyone working with Kubernetes and container security. Whether you use self-managed Kubernetes or cloud-managed services (EKS, AKS, GKE), our sessions cover security best practices for all environments."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, Container Security Village is completely free! As a free community event, attendees and speakers are responsible for their own accommodation and travel arrangements."
    },
    {
      question: "Will accommodation or travel expenses be covered?",
      answer: "No. As a free community event, Container Security Village does not provide, reimburse, or cover any accommodation, travel, meals, or other expenses. All attendees and speakers must arrange and pay for their own stay, transportation, and related costs."
    },
    {
      question: "What expenses are covered for speakers?",
      answer: "Speakers receive community recognition, networking opportunities, and AWS credits. No monetary compensation, travel reimbursement, accommodation, meals, or any other expenses will be provided. This is a free community event where everyone participates at their own cost."
    },
    {
      question: "What are the prerequisites for hands-on sessions?",
      answer: "Basic familiarity with Kubernetes, containers, and Linux. Each session lists specific prerequisites. For hands-on labs, bring a laptop with Docker/Kubernetes tools installed (or we'll provide cloud environments)."
    },
    {
      question: "Do I need to be part of Seasides Conference to attend?",
      answer: "Container Security Village is part of Seasides Conference at International Centre Goa. The village is free and open to all Seasides attendees, and you can access the village activities with your conference pass."
    },
    {
      question: "Are there opportunities to present?",
      answer: "Yes! Submit your proposal through our Call for Papers before January 20, 2026. Speakers will be notified by January 26, 2026. We welcome talks, hands-on demonstrations, lightning talks, and tool showcases on Kubernetes and container security topics."
    },
    {
      question: "What should I bring?",
      answer: "Bring a laptop for hands-on sessions, power adapters, and business cards for networking. We'll provide WiFi and networking support for hands-on labs."
    },
    {
      question: "Will sessions be recorded?",
      answer: "Selected talks may be recorded and made available after the event. Interactive hands-on labs typically won't be recorded due to their nature."
    },
    {
      question: "Can I volunteer at the village?",
      answer: "Yes! We welcome volunteers. Contact us at kubernetesvilllage@gmail.com or check the Volunteers section to apply."
    },
    {
      question: "Is there a Code of Conduct?",
      answer: "Yes, we follow a strict Code of Conduct ensuring a safe, inclusive, and respectful environment for all participants. See the Code of Conduct section below."
    },
    {
      question: "Where can I stay during the conference?",
      answer: "The venue is at International Centre Goa. As a free community event, you're responsible for your own accommodation. Check the Seasides Conference website for accommodation recommendations and booking details."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Container Security Village
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6 shadow-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
