import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Alert {
  id: string;
  ticker: string;
  type: "volume" | "price" | "volatility";
  severity: "low" | "medium" | "high";
  message: string;
  timestamp: Date;
  details: string;
}

interface AlertsPanelProps {
  alerts: Alert[];
}

export const AlertsPanel = ({ alerts }: AlertsPanelProps) => {
  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: Alert["type"]) => {
    switch (type) {
      case "volume":
        return <Activity className="w-4 h-4" />;
      case "price":
        return <TrendingUp className="w-4 h-4" />;
      case "volatility":
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Suspicious Activity Alerts</h3>
          <Badge variant="secondary">{alerts.length} alerts</Badge>
        </div>

        <div className="space-y-2 max-h-[500px] overflow-y-auto">
          {alerts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No suspicious activity detected
            </div>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  "p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={cn("p-2 rounded", getSeverityColor(alert.severity))}>
                      {getTypeIcon(alert.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm font-semibold">{alert.ticker}</span>
                        <Badge variant="outline" className="text-xs">
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground mb-1">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.details}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {alert.timestamp.toLocaleString("nl-NL")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Card>
  );
};
