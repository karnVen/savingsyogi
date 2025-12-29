import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    )
    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.7)',
      },
    )
    gsap.fromTo(
      linksRef.current.filter(Boolean),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.6,
        ease: 'power2.out',
      },
    )
  }, [])

  const menuLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Savings', path: '/savings' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-[#003366] h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-12 shadow-md"
    >
      {/* Logo */}
      <Link to="/home" ref={logoRef}>
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:rounded-[30%] hover:shadow-[0_0_20px_#FFB300]"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
        {menuLinks.map((item, i) => (
          <li key={item.name} ref={(el) => (linksRef.current[i] = el)}>
            <Link
              to={item.path}
              className="relative text-white text-base xl:text-lg font-medium hover:text-[#FFB300]
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFB300]
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* CTA */}
        <li ref={(el) => (linksRef.current[4] = el)}>
          <Link
            to="/auth?mode=signup"
            className="bg-[#FFB300] text-[#003366] px-4 xl:px-6 py-2 rounded-md font-bold hover:scale-105 transition-transform text-sm xl:text-base"
          >
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white p-2"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-[#003366] shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 max-h-screen'
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col px-4 py-4 space-y-4">
          {menuLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white text-lg font-medium hover:text-[#FFB300] py-2 border-b border-white/10"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/auth?mode=signup"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block bg-[#FFB300] text-[#003366] px-6 py-3 rounded-md font-bold hover:scale-105 transition-transform text-center"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
