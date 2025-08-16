import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          {/* Large 404 with gradient */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-4 animate-pulse">
              404
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Error message */}
          <div className="mb-8 animate-fade-in delay-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="group hover-scale"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="group hover-scale"
            >
              <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Return Home
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 opacity-50">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;