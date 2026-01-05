import { MessageCircle, Phone, Instagram, Music2, Headphones } from "lucide-react";

const socialLinks = [
  { icon: MessageCircle, label: "Telegram", href: "#" },
  { icon: Phone, label: "WhatsApp", number: "(27) 9 9651-9264", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Music2, label: "TikTok", href: "#" },
  { icon: Headphones, label: "Discord", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Conecte-se a nossas{" "}
            <span className="text-gradient">redes sociais</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <social.icon className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">{social.label}</p>
                  {social.number && (
                    <p className="text-sm text-muted-foreground">{social.number}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">✕</span>
              <span className="text-xl font-bold text-foreground">Streamix</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © Copyright 2025 Streamix - Dutra. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
