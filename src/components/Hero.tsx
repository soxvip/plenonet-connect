import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Viva hoje a liberdade de conexão móvel{" "}
              <span className="text-gradient">ilimitada</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Com a PLENONET - Conexões, você tem internet móvel ilimitada para acessar o que quiser, 
              de onde quiser e quando quiser, por um preço acessível e que cabe em seu bolso. 
              O nosso projeto oferece Internet no seu celular mesmo após o esgotamento do plano/saldo 
              convencional da operadora. E aí? Está esperando o quê? Não perca tempo, corra já para a 
              PlenoNET e viva o melhor da internet móvel totalmente ilimitada!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Adquirir um plano agora
              </Button>
              <Button variant="heroOutline" size="lg">
                Como isso funciona?
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Homem sorridente usando um laptop em um café moderno"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
