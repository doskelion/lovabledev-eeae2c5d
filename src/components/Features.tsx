
import { Play, Tv, Globe, Clock, Shield, CreditCard } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-secondary/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium IPTV Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy the best streaming experience with our comprehensive set of features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Tv className="h-6 w-6 text-primary" />}
            title="10,000+ Live Channels"
            description="Access thousands of international channels from sports to news, entertainment, movies and more."
          />
          <FeatureCard 
            icon={<Play className="h-6 w-6 text-primary" />}
            title="Video On Demand"
            description="Huge library of movies and TV shows available on-demand anytime you want to watch."
          />
          <FeatureCard 
            icon={<Globe className="h-6 w-6 text-primary" />}
            title="Global Coverage"
            description="Content from USA, UK, Canada, Latin America, Europe, Asia and many more regions."
          />
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="24/7 Support"
            description="Our dedicated team is available around the clock to assist with any technical issues."
          />
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Secure Connection"
            description="Encrypted streams and secure payment methods to protect your data and privacy."
          />
          <FeatureCard 
            icon={<CreditCard className="h-6 w-6 text-primary" />}
            title="Easy Payment"
            description="Simple subscription management with secure PayPal payment processing."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
