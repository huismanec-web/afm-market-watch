import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const marketData = [
  { name: "AEX", value: 792.45, change: 1.2, volume: "€2.3B" },
  { name: "AMX", value: 1043.67, change: -0.5, volume: "€890M" },
  { name: "ASCX", value: 1234.56, change: 2.1, volume: "€450M" },
];

const sectorData = [
  { sector: "Technology", performance: 3.2, volume: 4500 },
  { sector: "Financials", performance: 1.8, volume: 3800 },
  { sector: "Healthcare", performance: -0.5, volume: 2200 },
  { sector: "Consumer", performance: 2.1, volume: 2900 },
  { sector: "Industrials", performance: 0.8, volume: 2100 },
  { sector: "Energy", performance: -1.2, volume: 1800 },
];

const topMovers = [
  { ticker: "ASML.AS", name: "ASML Holding", change: 4.5, price: 745.20 },
  { ticker: "ADYEN.AS", name: "Adyen", change: 3.8, price: 1234.50 },
  { ticker: "INGA.AS", name: "ING Groep", change: 2.9, price: 14.23 },
  { ticker: "HEIA.AS", name: "Heineken", change: -3.2, price: 89.45 },
  { ticker: "ABN.AS", name: "ABN AMRO", change: -2.1, price: 15.67 },
];

const MarketOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Market Indices */}
          <div>
            <h2 className="text-xl font-bold mb-4">Dutch Market Indices</h2>
            <div className="grid grid-cols-3 gap-4">
              {marketData.map((market) => (
                <Card key={market.name} className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">{market.name}</h3>
                      <Badge variant={market.change >= 0 ? "default" : "destructive"}>
                        {market.change >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {market.change >= 0 ? "+" : ""}{market.change}%
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{market.value}</div>
                    <div className="text-sm text-muted-foreground">Volume: {market.volume}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sector Performance */}
          <div>
            <h2 className="text-xl font-bold mb-4">Sector Performance</h2>
            <Card className="p-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="sector" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="performance" fill="hsl(var(--chart-1))" name="Performance (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Top Movers */}
          <div>
            <h2 className="text-xl font-bold mb-4">Top Movers</h2>
            <Card className="p-4">
              <div className="space-y-3">
                {topMovers.map((mover) => (
                  <div key={mover.ticker} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <div className="font-mono font-semibold text-sm">{mover.ticker}</div>
                      <div className="text-xs text-muted-foreground">{mover.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">€{mover.price}</div>
                      <Badge 
                        variant={mover.change >= 0 ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {mover.change >= 0 ? "+" : ""}{mover.change}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketOverview;
