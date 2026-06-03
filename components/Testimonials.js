const reviews = [
  {
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    avatar: "BS",
    rating: 5,
    text: "Rendangnya luar biasa! Saya sudah keliling berbagai restoran Padang, tapi yang ini paling mirip dengan masakan rumah nenek saya di Bukittinggi. Wajib coba!",
    color: "bg-amber-600",
  },
  {
    name: "Sari Dewi",
    role: "Food Blogger",
    avatar: "SD",
    rating: 5,
    text: "Datang untuk review, pulang jadi pelanggan setia. Soto ayamnya kuahnya bening tapi kaya rasa. Harga sangat terjangkau untuk kualitas sebagus ini.",
    color: "bg-rose-600",
  },
  {
    name: "Ahmad Rizky",
    role: "Karyawan Swasta",
    avatar: "AR",
    rating: 5,
    text: "Tempat favorit makan siang saya. Pelayanan ramah, makanan cepat datang, dan selalu konsisten enaknya. Nasi goreng kampungnya the best!",
    color: "bg-violet-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Kata Mereka
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Pelanggan <span className="text-amber-600">Bahagia</span> Kami
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-2xl font-bold text-stone-800">4.9</span>
            <span className="text-amber-400 text-2xl">★★★★★</span>
            <span className="text-stone-500 text-sm">(1.200+ ulasan Google)</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="text-amber-400 text-lg mb-4">{"★".repeat(r.rating)}</div>

              {/* Text */}
              <p className="text-stone-600 leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div
                  className={`${r.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{r.name}</div>
                  <div className="text-stone-400 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
