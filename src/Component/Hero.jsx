import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        subRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 0.7, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div
        className="absolute inset-0"
        style={{
          // Image placed in Vite public/ so it can be referenced with a root-relative URL
          backgroundImage: "url('/close-up-education-economy-objects (1).jpg')",
          backgroundSize: " 100% 99%", // fill the screen; crops slightly for maximum coverage
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Light overlay so the image stays visible */}
      <div className="absolute inset-0 bg-linear-to-br from-[#003366]/50 via-[#003366]/40 to-[#001a33]/50" />

      <div className="relative max-w-4xl text-center text-white space-y-6">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFB300, #003366)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Savings Yogi
        </h1>
        <p
          ref={subRef}
          className="text-lg lg:text-xl xl:text-2xl font-medium text-white/90"
        >
          Trusted and unbiased source for savings info<br/> 
          and better money habits
        </p>
      </div>
    </section>
  );
};

export default Hero;

