import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "PLENO-LITE",
    price: "24,90",
    popular: false,
    features: [
      { text: "1 aparelho permitido", included: true },
      { text: "Servidores Brasileiros", included: true },
      { text: "Franquia de dados ilimitada", included: true },
      { text: "Chamadas VOIP", included: true },
      { text: "Roteamento permitido", included: false },
    ],
  },
  {
    name: "PLENO-MAIS",
    price: "39,90",
    popular: true,
    features: [
      { text: "1 aparelho permitido", included: true },
      { text: "Servidores Brasileiros", included: true },
      { text: "Franquia ilimitada via app", included: true },
      { text: "Chamadas VOIP", included: true },
      { text: "Roteamento permitido", included: false },
    ],
  },
  {
    name: "PLENO-PRO",
    price: "34,90",
    popular: false,
    features: [
      { text: "2 aparelhos permitidos", included: true },
      { text: "Ideal para roteamento", included: true },
      { text: "Franquia ilimitada", included: true },
      { text: "Chamadas VOIP", included: true },
      { text: "Uso familiar", included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos com preços{" "}
            <span className="text-gradient">'democráticos'</span> para navegar à vontade!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Esqueça o wifi! Com a PlenoNET você tem entretenimento móvel ilimitado na palma da sua mão.
          </p>
          <p className="text-sm text-muted-foreground">
            * Todos os planos têm validade de 30 dias a partir da data de ativação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background border rounded-2xl p-8 card-hover ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais vendido
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price.split(",")[0]}
                  </span>
                  <span className="text-muted-foreground">,{plan.price.split(",")[1]}/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Assinar agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
