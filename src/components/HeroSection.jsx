import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Financial background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] lg:min-h-screen text-center px-4">
        {/* Brand Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold italic tracking-tight animate-fade-up">
          <span className="text-accent">Savings</span>
          <span className="text-destructive">Yogi</span>
        </h1>
        
        {/* Tagline */}
        <p className="mt-6 text-lg lg:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Trusted and unbiased source for savings info
          <br />
          and better money habits
        </p>
      </div>
    </section>
  );
};

