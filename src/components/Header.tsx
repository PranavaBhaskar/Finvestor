import { Link, useLocation } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Finvestor
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "secondary" : "ghost"}
                className="text-sm"
              >
                Home
              </Button>
            </Link>
            <Link to="/simulator">
              <Button 
                variant={isActive("/simulator") ? "secondary" : "ghost"}
                className="text-sm"
              >
                Simulator
              </Button>
            </Link>
            <Link to="/compare">
              <Button 
                variant={isActive("/compare") ? "secondary" : "ghost"}
                className="text-sm"
              >
                Compare
              </Button>
            </Link>
            <Link to="/blogs">
              <Button 
                variant={isActive("/blogs") ? "secondary" : "ghost"}
                className="text-sm"
              >
                Blogs
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "secondary" : "ghost"}
                className="text-sm"
              >
                About
              </Button>
            </Link>
          </nav>
          
          <Link to="/simulator" className="hidden md:block">
            <Button className="bg-gradient-hero text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
