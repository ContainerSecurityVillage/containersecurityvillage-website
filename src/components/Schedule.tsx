import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "February 19, 2026",
      slots: []
    },
    {
      day: "Day 2",
      date: "February 20, 2026",
      slots: []
    },
    {
      day: "Day 3",
      date: "February 21, 2026",
      slots: []
    }
  ];

  return (
    <section id="schedule" className="pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Schedule</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            February 19-21, 2026 — Three days of insightful talks and hands-on training — completely free
          </p>
          <p className="text-sm text-accent font-semibold">
            Schedule coming soon • <a href="#cfp" className="underline"> CFP Closed </a> ( Speakers notified by Dec 30, 2025) 
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {scheduleData.map((day, index) => (
            <TabsContent key={index} value={`day${index + 1}`} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{day.day} - {day.date}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Schedule will be finalized soon
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="py-8 text-center text-muted-foreground">
                    <p> The detailed schedule will be announced soon </p>
                  </div>
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
