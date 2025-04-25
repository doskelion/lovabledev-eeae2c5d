
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlanProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  planId: string;
}

const PlanCard = ({ name, price, duration, features, isPopular, planId }: PlanProps) => {
  return (
    <div className={`bg-secondary/50 rounded-xl p-6 border ${isPopular ? 'plan-highlight border-primary/50' : 'border-border'}`}>
      {isPopular && (
        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-muted-foreground ml-2">/{duration}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={`/checkout/${planId}`}>
        <Button 
          className={`w-full ${isPopular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 btn-glow' : ''}`}
          variant={isPopular ? "default" : "outline"}
        >
          Choose Plan
        </Button>
      </Link>
    </div>
  );
};

const SubscriptionPlans = () => {
  return (
    <div id="pricing" className="py-24 px-6 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that works for you. All plans include full access to our channel library.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PlanCard 
            name="Monthly"
            price="14.99"
            duration="month"
            planId="monthly"
            features={[
              "10,000+ Live Channels",
              "Full HD & 4K Streams",
              "Video On Demand Library",
              "Works on All Devices",
              "24/7 Customer Support"
            ]}
          />
          
          <PlanCard 
            name="Quarterly"
            price="39.99"
            duration="3 months"
            planId="quarterly"
            isPopular={true}
            features={[
              "10,000+ Live Channels",
              "Full HD & 4K Streams",
              "Video On Demand Library",
              "Works on All Devices",
              "24/7 Customer Support",
              "Save 11% vs Monthly"
            ]}
          />
          
          <PlanCard 
            name="Yearly"
            price="129.99"
            duration="year"
            planId="yearly"
            features={[
              "10,000+ Live Channels",
              "Full HD & 4K Streams",
              "Video On Demand Library",
              "Works on All Devices",
              "24/7 Customer Support",
              "Premium Sports Channels",
              "Save 28% vs Monthly"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
