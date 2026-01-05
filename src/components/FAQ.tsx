import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso utilizar o mesmo plano em vários aparelhos?",
    answer:
      "Depende do plano escolhido. O PLENO-LITE e PLENO-MAIS permitem apenas 1 aparelho. Já o PLENO-PRO permite até 2 aparelhos simultâneos, sendo ideal para uso familiar ou roteamento.",
  },
  {
    question: "Qual a diferença entre a Streamix e as operadoras tradicionais?",
    answer:
      "A Streamix oferece internet móvel ilimitada através de tecnologia VPN, funcionando mesmo após o esgotamento do seu plano convencional. Não dependemos de franquia de dados das operadoras tradicionais.",
  },
  {
    question: "Posso rotear minha internet para outras pessoas?",
    answer:
      "O roteamento é permitido apenas no plano PLENO-PRO. Os demais planos (LITE e MAIS) não possuem suporte para compartilhamento de conexão.",
  },
  {
    question: "Quais são os meios de pagamentos aceitos?",
    answer:
      "Aceitamos Pix, cartão de crédito, boleto bancário e transferência bancária. Após a confirmação do pagamento, suas credenciais são enviadas em até 24 horas.",
  },
  {
    question: "Como faço para solicitar suporte técnico?",
    answer:
      "Nosso suporte é totalmente humanizado! Você pode entrar em contato pelo WhatsApp, Telegram ou pelo chat em nosso site. Estamos disponíveis de segunda a sábado, das 8h às 22h.",
  },
  {
    question: "Possui plano fidelidade? Posso cancelar quando desejar?",
    answer:
      "Não trabalhamos com fidelidade! Você pode cancelar a qualquer momento sem multas ou taxas adicionais. Nossos planos têm validade de 30 dias e a renovação é opcional.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas mais{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre a Streamix
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
