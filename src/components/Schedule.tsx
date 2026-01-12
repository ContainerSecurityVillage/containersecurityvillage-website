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
        },
        {
          time: "10:30 – 11:00 AM",
          sessionName: "Defeating the Scanner: The Art of Building Zero-CVE Container Images",
          speaker: "Rohan Birtia",
        },
        {
          time: "11:00 – 11:30 AM",
          sessionName: "Why Secure Containers Start Long Before Runtime",
          speaker: "Vaishnavi Sharma, Rachana Vishwanathula",
        },
        {
          time: "11:30 – 11:45 AM",
          sessionName: "Kubernetes Security Quiz (Women Only)",
          speaker: "",
        },
        {
          time: "11:45 – 12:45 PM",
          sessionName: "Demo: Harnessing eBPF and Container Security in Kubernetes",
          speaker: "Abhishek Dubey, Sajal Jain",
        },
        {
          time: "12:45 – 2:15 PM",
          sessionName: "Lunch Break",
          speaker: "",
        },
        {
          time: "2:15 – 2:35 PM",
          sessionName: "Demo: Automated CIS Scanning using Kube Bench",
          speaker: "Anjali Shukla",
        },
        {
          time: "2:35 – 3:10 PM",
          sessionName: "Kubernetes Security",
          speaker: "Pankaj Kumar",
        },
        {
          time: "3:10 – 3:30 PM",
          sessionName: "AWS Security Quiz (Open to All)",
          speaker: "",
        },
        {
          time: "3:30 – 4:00 PM",
          sessionName: "Resume Review & Career Guidance for Cloud Security",
          speaker: "",
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
        },
        {
          time: "10:00 – 10:15 AM",
          sessionName: "Patch Once, Propagate Everywhere: Hierarchical Golden Container Images",
          speaker: "Nikhil Mehra",
        },
        {
          time: "10:15 – 10:30 AM",
          sessionName: "Session by Anjali",
          speaker: "",
        },
        {
          time: "10:30 – 11:00 AM",
          sessionName: "AWS Security Quiz (Women Only)",
          speaker: "",
        },
        {
          time: "11:00 – 11:45 AM",
          sessionName: "Demo: Securing the Container Frontier: Image Scanning, Managed K8s, and Runtime Protection in Cloud",
          speaker: "Deepak Gupta, Vishant Sharma",
        },
        {
          time: "11:45 – 12:15 PM",
          sessionName: "Post-Mortem of a Container Breach: Forensics in the Cloud-Native Era",
          speaker: "Saurabh Mishra",
        },
        {
          time: "12:15 – 12:45 PM",
          sessionName: "TBD",
          speaker: "",
        },
        {
          time: "12:45 – 2:15 PM",
          sessionName: "Lunch Break",
          speaker: "",
        },
        {
          time: "2:15 – 2:45 PM",
          sessionName: "Red vs Blue: Attacking and Defending EKS Workload Identity",
          speaker: "Devanshu Nagpal",
        },
        {
          time: "2:45 – 3:00 PM",
          sessionName: "Kubernetes Security Quiz (Open to All)",
          speaker: "",
        },
        {
          time: "3:00 – 4:00 PM",
          sessionName: "Resume Review & Career Guidance for Cloud Security",
          speaker: "",
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
          speaker: "",
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Schedule</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            February 19–21, 2026 — Three days of insightful talks and hands-on
            training — completely free
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {scheduleData.map((day, index) => (
            <TabsContent key={index} value={`day${index + 1}`} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {day.day} - {day.date}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day.slots.length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[180px]">Time</TableHead>
                            <TableHead>Session name</TableHead>
                            <TableHead className="w-[200px]">Speaker Name</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {day.slots.map((slot, i) => (
                            <TableRow key={i}>
                              <TableCell className="font-medium">
                                {slot.time}
                              </TableCell>
                              <TableCell>{slot.sessionName}</TableCell>
                              <TableCell className="text-muted-foreground">
                                {slot.speaker || "-"}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <p>The detailed schedule will be announced soon.</p>
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
