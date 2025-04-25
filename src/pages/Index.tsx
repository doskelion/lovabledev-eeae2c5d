
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <SubscriptionPlans />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
