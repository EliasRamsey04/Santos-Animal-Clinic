import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, HeartPulse } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-blue-900 p-2 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-blue-900">
            Santos <span className="text-emerald-600">Animal Clinic</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="sms:+17866771838"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            Text Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-slate-600 hover:text-emerald-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="sms:+17866771838"
                  className="bg-emerald-500 text-white px-5 py-3 rounded-xl font-medium flex items-center justify-center gap-2 w-full shadow-sm"
                >
                  Schedule via Text
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
