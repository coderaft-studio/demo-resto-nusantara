import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Interior restoran",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    alt: "Hidangan spesial",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    alt: "Area makan outdoor",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504674671576-441e6b01e1d1?w=400&q=80",
    alt: "Proses memasak",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    alt: "Sajian lengkap",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Galeri
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Lihat <span className="text-amber-600">Keindahan</span> Kami
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Dari dapur hingga meja makan — setiap sudut dirancang untuk
            kenyamanan Anda
          </p>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-52">
          {photos.map((p) => (
            <div
              key={p.alt}
              className={`relative rounded-2xl overflow-hidden group ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
