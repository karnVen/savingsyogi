import logoImg from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logoImg}
              alt="SavingsYogi Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/auth?mode=signup">
              <Button variant="amber" size="default">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-medium py-2.5 px-4 rounded-lg hover:bg-primary-foreground/5 transition-colors text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link to="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                  <Button variant="amber" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
