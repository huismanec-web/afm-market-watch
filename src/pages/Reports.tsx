import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar } from "lucide-react";

const reports = [
  {
    title: "Q4 2024 Market Abuse Summary Report",
    date: "2024-03-31",
    type: "Quarterly",
    status: "Available",
    pages: 47,
  },
  {
    title: "February 2024 Surveillance Report",
    date: "2024-02-29",
    type: "Monthly",
    status: "Available",
    pages: 23,
  },
  {
    title: "ASML.AS Investigation Report #2024-045",
    date: "2024-03-15",
    type: "Investigation",
    status: "Available",
    pages: 12,
  },
  {
    title: "January 2024 Surveillance Report",
    date: "2024-01-31",
    type: "Monthly",
    status: "Available",
    pages: 19,
  },
  {
    title: "2023 Annual Market Integrity Report",
    date: "2023-12-31",
    type: "Annual",
    status: "Available",
    pages: 156,
  },
  {
    title: "Q3 2023 Market Abuse Summary Report",
    date: "2023-12-31",
    type: "Quarterly",
    status: "Available",
    pages: 52,
  },
];

const Reports = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Annual":
        return "default";
      case "Quarterly":
        return "secondary";
      case "Monthly":
        return "outline";
      case "Investigation":
        return "destructive";
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
            <h2 className="text-xl font-bold">Reports & Documentation</h2>
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              Generate New Report
            </Button>
          </div>

          <div className="grid gap-4">
            {reports.map((report, index) => (
              <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-muted rounded">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{report.title}</h3>
                        <Badge variant={getTypeColor(report.type)}>{report.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(report.date).toLocaleDateString("nl-NL", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <span>•</span>
                        <span>{report.pages} pages</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
