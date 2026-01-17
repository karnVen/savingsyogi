import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Cards.css";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Smart Savings Tips",
    description: "Deep-Dive Guide for Financial Success Saving money is more than just “putting some aside.” It’s about strategy, psychology, habit design, and smart decision-making. Below is a practical, step-by-step framework with rich explanations and examples you can apply easily — whether you’re a student, professional, or entrepreneur.",
    img: "savingsyogi\public\Smart-Money-Saving-Tips.jpg"
  },
  {
    title: "Track Your Spending",
    description: "You can't save what you don't measure. Use apps or a simple spreadsheet to track every penny. Identify leaks in your budget and plug them immediately.",
    img: "./image/Smart-Money-Saving-Tips.jpg"
  },
  {
    title: "Automate Savings",
    description: "Set up automatic transfers from your checking to your savings account. Pay yourself first before you have a chance to spend the money.",
    img: "./image/Smart-Money-Saving-Tips.jpg"
  },
  {
    title: "Emergency Fund",
    description: "Aim for 3-6 months of living expenses. This safety net prevents you from dipping into long-term investments when life happens.",
    img: "./image/Smart-Money-Saving-Tips.jpg"
  },
  {
    title: "Debt Avalanche",
    description: "Pay off high-interest debt first. The math works out better than the snowball method, saving you significantly on interest payments over time.",
    img: "./image/Smart-Money-Saving-Tips.jpg"
  },
  {
    title: "Invest Early",
    description: "Compound interest is the eighth wonder of the world. Start investing as soon as possible, even if it's just a small amount.",
    img: "./image/Smart-Money-Saving-Tips.jpg"
  }
];

export default function StackedCards() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: () => "top " + (50 + 30 * i), // Stack them with 30px offset
        end: "bottom bottom",
        endTrigger: ".container",
        pin: true,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // Scale animation
      gsap.to(card, {
        scale: 1 - (cards.length - i - 1) * 0.05, // e.g. 0.9, 0.95, 1.0
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

      // Content Entry Animation
      const img = card.querySelector("img");
      const textEls = card.querySelectorAll(".card-content h1, .card-content p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(img,
        { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", autoAlpha: 0 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", autoAlpha: 1, duration: 1, ease: "power4.out" }
      )
        .from(textEls, {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }, "-=0.5");

    });

  }, { scope: containerRef }); // Scope to container to find .card

  return (
    <div>
      {/* Removed smooth-wrapper logic as ScrollSmoother is removed */}
      <div className="spacer">
        <h1 className="gradient-text">Smart Saving Tips </h1>
        <p>Scroll down to explore the Tips <br />
        </p>
        <FontAwesomeIcon icon={faArrowDown} style={{ color: "#FFD43B", fontSize: "2rem" }} />
      </div>
      <div className="container" ref={containerRef}>
        <div className="stacked-cards">
          {cardsData.map((card, idx) => (
            <div className="card" key={idx}>
              <div className="card-content">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
              <div className="img-wrapper">
                <img src={card.img} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}