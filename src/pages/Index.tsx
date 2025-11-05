import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Products from "@/components/Products";
import Features from "@/components/Features";
import CustomerStory from "@/components/CustomerStory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Products />
      <Features />
      <CustomerStory />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
