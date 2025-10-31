import { Building2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Space for AFM Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AFM Capital Markets Monitor</h1>
                <p className="text-xs text-muted-foreground">Market Abuse Detection System</p>
              </div>
            </div>
          </div>
          {/* Space for additional institutional logos */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-10 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Partner Logo</span>
            </div>
            <div className="w-24 h-10 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Partner Logo</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
