
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 hero-gradient">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premium IPTV Service With <br />
          <span className="gradient-text">Unlimited Entertainment</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl mb-10">
          Access thousands of channels and VOD content worldwide. 
          High quality streams, 99.9% uptime, and 24/7 customer support.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 btn-glow">
              Get Started
            </Button>
          </Link>
          <a href="#pricing">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Plans
            </Button>
          </a>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur-md opacity-75"></div>
          <div className="relative bg-black/90 p-2 rounded-lg overflow-hidden">
            <div className="aspect-video rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="IPTV Service Showcase" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-3">Trusted by thousands of users worldwide</p>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="text-muted-foreground/70 font-medium">⭐ 10,000+ Channels</div>
            <div className="text-muted-foreground/70 font-medium">⭐ 99.9% Uptime</div>
            <div className="text-muted-foreground/70 font-medium">⭐ 24/7 Support</div>
            <div className="text-muted-foreground/70 font-medium">⭐ HD & 4K Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
