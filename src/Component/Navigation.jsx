import logoImg from '@/assets/logo.png'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#003a73] text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold text-base lg:text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="hover:text-yellow-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/auth?mode=signup"
              className="bg-yellow-400 text-blue-900 px-4 lg:px-5 py-2 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-yellow-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white hover:text-yellow-300 font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link
                  to="/auth?mode=signup"
                  className="block bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl hover:bg-yellow-300 text-center font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
