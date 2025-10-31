import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const historicalEvents = [
  {
    date: "2024-03-15",
    ticker: "ASML.AS",
    type: "Investigation Opened",
    severity: "high",
    description: "Unusual trading pattern detected - volume spike of 450% before earnings announcement",
    outcome: "Under Review",
  },
  {
    date: "2024-02-28",
    ticker: "INGA.AS",
    type: "Case Closed",
    severity: "medium",
    description: "Price manipulation investigation - suspicious coordinated trades",
    outcome: "No Violation Found",
  },
  {
    date: "2024-02-10",
    ticker: "ADYEN.AS",
    type: "Warning Issued",
    severity: "low",
    description: "Minor disclosure timing irregularities detected",
    outcome: "Corrective Action Taken",
  },
  {
    date: "2024-01-22",
    ticker: "PHIA.AS",
    type: "Investigation Opened",
    severity: "high",
    description: "Insider trading suspected - unusual options activity before major announcement",
    outcome: "Active Investigation",
  },
  {
    date: "2024-01-08",
    ticker: "ABN.AS",
    type: "Case Closed",
    severity: "medium",
    description: "Market manipulation review - coordinated buying pattern",
    outcome: "Settlement Reached",
  },
];

const HistoricalAnalysis = () => {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Historical Cases & Investigations</h2>
            <Badge variant="secondary">{historicalEvents.length} total cases</Badge>
          </div>

          <div className="grid gap-4">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold">{event.ticker}</span>
                          <Badge variant={getSeverityVariant(event.severity)} className="text-xs">
                            {event.severity}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("nl-NL", { 
                            year: "numeric", 
                            month: "long", 
                            day: "numeric" 
                          })}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>

                  <div className="pl-12">
                    <p className="text-sm text-foreground mb-2">{event.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Outcome:</span>
                      <Badge variant="secondary" className="text-xs">{event.outcome}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoricalAnalysis;
