const features = [
  {
    icon: "🌾",
    title: "Bahan 100% Segar",
    desc: "Kami berbelanja langsung ke pasar setiap pagi. Tidak ada bahan yang disimpan lebih dari satu hari.",
  },
  {
    icon: "🔥",
    title: "Dimasak Saat Dipesan",
    desc: "Setiap hidangan dimasak fresh setelah Anda memesan, bukan dipanaskan ulang.",
  },
  {
    icon: "🌶",
    title: "Rempah Asli Nusantara",
    desc: "Bumbu rempah kami didatangkan langsung dari daerah asalnya untuk cita rasa yang otentik.",
  },
  {
    icon: "💳",
    title: "Berbagai Pembayaran",
    desc: "Terima tunai, kartu debit/kredit, QRIS, GoPay, OVO, dan Dana.",
  },
  {
    icon: "🚀",
    title: "Pesan Antar",
    desc: "Tersedia layanan pesan antar via GoFood, GrabFood, dan ShopeeFood.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Ramah Keluarga",
    desc: "Tempat duduk luas, area bermain anak, dan menu khusus untuk si kecil.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal from-bottom text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Kenapa Kami?
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Pengalaman Makan yang{" "}
            <span className="text-amber-400">Tak Terlupakan</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Kami tidak hanya menyajikan makanan — kami menghadirkan pengalaman
            kuliner yang berkesan
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-stone-800 hover:bg-stone-700 rounded-2xl p-7 transition-colors group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
