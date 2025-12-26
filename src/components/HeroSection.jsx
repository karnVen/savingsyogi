import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen pt-16 md:pt-20 lg:pt-20">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] lg:min-h-screen text-center px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold italic tracking-tight animate-fade-up">
          <span className="text-accent">Savings</span>
          <span className="text-destructive">Yogi</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed animate-fade-up px-4" style={{ animationDelay: '0.15s' }}>
          Trusted and unbiased source for savings info
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          and better money habits
        </p>
      </div>
    </section>
  );
};

