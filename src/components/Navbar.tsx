import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    href: "#sobre",
    label: "Sobre"
  }, {
    href: "#beneficios",
    label: "Benefícios"
  }, {
    href: "#planos",
    label: "Planos"
  }, {
    href: "#depoimentos",
    label: "Depoimentos"
  }, {
    href: "#faq",
    label: "Perguntas frequentes"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">✕</span>
            <span className="text-xl font-bold text-foreground">Streamix</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
                {link.label}
              </a>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://servex.ws/test/3c5cfe65-2403-45f6-86d8-d3b820e6a8c9" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="default">
                Testar
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-up">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block py-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>)}
            <a href="https://servex.ws/test/3c5cfe65-2403-45f6-86d8-d3b820e6a8c9" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" className="w-full mt-4">
                Testar
              </Button>
            </a>
          </div>}
      </div>
    </nav>;
};
export default Navbar;