import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Coffee, Presentation } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "February 19, 2026 (Thursday)",
      slots: [
        {
          time: "10:00 – 10:30 AM",
          sessionName: "Welcome & Container Security Village Introduction",
          speaker: "Anjali Shukla",
          type: "talk",
        },
        {
          time: "10:30 – 11:00 AM",
          sessionName: "Defeating the Scanner: The Art of Building Zero-CVE Container Images",
          speaker: "Rohan Birtia",
          type: "talk",
        },
        {
          time: "11:00 – 11:30 AM",
          sessionName: "Why Secure Containers Start Long Before Runtime",
          speaker: "Vaishnavi Sharma, Rachana Vishwanathula",
          type: "talk",
        },
        {
          time: "11:30 – 11:45 AM",
          sessionName: "Kubernetes Security Quiz (Women Only)",
          speaker: "Anjali & Divyanshu",
          type: "quiz",
        },
        {
          time: "11:45 – 12:45 PM",
          sessionName: "Demo: Harnessing eBPF and Container Security in Kubernetes",
          speaker: "Abhishek Dubey, Sajal Jain",
          type: "demo",
        },
        {
          time: "12:45 – 2:15 PM",
          sessionName: "Lunch Break",
          speaker: "",
          type: "break",
        },
        {
          time: "2:15 – 2:35 PM",
          sessionName: "Demo: Automated CIS Scanning using Kube Bench",
          speaker: "Anjali Shukla",
          type: "demo",
        },
        {
          time: "2:35 – 3:10 PM",
          sessionName: "Kubernetes Security",
          speaker: "Pankaj Kumar",
          type: "talk",
        },
        {
          time: "3:10 – 3:30 PM",
          sessionName: "AWS Security Quiz (Open to All)",
          speaker: "Anjali & Divyanshu",
          type: "quiz",
        },
        {
          time: "3:30 – 4:00 PM",
          sessionName: "Resume Review & Career Guidance for Cloud Security",
          speaker: "Anjali & Divyanshu",
          type: "workshop",
        },
      ],
    },
    {
      day: "Day 2",
      date: "February 20, 2026 (Friday)",
      slots: [
        {
          time: "9:30 – 10:00 AM",
          sessionName: "Browser Based IAC Security Scanner",
          speaker: "Divyanshu Shukla",
          type: "talk",
        },
        {
          time: "10:00 – 10:15 AM",
          sessionName: "Patch Once, Propagate Everywhere: Hierarchical Golden Container Images",
          speaker: "Nikhil Mehra",
          type: "talk",
        },
        {
          time: "10:15 – 10:30 AM",
          sessionName: "Threat Modelling in Cloud",
          speaker: "Anjali Shukla",
          type: "talk",
        },
        {
          time: "10:30 – 11:00 AM",
          sessionName: "AWS Security Quiz (Women Only)",
          speaker: "Anjali & Divyanshu",
          type: "quiz",
        },
        {
          time: "11:00 – 11:45 AM",
          sessionName: "Demo: Securing the Container Frontier: Image Scanning, Managed K8s, and Runtime Protection in Cloud",
          speaker: "Deepak Gupta, Vishant Sharma",
          type: "demo",
        },
        {
          time: "11:45 – 12:15 PM",
          sessionName: "Post-Mortem of a Container Breach: Forensics in the Cloud-Native Era",
          speaker: "Saurabh Mishra",
          type: "talk",
        },
        {
          time: "12:15 – 12:45 PM",
          sessionName: "How to become cloud security engineer",
          speaker: "Divyanshu Shukla",
          type: "talk",
        },
        {
          time: "12:45 – 2:15 PM",
          sessionName: "Lunch Break",
          speaker: "",
          type: "break",
        },
        {
          time: "2:15 – 2:45 PM",
          sessionName: "Red vs Blue: Attacking and Defending EKS Workload Identity",
          speaker: "Devanshu Nagpal",
          type: "talk",
        },
        {
          time: "2:45 – 3:00 PM",
          sessionName: "Kubernetes Security Quiz (Open to All)",
          speaker: "Anjali & Divyanshu",
          type: "quiz",
        },
        {
          time: "3:00 – 4:00 PM",
          sessionName: "Resume Review & Career Guidance for Cloud Security",
          speaker: "Anjali & Divyanshu",
          type: "workshop",
        },
      ],
    },
    {
      day: "Day 3",
      date: "February 21, 2026 (Saturday)",
      slots: [
        {
          time: "9:00 AM – 5:00 PM",
          sessionName: "EKS Goat: AWS EKS Security Masterclass",
          speaker: "Anjali & Divyanshu",
          type: "workshop",
          link: "https://peachycloudsecurity.com/about",
        },
      ],
    },
  ];

  const getSessionTypeBadge = (type: string) => {
    const badges = {
      talk: { label: "Talk", variant: "default" as const, icon: Presentation },
      demo: { label: "Demo", variant: "secondary" as const, icon: Presentation },
      quiz: { label: "Quiz", variant: "outline" as const, icon: Users },
      break: { label: "Break", variant: "outline" as const, icon: Coffee },
      workshop: { label: "Workshop", variant: "default" as const, icon: Users },
    };
    return badges[type as keyof typeof badges] || badges.talk;
  };

  const getRowClassName = (type: string) => {
    const classes = {
      break: "bg-muted/30 hover:bg-muted/40",
      quiz: "bg-secondary/20 hover:bg-secondary/30",
      demo: "bg-accent/5 hover:bg-accent/10",
      workshop: "bg-primary/5 hover:bg-primary/10",
      talk: "hover:bg-secondary/30",
    };
    return classes[type as keyof typeof classes] || classes.talk;
  };

  const renderSpeakerName = (speaker: string) => {
    if (!speaker) return <span className="italic text-muted-foreground/70">—</span>;
    
    const linkUrl = "https://peachycloudsecurity.com/about";
    
    // Check if speaker contains "Anjali" or "Divyanshu"
    if (speaker.includes("Anjali") || speaker.includes("Divyanshu")) {
      // Use regex to find and replace names with links
      const parts: (string | JSX.Element)[] = [];
      let lastIndex = 0;
      
      // Match "Anjali" or "Divyanshu" with optional last name
      const regex = /(Anjali(?:\s+\w+)?|Divyanshu(?:\s+\w+)?)/g;
      let match;
      
      while ((match = regex.exec(speaker)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          parts.push(speaker.substring(lastIndex, match.index));
        }
        
        // Add the linked name
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent hover:underline transition-colors"
          >
            {match[1]}
          </a>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      // Add remaining text
      if (lastIndex < speaker.length) {
        parts.push(speaker.substring(lastIndex));
      }
      
      return <>{parts}</>;
    }
    
    return <span>{speaker}</span>;
  };

  return (
    <section id="schedule" className="pt-20 pb-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            February 19–21, 2026 — Three days of insightful talks and hands-on
            training — completely free
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-12 bg-secondary/50 backdrop-blur-sm">
            <TabsTrigger value="day1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Day 1
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Day 2
            </TabsTrigger>
            <TabsTrigger value="day3" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Day 3
            </TabsTrigger>
          </TabsList>

          {scheduleData.map((day, index) => (
              <TabsContent key={index} value={`day${index + 1}`} className="mt-8">
                <Card className="shadow-lg border-2 border-primary/10 bg-card/95 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                        <Clock className="h-6 w-6 text-accent" />
                        {day.day} - {day.date}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {day.slots.length > 0 ? (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                              <TableHead className="w-[200px] font-semibold text-foreground">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  Time
                                </div>
                              </TableHead>
                              <TableHead className="font-semibold text-foreground">
                                <div className="flex items-center gap-2">
                                  <Presentation className="h-4 w-4" />
                                  Session
                                </div>
                              </TableHead>
                              <TableHead className="w-[220px] font-semibold text-foreground">
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  Speaker
                                </div>
                              </TableHead>
                              <TableHead className="w-[120px] font-semibold text-foreground text-center">
                                Type
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {day.slots.map((slot, i) => {
                              const badgeInfo = getSessionTypeBadge(slot.type);
                              const BadgeIcon = badgeInfo.icon;
                              return (
                                <TableRow
                                  key={i}
                                  className={`transition-colors ${getRowClassName(slot.type)}`}
                                >
                                  <TableCell className="font-semibold text-primary whitespace-nowrap">
                                    {slot.time}
                                  </TableCell>
                                  <TableCell className="font-medium">
                                    {slot.link ? (
                                      <a
                                        href={slot.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-accent hover:underline transition-colors"
                                      >
                                        {slot.sessionName}
                                      </a>
                                    ) : (
                                      slot.sessionName
                                    )}
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">
                                    {renderSpeakerName(slot.speaker)}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <Badge
                                      variant={badgeInfo.variant}
                                      className="flex items-center gap-1 w-fit mx-auto"
                                    >
                                      <BadgeIcon className="h-3 w-3" />
                                      {badgeInfo.label}
                                    </Badge>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="py-12 text-center text-muted-foreground">
                        <p className="text-lg">The detailed schedule will be announced soon.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
