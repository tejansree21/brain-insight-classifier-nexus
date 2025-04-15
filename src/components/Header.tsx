
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, FileImage, Info, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Brain className="h-5 w-5 mr-2" /> },
    { name: "Classify", path: "/classify", icon: <FileImage className="h-5 w-5 mr-2" /> },
    { name: "Education", path: "/education", icon: <Info className="h-5 w-5 mr-2" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center mr-4">
          <Brain className="h-8 w-8 text-medical-600" />
          <span className="ml-2 text-xl font-bold tracking-tight">NeuraScan</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-1 items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center transition-colors hover:text-medical-600",
                location.pathname === item.path
                  ? "text-medical-600 font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden p-4 border-t bg-background">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center p-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-muted text-medical-600 font-medium"
                    : "text-muted-foreground hover:bg-muted"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
