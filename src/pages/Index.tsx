import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { TickerSelector } from "@/components/TickerSelector";
import { TimeHorizonSelector } from "@/components/TimeHorizonSelector";
import { AlertsPanel, Alert } from "@/components/AlertsPanel";
import { MarketDataChart } from "@/components/MarketDataChart";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

// Generate mock market data
const generateMockData = (ticker: string, days: number) => {
  const data = [];
  const basePrice = Math.random() * 100 + 50;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const price = basePrice + (Math.random() - 0.5) * 20;
    const volume = Math.floor(Math.random() * 1000000) + 500000;
    
    data.push({
      date: date.toLocaleDateString("nl-NL", { month: "short", day: "numeric" }),
      price: parseFloat(price.toFixed(2)),
      volume,
    });
  }
  
  return data;
};

// Generate mock alerts
const generateMockAlerts = (tickers: string[]): Alert[] => {
  if (tickers.length === 0) return [];
  
  const alerts: Alert[] = [];
  const types: Alert["type"][] = ["volume", "price", "volatility"];
  const severities: Alert["severity"][] = ["low", "medium", "high"];
  
  const alertMessages = {
    volume: "Unusual trading volume detected",
    price: "Significant price movement detected",
    volatility: "High volatility pattern identified",
  };
  
  const alertDetails = {
    volume: "Trading volume exceeded 3x daily average",
    price: "Price change exceeded 5% threshold",
    volatility: "Volatility spike detected in short timeframe",
  };
  
  tickers.forEach((ticker, index) => {
    if (Math.random() > 0.3) {
      const type = types[Math.floor(Math.random() * types.length)];
      const severity = severities[Math.floor(Math.random() * severities.length)];
      
      alerts.push({
        id: `${ticker}-${index}`,
        ticker,
        type,
        severity,
        message: alertMessages[type],
        details: alertDetails[type],
        timestamp: new Date(Date.now() - Math.random() * 86400000),
      });
    }
  });
  
  return alerts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

const Index = () => {
  const [selectedTickers, setSelectedTickers] = useState<string[]>(["ASML.AS", "INGA.AS"]);
  const [horizon, setHorizon] = useState<string>("1m");
  const [customStartDate, setCustomStartDate] = useState<Date>();
  const [customEndDate, setCustomEndDate] = useState<Date>();
  const [refreshKey, setRefreshKey] = useState(0);

  const getDaysFromHorizon = (h: string) => {
    switch (h) {
      case "1d": return 1;
      case "1w": return 7;
      case "1m": return 30;
      case "3m": return 90;
      case "1y": return 365;
      default: return 30;
    }
  };

  const alerts = useMemo(() => generateMockAlerts(selectedTickers), [selectedTickers, refreshKey]);
  const days = getDaysFromHorizon(horizon);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Controls */}
          <div className="col-span-3 space-y-4">
            <TickerSelector 
              selectedTickers={selectedTickers}
              onTickersChange={setSelectedTickers}
            />
            
            <TimeHorizonSelector
              horizon={horizon}
              onHorizonChange={setHorizon}
              customStartDate={customStartDate}
              customEndDate={customEndDate}
              onCustomDatesChange={(start, end) => {
                setCustomStartDate(start);
                setCustomEndDate(end);
              }}
            />

            <Button 
              onClick={handleRefresh} 
              className="w-full"
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Analysis
            </Button>
          </div>

          {/* Main Content */}
          <div className="col-span-6 space-y-4">
            {selectedTickers.length === 0 ? (
              <div className="flex items-center justify-center h-[400px] bg-card rounded-lg border border-border">
                <p className="text-muted-foreground">Select companies to begin monitoring</p>
              </div>
            ) : (
              selectedTickers.map((ticker) => (
                <MarketDataChart
                  key={`${ticker}-${refreshKey}`}
                  ticker={ticker}
                  data={generateMockData(ticker, days)}
                />
              ))
            )}
          </div>

          {/* Right Sidebar - Alerts */}
          <div className="col-span-3">
            <AlertsPanel alerts={alerts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
