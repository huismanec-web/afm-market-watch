import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TimeHorizonSelectorProps {
  horizon: string;
  onHorizonChange: (horizon: string) => void;
  customStartDate?: Date;
  customEndDate?: Date;
  onCustomDatesChange?: (start: Date | undefined, end: Date | undefined) => void;
}

export const TimeHorizonSelector = ({
  horizon,
  onHorizonChange,
  customStartDate,
  customEndDate,
  onCustomDatesChange,
}: TimeHorizonSelectorProps) => {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Time Horizon</h3>
        
        <RadioGroup value={horizon} onValueChange={onHorizonChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1d" id="1d" />
            <Label htmlFor="1d" className="cursor-pointer">1 Day</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1w" id="1w" />
            <Label htmlFor="1w" className="cursor-pointer">1 Week</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1m" id="1m" />
            <Label htmlFor="1m" className="cursor-pointer">1 Month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3m" id="3m" />
            <Label htmlFor="3m" className="cursor-pointer">3 Months</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1y" id="1y" />
            <Label htmlFor="1y" className="cursor-pointer">1 Year</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" />
            <Label htmlFor="custom" className="cursor-pointer">Custom Range</Label>
          </div>
        </RadioGroup>

        {horizon === "custom" && onCustomDatesChange && (
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="grid gap-2">
              <Label className="text-xs">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal",
                      !customStartDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {customStartDate ? format(customStartDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={customStartDate}
                    onSelect={(date) => onCustomDatesChange(date, customEndDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="grid gap-2">
              <Label className="text-xs">End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal",
                      !customEndDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {customEndDate ? format(customEndDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={customEndDate}
                    onSelect={(date) => onCustomDatesChange(customStartDate, date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
