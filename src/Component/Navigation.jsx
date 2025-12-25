import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Image lives in the Vite public directory, so reference it via root-relative path
const logo = "/Untitled.png";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Navbar slide down
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
    );

    // Links stagger animation (filter out any undefined entries)
    gsap.fromTo(
      linksRef.current.filter(Boolean),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-[#003366] h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-12 shadow-md"
    >
      {/* Logo */}
      <a href="#" ref={logoRef}>
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:rounded-[30%] hover:shadow-[0_0_20px_#FFB300]"
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
        {["Home", "Savings", "Blog", "About", "Contact"].map((item, i) => (
          <li key={item} ref={(el) => (linksRef.current[i] = el)}>
            <a
              href="#"
              className="relative text-white text-base xl:text-lg font-medium hover:text-[#FFB300] after:content-[''] after:absolute after:left-0 after:-bottom-1 .after:h-[2px] after:w-0 after:bg-[#FFB300] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}

        {/* CTA */}
        <li ref={(el) => (linksRef.current[4] = el)}>
          <button
            type="button"
            className="bg-[#FFB300] text-[#003366] px-4 xl:px-6 py-2 rounded-md font-bold hover:scale-105 transition-transform flex items-center justify-center text-sm xl:text-base"
          >
            Sign Up
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-[#003366] shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 space-y-4">
          {["Home", "Savings", "Blog", "About", "Contact"].map((item, i) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white text-lg font-medium hover:text-[#FFB300] py-2 border-b border-white/10"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#FFB300] text-[#003366] px-6 py-3 rounded-md font-bold hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
