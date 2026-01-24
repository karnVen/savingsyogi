import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../../components/home/Navigation";

const FinancialEducation = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.50,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      }
    );
  }, []);

  const cards = [
    {
      title: "Budgeting – Take Control of Your Money",
      desc: "Plan your income wisely and control your spending without stress.",
      list: [
        "Track income and expenses",
        "Understand needs vs wants",
        "Create a monthly budget",
        "Reduce unnecessary spending",
        "Save consistently",
      ],
      highlight: "With a budget, every rupee has a purpose.",
    },
    {
      title: "Investing Basics – Grow Your Money",
      desc: "Make your money work for you through smart investing.",
      list: [
        "Meaning of investing",
        "Saving vs investing",
        "Stocks & mutual funds",
        "Risk and return basics",
        "Start with small amounts",
      ],
      highlight: "Saving protects money. Investing grows it.",
    },
    {
      title: "Building Wealth – Step by Step",
      desc: "Build long-term wealth with discipline and smart habits.",
      list: [
        "Financial stability",
        "Emergency fund",
        "Power of compounding",
        "Debt management",
        "Increase net worth",
      ],
      highlight: "Save and invest first, then spend.",
    },
    {
      title: "Financial Awareness – Smarter Decisions",
      desc: "Avoid mistakes and make confident financial decisions.",
      list: [
        "Smart expense management",
        "Loans & interest basics",
        "Responsible credit usage",
        "Beginner financial planning",
        "Goal setting",
      ],
    },
  ];

  return (
    <>
    
    <section
      ref={sectionRef}
      className="bg-gray-50 py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Financial Education
          </h1>
          <p className="text-lg text-gray-600">
            Simple, practical money knowledge to help you manage, grow,
            and protect your finances.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#FFB300]
                         hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-[#003366] mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.desc}</p>

              <ul className="space-y-2 mb-4 list-disc list-inside text-gray-700">
                {card.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {card.highlight && (
                <p className="font-semibold text-[#FFB300]">
                  {card.highlight}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-20 bg-[#003366] rounded-2xl text-white text-center p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your Financial Learning Journey Today
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Take control of your finances, build smart habits, and create
            a secure future — one step at a time.
          </p>
          <button
            className="bg-[#FFB300] text-[#003366] font-semibold px-8 py-3 rounded-xl
                       hover:bg-yellow-400 transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
    </>
  );
};

export default FinancialEducation;
