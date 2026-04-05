"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl font-bold text-cream tracking-wide">
            DaVinci
          </span>
          <span className="text-gold text-sm font-light tracking-[0.3em] uppercase">
            Stone
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-cream/80 hover:text-gold text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/request"
            className="ml-4 px-5 py-2.5 bg-gold text-charcoal text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-gold-light transition-colors duration-300"
          >
            Free Measurement
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-cream/80 hover:text-gold text-lg tracking-wider uppercase transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/request"
            className="mt-2 px-5 py-3 bg-gold text-charcoal text-sm font-semibold tracking-wider uppercase text-center"
          >
            Free Measurement
          </a>
        </div>
      </div>
    </nav>
  );
}
