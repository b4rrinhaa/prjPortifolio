
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Abouto from "@/components/Abouto";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Abouto />
      <Footer />
    </main>
  );
};

export default Index;
