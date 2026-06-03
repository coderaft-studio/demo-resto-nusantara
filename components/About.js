import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image grid */}
        <div className="relative grid grid-cols-2 gap-4 h-96">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
              alt="Masakan Nusantara"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden mt-8">
            <Image
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
              alt="Chef memasak"
              fill
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-bold whitespace-nowrap">
            🏆 Best Restaurant 2024
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Tentang Kami
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
            Lebih dari Sekadar <span className="text-amber-600">Makanan</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Nusantara Kitchen lahir dari kecintaan mendalam terhadap kekayaan
            kuliner Indonesia. Sejak 2014, kami menghadirkan cita rasa autentik
            dari Sabang hingga Merauke dalam suasana restoran yang hangat dan
            modern.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Setiap hidangan dibuat dari bahan-bahan segar lokal yang dipilih
            langsung dari petani setempat. Resep kami diwariskan turun-temurun
            dengan sentuhan kreativitas chef berpengalaman kami.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🌿", title: "Bahan Segar", desc: "100% lokal & organik" },
              { icon: "👨‍🍳", title: "Chef Berpengalaman", desc: "15+ tahun keahlian" },
              { icon: "🕙", title: "Buka Setiap Hari", desc: "10.00 – 22.00 WIB" },
              { icon: "🚗", title: "Parkir Luas", desc: "Gratis untuk tamu" },
            ].map((item) => (
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
