import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80"
        alt="Suasana restoran Nusantara Kitchen"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
          Selamat Datang di
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Nusantara
          <span className="text-amber-400 block">Kitchen</span>
        </h1>
        <p className="text-stone-200 text-lg md:text-xl mb-10 leading-relaxed">
          Cita rasa autentik masakan Indonesia yang dimasak dengan bahan-bahan
          segar pilihan dan resep turun-temurun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Lihat Menu
          </a>
          <a
            href="#kontak"
            className="border-2 border-white hover:bg-white hover:text-stone-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Reservasi Meja
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 text-white">
          {[
            { num: "50+", label: "Menu Pilihan" },
            { num: "10+", label: "Tahun Pengalaman" },
            { num: "4.9★", label: "Rating Google" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-amber-400">{s.num}</div>
              <div className="text-sm text-stone-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
