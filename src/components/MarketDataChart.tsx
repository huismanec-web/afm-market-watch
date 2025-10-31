import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface MarketDataChartProps {
  ticker: string;
  data: Array<{ date: string; price: number; volume: number }>;
}

export const MarketDataChart = ({ ticker, data }: MarketDataChartProps) => {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Price & Volume - <span className="font-mono">{ticker}</span>
        </h3>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                yAxisId="left"
                stroke="hsl(var(--chart-1))"
                fontSize={12}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--chart-2))"
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
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                dot={false}
                name="Price (€)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="volume" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                dot={false}
                name="Volume"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
