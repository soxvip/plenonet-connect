const About = () => {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            100% Digital e com serviços{" "}
            <span className="text-gradient">ilimitados</span> para você
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos um provedor de internet que surgiu para revolucionar um mercado muitas vezes 
            injusto e burocrático. Nosso foco é entregar a melhor cobertura, velocidade e suporte 
            para todos os nossos clientes, independente de onde estejam.
          </p>
          
          <div className="inline-block bg-secondary/50 border border-border rounded-xl px-6 py-4 mt-4">
            <p className="text-foreground font-medium">
              ✨ Nosso suporte é{" "}
              <span className="text-primary font-semibold">totalmente humanizado</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
