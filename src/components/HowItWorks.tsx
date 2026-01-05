import { useState } from "react";
import { Download, KeyRound, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const steps = [
  {
    icon: Download,
    title: "Instale o aplicativo",
    description: "Baixe nosso app VPN diretamente da Play Store",
  },
  {
    icon: KeyRound,
    title: "Insira suas credenciais",
    description: "Use o login e senha enviados após a compra",
  },
  {
    icon: Wifi,
    title: "Conecte-se",
    description: "Pronto! Navegue com internet ilimitada",
  },
];

const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Assinei um plano,{" "}
              <span className="text-gradient">como faço para utilizar?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Utilizamos tecnologia VPN (Virtual Private Network) para criar uma conexão segura 
              e ilimitada para o seu dispositivo. O processo é simples e rápido - em poucos 
              minutos você estará navegando sem limites!
            </p>

            <Button variant="hero" size="lg" className="gap-2" onClick={() => setIsOpen(true)}>
              <Download className="w-5 h-5" />
              Baixar na Play Store
            </Button>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      Passo {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Baixar Aplicativo</DialogTitle>
            <DialogDescription className="text-center">
              Clique no botão abaixo para baixar o aplicativo na Play Store
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <a href="https://play.google.com/store/apps/details?id=google.android.a34&hl=pt_BR">
              <Button variant="hero" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Ir para Play Store
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HowItWorks;
