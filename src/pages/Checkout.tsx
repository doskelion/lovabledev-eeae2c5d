
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = {
  monthly: {
    name: "Monthly Plan",
    price: 14.99,
    duration: "1 month"
  },
  quarterly: {
    name: "Quarterly Plan",
    price: 39.99,
    duration: "3 months"
  },
  yearly: {
    name: "Yearly Plan",
    price: 129.99,
    duration: "1 year"
  }
};

const Checkout = () => {
  const { planId } = useParams<{ planId: string }>();
  const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Get the selected plan based on the planId from URL params
  const selectedPlan = planId && plans[planId as keyof typeof plans] 
    ? plans[planId as keyof typeof plans] 
    : plans.monthly;

  // Load PayPal script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=test&currency=USD";
    script.async = true;
    script.onload = () => setIsPayPalLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize PayPal buttons when script is loaded
  useEffect(() => {
    if (isPayPalLoaded && window.paypal) {
      try {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: `StreamifyTV ${selectedPlan.name}`,
                  amount: {
                    currency_code: "USD",
                    value: selectedPlan.price.toFixed(2)
                  }
                }
              ]
            });
          },
          onApprove: (data: any, actions: any) => {
            setIsProcessing(true);
            return actions.order.capture().then(function() {
              toast({
                title: "Payment successful!",
                description: `Your ${selectedPlan.name} subscription is now active.`
              });
              navigate("/");
            });
          },
          onError: (err: any) => {
            console.error(err);
            toast({
              variant: "destructive",
              title: "Payment failed",
              description: "There was an issue processing your payment. Please try again."
            });
          }
        }).render("#paypal-button-container");
      } catch (error) {
        console.error("PayPal rendering error:", error);
      }
    }
  }, [isPayPalLoaded, selectedPlan, toast, navigate]);

  // Handle manual checkout (demo purposes)
  const handleCheckoutSuccess = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment successful!",
        description: `Your ${selectedPlan.name} subscription is now active.`
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-muted-foreground mt-2">
              Complete your subscription purchase
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border mb-8">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="flex justify-between py-4 border-b border-border">
              <span className="font-medium">{selectedPlan.name}</span>
              <span>${selectedPlan.price.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between py-4">
              <span className="font-medium">Total</span>
              <span className="text-lg font-bold">${selectedPlan.price.toFixed(2)}</span>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Your subscription will renew automatically every {selectedPlan.duration}.</p>
              <p>You can cancel anytime from your account settings.</p>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl font-medium mb-4">Payment Method</h2>
            
            <div id="paypal-button-container" className="mb-4"></div>
            
            {!isPayPalLoaded && (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
              </div>
            )}
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                For demo purposes, you can also use this button:
              </p>
              
              <Button 
                onClick={handleCheckoutSuccess}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                {isProcessing ? "Processing..." : "Complete Purchase (Demo)"}
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By completing this purchase, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Refund Policy</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
