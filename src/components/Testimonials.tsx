import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "João Silva",
    rating: 5,
    text: "Excelente serviço! Internet rápida e estável, uso todos os dias no trabalho e nunca me deixou na mão.",
  },
  {
    name: "Maria Santos",
    rating: 5,
    text: "Melhor investimento que fiz! Agora assisto minhas séries no ônibus sem preocupação com o consumo de dados.",
  },
  {
    name: "Pedro Oliveira",
    rating: 5,
    text: "Suporte incrível! Tive uma dúvida e fui atendido rapidamente. Recomendo demais a PlenoNET!",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Algumas de nossas avaliações na{" "}
            <span className="text-gradient">Play Store</span>
          </h2>
          <p className="text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre a PlenoNET
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Reseller Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seja um revendedor autorizado
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ganhe uma renda extra revendendo nossos planos de internet. Entre em contato 
            e descubra como se tornar um parceiro PlenoNET!
          </p>
          <Button variant="hero" size="lg">
            Quero saber mais agora →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
