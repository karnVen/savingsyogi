// import heroBg from "@/assets/hero-bg.png";

// export const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen pt-16 md:pt-20 lg:pt-20">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBg}
//           alt="Financial background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-primary/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] lg:min-h-screen text-center px-4 md:px-6 lg:px-8 py-12 md:py-16">
//         {/* Brand Name */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold italic tracking-tight animate-fade-up">
//           <span className="text-accent">Savings</span>
//           <span className="text-destructive">Yogi</span>
//         </h1>

//         {/* Tagline */}
//         <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed animate-fade-up px-4" style={{ animationDelay: '0.15s' }}>
//           Trusted and unbiased source for savings info
//           <br className="hidden sm:block" />
//           <span className="sm:hidden"> </span>
//           and better money habits
//         </p>
//       </div>
//     </section>
//   );
// };

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroBg from "@/assets/hero-bg.png";
import insightsHero from "@/assets/insights-hero.jpg";
import insightsCrypto from "@/assets/insights-crypto.jpg";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    image: heroBg,
    category: "FINANCIAL FREEDOM",
    title: "Master your money mindset for a secure future",
    author: "SAVINGS YOGI TEAM",
    description:
      "Discover the fundamental principles of saving that can transform your financial reality and help you build lasting wealth starting today.",
  },
  {
    id: 2,
    image: insightsHero,
    category: "SMART INVESTING",
    title: "10 Lessons for scaling your personal portfolio",
    author: "FINANCE EXPERTS",
    description:
      "Learn hard-earned, actionable recommendations for investors looking to scale from early traction to significant returns.",
  },
  {
    id: 3,
    image: insightsCrypto,
    category: "DEBT MANAGEMENT",
    title: "Breaking free from the cycle of high-interest debt",
    author: "COMMUNITY STORIES",
    description:
      "Real stories and proven strategies from people who crushed their debt and took back control of their financial lives.",
  },
];

export const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay - Transparent background for image visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              {/* Content Container */}
              <div className="relative z-10 h-full mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 sm:pb-32"style={{ backgroundColor: '#002d6266', color: '#003366', filter: 'blur(60%)' }}>
                <div className="max-w-3xl animate-fade-up ">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold tracking-wider text-white/90 mb-6 uppercase drop-shadow-md">
                    <span>{slide.author}</span>
                    <span className="hidden sm:inline text-accent">•</span>
                    <span className="text-accent">{slide.category}</span>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Progress Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
        <div className="mx-auto px-6 md:px-12">
          <div className="flex gap-3 pointer-events-auto">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-3 sm:h-4 transition-all duration-300 rounded-full shadow-sm ring-1 ring-black/10",
                  index === selectedIndex
                    ? "w-12 sm:w-16 bg-accent"
                    : "w-8 sm:w-12 bg-white/40 hover:bg-white/60 active:bg-white/80"
                )}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};