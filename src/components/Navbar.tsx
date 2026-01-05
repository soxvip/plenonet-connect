import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
            <Button variant="hero" size="default" onClick={() => setIsVideoModalOpen(true)}>
              Testar
            </Button>
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
            <Button variant="hero" className="w-full mt-4" onClick={() => { setIsOpen(false); setIsVideoModalOpen(true); }}>
              Testar
            </Button>
          </div>}

        {/* Video Modal */}
        <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Assista o tutorial antes de testar</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <video
                src="https://wtjhwrqqhcoweegxwtav.supabase.co/storage/v1/object/public/bucket1/totim.mp4"
                controls
                className="w-full rounded-lg"
                autoPlay
              />
              <a href="https://servex.ws/test/3c5cfe65-2403-45f6-86d8-d3b820e6a8c9" className="w-full">
                <Button variant="hero" className="w-full" size="lg">
                  Liberar teste agora
                </Button>
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>;
};
export default Navbar;