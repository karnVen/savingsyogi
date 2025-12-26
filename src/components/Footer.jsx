import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logoImg from "@/assets/logo.png";

const footerLinks = {
  Services: ["Savings Tips", "Budget Planning", "Investment Basics", "Financial Education"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Resources: ["Help Center", "Privacy Policy", "Terms of Service", "Contact"],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Ready to start your savings journey?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Join thousands of users who trust SavingsYogi for better money habits. Getting started takes less than a minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="amber" size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="hero-secondary" size="lg" className="w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-6 md:mb-0">
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src={logoImg} alt="SavingsYogi" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover" />
              <span className="text-lg sm:text-xl font-bold tracking-tight">SavingsYogi</span>
            </a>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-4 sm:mb-6">
              Your trusted guide to smarter savings and better money habits since 2020.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">{title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/60 text-xs sm:text-sm hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center sm:text-left">
            © 2024 SavingsYogi. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-primary-foreground/50 text-[10px] sm:text-xs">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

