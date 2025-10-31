import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dutchCompanies = [
  { ticker: "ASML.AS", name: "ASML Holding" },
  { ticker: "PHIA.AS", name: "Koninklijke Philips" },
  { ticker: "HEIA.AS", name: "Heineken" },
  { ticker: "INGA.AS", name: "ING Groep" },
  { ticker: "ABN.AS", name: "ABN AMRO Bank" },
  { ticker: "ADYEN.AS", name: "Adyen" },
  { ticker: "UNA.AS", name: "Unilever" },
  { ticker: "AD.AS", name: "Ahold Delhaize" },
  { ticker: "AKZA.AS", name: "AkzoNobel" },
  { ticker: "KPN.AS", name: "KPN" },
];

interface TickerSelectorProps {
  selectedTickers: string[];
  onTickersChange: (tickers: string[]) => void;
}

export const TickerSelector = ({ selectedTickers, onTickersChange }: TickerSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleAddTicker = (ticker: string) => {
    if (ticker && !selectedTickers.includes(ticker)) {
      onTickersChange([...selectedTickers, ticker]);
      setSelectedValue("");
    }
  };

  const handleRemoveTicker = (ticker: string) => {
    onTickersChange(selectedTickers.filter((t) => t !== ticker));
  };

  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Selected Companies</h3>
          <span className="text-xs text-muted-foreground">{selectedTickers.length} selected</span>
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedValue} onValueChange={handleAddTicker}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Add company to monitor..." />
            </SelectTrigger>
            <SelectContent>
              {dutchCompanies.map((company) => (
                <SelectItem 
                  key={company.ticker} 
                  value={company.ticker}
                  disabled={selectedTickers.includes(company.ticker)}
                >
                  {company.ticker} - {company.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedTickers.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {selectedTickers.map((ticker) => {
              const company = dutchCompanies.find((c) => c.ticker === ticker);
              return (
                <Badge key={ticker} variant="secondary" className="px-3 py-1">
                  <span className="font-mono text-xs">{ticker}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-2 hover:bg-transparent"
                    onClick={() => handleRemoveTicker(ticker)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};
