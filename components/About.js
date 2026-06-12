import Image from 'next/image';

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Photo mosaic */}
        <div className="relative reveal zoom-in">
          <div className="absolute top-3 left-3 z-10 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold">
            🏆 Best Restaurant 2024
          </div>
          <div className="grid grid-cols-3 gap-2" style={{ marginBottom:'8px' }}>
            <div className="col-span-2 relative rounded-2xl overflow-hidden group" style={{ height:'220px' }}>
              <Image unoptimized src="/images/nk_about1.webp" alt="Kuliner Nusantara" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="relative rounded-2xl overflow-hidden group" style={{ height:'220px' }}>
              <Image unoptimized src="/images/nk_about2.avif" alt="Masakan Indonesia" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="relative rounded-2xl overflow-hidden group" style={{ height:'160px' }}>
              <Image unoptimized src="/images/nk_about3.webp" alt="Sajian Nusantara" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="relative rounded-2xl overflow-hidden group" style={{ height:'160px' }}>
              <Image unoptimized src="/images/nk_about4.avif" alt="Hidangan Khas" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="relative rounded-2xl overflow-hidden group" style={{ height:'160px' }}>
              <Image unoptimized src="/images/nk_about5.avif" alt="Cita Rasa" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal from-right">
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
              { icon: '🌿', title: 'Bahan Segar', desc: '100% lokal & organik' },
              { icon: '👨‍🍳', title: 'Chef Berpengalaman', desc: '15+ tahun keahlian' },
              { icon: '🕙', title: 'Buka Setiap Hari', desc: '10.00 – 22.00 WIB' },
              { icon: '🚗', title: 'Parkir Luas', desc: 'Gratis untuk tamu' },
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
