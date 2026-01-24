import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/home/Navigation";

const AboutSavingsYogi = () => {
  const fadeRefs = useRef([]);

  useEffect(() => {
    gsap.from(fadeRefs.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
    <Navbar/>
    <main className="bg-white text-black px-6 md:px-20 py-16">

      {/* ABOUT HEADER */}
      <section className="grid md:grid-cols-3 gap-10 mb-24">
        <h1
          ref={(el) => (fadeRefs.current[1] = el)}
          className="text-6xl font-bold"
        >
          ABOUT US.
        </h1>

        <div
          ref={(el) => (fadeRefs.current[2] = el)}
          className="text-gray-500 text-sm leading-relaxed col-span-2 space-y-6"
        >
          <p>
            <strong>The Savings Yogi</strong> is a financial education platform
            created to bring clarity, discipline, and confidence to personal
            money management. We believe that wealth is built through mindful
            decisions, not shortcuts.
          </p>

          <p>
            Inspired by the philosophy of simplicity and long-term thinking, The
            Savings Yogi helps individuals understand saving, budgeting,
            investing basics, and financial planning in a practical way.
          </p>

          <p>
            Our content is designed for beginners, students, and working
            professionals who want to build a strong financial foundation
            without confusing jargon.
          </p>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section
        ref={(el) => (fadeRefs.current[3] = el)}
        className="mb-24"
      >
        <img
          src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
          alt="financial planning"
          className="w-full h-[420px] object-cover"
        />
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="grid md:grid-cols-2 gap-16 mb-32 items-center">
        <blockquote
          ref={(el) => (fadeRefs.current[4] = el)}
          className="text-3xl font-serif leading-snug"
        >
          “True wealth is not how much you earn, but how wisely you save and
          grow what you have.”
          <footer className="text-sm text-gray-500 mt-4">
            — The Savings Yogi Philosophy
          </footer>
        </blockquote>

        <img
          ref={(el) => (fadeRefs.current[5] = el)}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
          alt="focused work"
          className="w-full h-[300px] object-cover"
        />
      </section>

      {/* TEAM / IMPACT SECTION */}
      <section className="grid md:grid-cols-3 gap-16 items-start">
        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="mentor"
            className="object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="learner"
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="col-span-2">
          <h2 className="text-5xl font-bold mb-8">OUR IMPACT.</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The Savings Yogi is built on trust, consistency, and real-world
            learning. We focus on habits, not hype, and on long-term financial
            peace rather than short-term gains.
          </p>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutSavingsYogi;
