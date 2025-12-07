import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Pricing />
      <UseCases />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
