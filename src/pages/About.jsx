import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/home/Navigation";

import Untitled from "../assets/Untitled.png";

const team = [
  { name: "Kushal Singh", role: "Frontend Developer", img: Untitled },
  { name: "Khushwant Singh", role: "Backend Developer", img: Untitled },
  { name: "Karan Singh", role: "Technology Lead", img: Untitled },
  { name: "Mridul Joshi", role: "Founder & Finance Educator", img: Untitled },
];

const AboutUs = () => {
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean); // ✅ IMPORTANT

    gsap.from(elements, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      clearProps: "all",
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* Navbar spacing fix */}
      <main className="bg-[#003366] text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative px-6 md:px-20 pt-10 pb-40">
          <div
            ref={(el) => (refs.current[0] = el)}
            className="max-w-3xl will-change-transform"
          >
            <p className="text-sm mb-4 text-white/70 uppercase tracking-wider">
              About Savings Yogi
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Financial Wisdom for Life
            </h1>

            <p className="text-white/80 max-w-xl leading-relaxed">
              Savings Yogi empowers individuals with practical financial education,
              helping them save smarter, spend consciously, and invest responsibly
              — without jargon or false promises.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[100px]" />
        </section>

        {/* ================= STORY ================= */}
        <section className="bg-white text-black px-6 md:px-20 py-24">
          <h2
            ref={(el) => (refs.current[1] = el)}
            className="text-3xl font-semibold text-center mb-10"
          >
            Our Story
          </h2>

          <div
            ref={(el) => (refs.current[2] = el)}
            className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-6"
          >
            <p>
              Savings Yogi was born out of a simple realization — most people are
              never taught how to manage money correctly.
            </p>

            <p>
              Our mission is to simplify personal finance by focusing on disciplined
              saving, budgeting, and long-term wealth building.
            </p>

            <p>
              We believe financial growth is a journey, not a gamble.
            </p>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="bg-[#FFB300] px-6 md:px-20 py-28">
          <h2
            ref={(el) => (refs.current[3] = el)}
            className="text-3xl font-semibold text-center mb-16 text-black"
          >
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => (refs.current[4 + index] = el)}
                className="bg-white rounded-3xl p-6 text-center shadow-md
                           hover:-translate-y-2 hover:shadow-xl transition duration-300 will-change-transform"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto mb-6 rounded-full object-cover"
                />

                <h3 className="font-semibold text-lg text-black">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
};

export default AboutUs;