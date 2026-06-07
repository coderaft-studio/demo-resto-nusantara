"use client";
import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", alt: "Masakan Nusantara" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Chef memasak" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", alt: "Suasana restoran" },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80", alt: "Hidangan spesial" },
  { src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80", alt: "Sajian lengkap" },
];

export default function About() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 220, behavior: "smooth" });

  return (
    <section id="tentang" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Carousel */}
        <div className="relative">
          <div className="absolute top-3 left-3 z-10 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold">
            🏆 Best Restaurant 2024
          </div>

          {/* Scrollable track */}
          <div ref={ref} className="flex gap-4 overflow-x-auto pb-3"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
            <style>{`.no-scroll::-webkit-scrollbar{display:none}`}</style>
            {photos.map((p, i) => (
              <div key={p.alt} className="relative flex-shrink-0 rounded-2xl overflow-hidden group"
                style={{ width: "200px", height: i % 2 === 0 ? "280px" : "240px", marginTop: i % 2 !== 0 ? "40px" : "0", scrollSnapAlign: "start" }}>
                <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {[[-1, "←"], [1, "→"]].map(([dir, label]) => (
                <button key={dir} onClick={() => scroll(dir)}
                  className="w-9 h-9 rounded-full text-sm font-bold transition-all hover:scale-110 active:scale-95"
                  style={{ background: "#92400e", color: "#fff", border: "none", cursor: "pointer" }}>
                  {label}
                </button>
              ))}
            </div>
            <span className="text-xs font-medium" style={{ color: "#a16207" }}>
              Geser untuk lihat semua →
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">Tentang Kami</p>
          <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
            Lebih dari Sekadar <span className="text-amber-600">Makanan</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Nusantara Kitchen lahir dari kecintaan mendalam terhadap kekayaan kuliner Indonesia.
            Sejak 2014, kami menghadirkan cita rasa autentik dari Sabang hingga Merauke dalam
            suasana restoran yang hangat dan modern.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Setiap hidangan dibuat dari bahan-bahan segar lokal yang dipilih langsung dari petani
            setempat. Resep kami diwariskan turun-temurun dengan sentuhan kreativitas chef berpengalaman kami.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🌿", title: "Bahan Segar", desc: "100% lokal & organik" },
              { icon: "👨‍🍳", title: "Chef Berpengalaman", desc: "15+ tahun keahlian" },
              { icon: "🕙", title: "Buka Setiap Hari", desc: "10.00 – 22.00 WIB" },
              { icon: "🚗", title: "Parkir Luas", desc: "Gratis untuk tamu" },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{item.title}</div>
                  <div className="text-stone-500 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
