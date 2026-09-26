"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, Menu, X, Moon, Sun, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../i18n/i18nContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_disasters"), href: "#disasters" },
    { name: t("nav_guidelines"), href: "#guidelines" },
    { name: t("nav_about"), href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <motion.span 
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--danger)] drop-shadow-sm">ResQ</span>
            <span className="text-[var(--foreground)]">Net</span>
            <span className="text-[var(--warning)]">.</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="#connect" 
            className="px-6 py-2.5 bg-[var(--primary)] text-[var(--background)] font-bold rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all shadow-lg hover:shadow-xl ml-4"
          >
            {t("nav_connect")}
          </Link>

          {/* Language Switcher */}
          <div className="relative ml-2">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="px-4 h-10 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 flex items-center justify-center gap-2 text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all font-bold text-sm"
            >
              <Globe size={18} />
              <span>{language === "en" ? "English" : language === "hi" ? "हिंदी" : "বাংলা"}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl shadow-xl overflow-hidden py-2 z-50"
                >
                  <button onClick={() => { setLanguage("en"); setLangMenuOpen(false); }} className={`w-full text-left px-4 py-2 hover:bg-[var(--primary)]/10 text-sm font-bold ${language === 'en' ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>English</button>
                  <button onClick={() => { setLanguage("hi"); setLangMenuOpen(false); }} className={`w-full text-left px-4 py-2 hover:bg-[var(--primary)]/10 text-sm font-bold ${language === 'hi' ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>हिंदी</button>
                  <button onClick={() => { setLanguage("bn"); setLangMenuOpen(false); }} className={`w-full text-left px-4 py-2 hover:bg-[var(--primary)]/10 text-sm font-bold ${language === 'bn' ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>বাংলা</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all ml-2"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 flex items-center justify-center text-[var(--foreground)]"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Mobile Menu Toggle */}
          <button
            className="text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] shadow-xl border-t border-[var(--foreground)]/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
