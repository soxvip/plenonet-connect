import { Gauge, Shield, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Conexão ultrarrápida e ilimitada",
    description:
      "Oferecemos uma franquia de dados ilimitada com estabilidade e velocidades que podem atingir até 100 megabytes por segundo, garantindo a melhor experiência de navegação.",
  },
  {
    icon: Shield,
    title: "Segurança e privacidade Online",
    description:
      "Protegemos sua privacidade e segurança online com nossa VPN confiável e robusta! Navegue com tranquilidade sabendo que seus dados estão protegidos.",
  },
  {
    icon: RefreshCw,
    title: "Estamos sempre atualizados",
    description:
      "Sempre atualizados com os mais recentes avanços tecnológicos, garantindo que você tenha acesso às melhores soluções de conectividade disponíveis no mercado.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-gradient">PlenoNET</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que fazem da PlenoNET a melhor escolha para sua conexão móvel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
