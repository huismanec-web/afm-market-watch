import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AlertTriangle, TrendingUp, History, FileText, Settings } from "lucide-react";

const navItems = [
  { path: "/", label: "Market Abuse Detection", icon: AlertTriangle },
  { path: "/overview", label: "Market Overview", icon: TrendingUp },
  { path: "/historical", label: "Historical Analysis", icon: History },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/settings", label: "Settings", icon: Settings },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
