import Image from "next/image";

const categories = ["Semua", "Nasi & Mie", "Sup & Soto", "Lauk", "Minuman"];

const items = [
  {
    name: "Nasi Goreng Kampung",
    desc: "Nasi goreng dengan bumbu rempah pilihan, telur mata sapi, dan kerupuk",
    price: "35.000",
    cat: "Nasi & Mie",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
    badge: "Best Seller",
  },
  {
    name: "Soto Ayam Lamongan",
    desc: "Kuah bening gurih dengan ayam suwir, lontong, dan tauge segar",
    price: "28.000",
    cat: "Sup & Soto",
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
    badge: "Favorit",
  },
  {
    name: "Rendang Daging Sapi",
    desc: "Rendang sapi empuk dimasak 4 jam dengan 17 rempah Minang asli",
    price: "55.000",
    cat: "Lauk",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    badge: "Premium",
  },
  {
    name: "Mie Ayam Spesial",
    desc: "Mie kenyal dengan topping ayam kecap, pangsit goreng, dan bakso",
    price: "30.000",
    cat: "Nasi & Mie",
    img: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80",
    badge: null,
  },
  {
    name: "Gado-Gado Jakarta",
    desc: "Sayuran segar dengan bumbu kacang khas Jakarta dan kerupuk udang",
    price: "25.000",
    cat: "Lauk",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    badge: null,
  },
  {
    name: "Es Teh Manis Nusantara",
    desc: "Teh pilihan diseduh dingin dengan gula aren asli",
    price: "12.000",
    cat: "Minuman",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    badge: null,
  },
];

const badgeColor = {
  "Best Seller": "bg-amber-500",
  Favorit: "bg-rose-500",
  Premium: "bg-violet-600",
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Pilihan Terbaik
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Menu <span className="text-amber-600">Unggulan</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Semua menu dibuat fresh setiap hari dari bahan-bahan pilihan terbaik
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span
                    className={`absolute top-3 left-3 ${badgeColor[item.badge]} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-stone-800 text-lg mb-1">{item.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold text-lg">
                    Rp {item.price}
                  </span>
                  <button className="bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-600 border border-amber-200 hover:border-amber-600 px-4 py-1.5 rounded-full text-sm font-semibold transition-all">
                    + Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Lihat Menu Lengkap
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
