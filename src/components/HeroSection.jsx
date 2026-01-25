import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { client, urlFor } from "@/sanityClient"; 

export const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    const query = `*[_type == "heroSlide"]{
      _id,
      title,
      category,
      author,
      description,
      image
    }`;

    client.fetch(query)
      .then((data) => {
        setSlides(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch slides:", err));
  }, []);

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
  }, [emblaApi, onSelect, slides]); // 
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  if (loading) {
    return <div className="h-[60vh] w-full bg-[#003366] animate-pulse" />;
  }

  if (slides.length === 0) {
    return null;}

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide._id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
             {}
              {slide.image && (
                <img
                  src={urlFor(slide.image).width(1400).height(900).url()}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              {/* Content Container (Your Custom Styling) */}
              <div 
                className="relative z-10 h-full mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 sm:pb-32"
                style={{ backgroundColor: '#002d6266', color: '#003366' }}
              >
                <div className="max-w-3xl animate-fade-up">
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

      {/* Progress Indicators */}
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