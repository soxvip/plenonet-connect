import { useState, useRef } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
              Com a Streamix - Conexões, você tem internet móvel ilimitada para acessar o que quiser, 
              de onde quiser e quando quiser, por um preço acessível e que cabe em seu bolso. 
              O nosso projeto oferece Internet no seu celular mesmo após o esgotamento do plano/saldo 
              convencional da operadora. E aí? Está esperando o quê? Não perca tempo, corra já para a 
              Streamix e viva o melhor da internet móvel totalmente ilimitada!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos">
                <Button variant="hero" size="lg">
                  Adquirir um plano agora
                </Button>
              </a>
              <a href="#faq">
                <Button variant="heroOutline" size="lg">
                  Como isso funciona?
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="https://wtjhwrqqhcoweegxwtav.supabase.co/storage/v1/object/public/bucket1/internet%20ilimitada%20pt1%20video.mp4"
                controls
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
            
            {/* Test Button Below Video */}
            <div className="mt-6">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Teste grátis
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={(open) => {
        setIsVideoModalOpen(open);
        if (!open) setVideoEnded(false);
      }}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Assista o tutorial antes de testar</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <video
                ref={videoRef}
                src="https://wtjhwrqqhcoweegxwtav.supabase.co/storage/v1/object/public/bucket1/totim.mp4"
                controls={!videoEnded}
                className="w-full rounded-lg"
                autoPlay
                onEnded={() => setVideoEnded(true)}
                onPlay={() => setVideoEnded(false)}
              />
              {videoEnded && (
                <div className="absolute inset-0 bg-black/70 rounded-lg flex flex-col items-center justify-center gap-4">
                  <a href="https://servex.ws/test/3c5cfe65-2403-45f6-86d8-d3b820e6a8c9" className="w-3/4">
                    <Button variant="hero" className="w-full" size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Liberar teste agora
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-3/4" 
                    size="lg"
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                        setVideoEnded(false);
                      }
                    }}
                  >
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Assistir novamente
                  </Button>
                </div>
              )}
            </div>
            {!videoEnded && (
              <a href="https://servex.ws/test/3c5cfe65-2403-45f6-86d8-d3b820e6a8c9" className="w-full">
                <Button variant="hero" className="w-full" size="lg">
                  Liberar teste agora
                </Button>
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
