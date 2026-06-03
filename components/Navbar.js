"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-stone-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-wide">
          🍽 Nusantara<span className="text-amber-400">Kitchen</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-200 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Reservasi
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-stone-900 border-t border-stone-700 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-200 hover:text-amber-400 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="bg-amber-600 text-white px-5 py-2 rounded-full text-center font-semibold"
          >
            Reservasi
          </a>
        </nav>
      )}
    </header>
  );
}
