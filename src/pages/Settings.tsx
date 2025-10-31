import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-6">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-xl font-bold">System Settings</h2>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Alert Thresholds</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="volume-threshold">Volume Spike Threshold (%)</Label>
                <Input id="volume-threshold" type="number" defaultValue="300" />
                <p className="text-xs text-muted-foreground">
                  Alert when trading volume exceeds this percentage of daily average
                </p>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Label htmlFor="price-threshold">Price Change Threshold (%)</Label>
                <Input id="price-threshold" type="number" defaultValue="5" />
                <p className="text-xs text-muted-foreground">
                  Alert when price changes exceed this percentage in short timeframe
                </p>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Label htmlFor="volatility-threshold">Volatility Threshold</Label>
                <Input id="volatility-threshold" type="number" defaultValue="2.5" />
                <p className="text-xs text-muted-foreground">
                  Alert when volatility exceeds this standard deviation
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive email alerts for high severity events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Alerts</Label>
                  <p className="text-xs text-muted-foreground">
                    Show pop-up notifications for immediate alerts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Daily Summary</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive daily summary of market activity
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="api-key">Market Data API Key</Label>
                <Input id="api-key" type="password" placeholder="Enter API key..." />
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Label htmlFor="refresh-interval">Data Refresh Interval (seconds)</Label>
                <Input id="refresh-interval" type="number" defaultValue="60" />
              </div>
            </div>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
