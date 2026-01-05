import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PlenoNET - Internet Móvel Ilimitada | Conexão Rápida e Segura</title>
        <meta 
          name="description" 
          content="Internet móvel ilimitada com a PlenoNET. Navegue sem limites de dados, com velocidades de até 100 Mbps e segurança VPN. Planos a partir de R$24,90/mês." 
        />
        <meta name="keywords" content="internet móvel ilimitada, VPN, internet sem limites, PlenoNET, dados ilimitados" />
        <link rel="canonical" href="https://plenonet.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Pricing />
          <HowItWorks />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
