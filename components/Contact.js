"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", telp: "", tanggal: "", tamu: "", pesan: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Nusantara Kitchen! Saya ingin reservasi meja.\n\nNama: ${form.nama}\nTelepon: ${form.telp}\nTanggal: ${form.tanggal}\nJumlah tamu: ${form.tamu}\nPesan: ${form.pesan}`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="kontak" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Hubungi Kami
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Reservasi & <span className="text-amber-600">Informasi</span>
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Pesan meja sekarang dan nikmati pengalaman makan yang tak terlupakan.
            Reservasi disarankan untuk kelompok 6 orang ke atas.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📍", label: "Alamat", val: "Jl. Nusantara No. 88, Kebayoran Baru, Jakarta Selatan 12180" },
              { icon: "📞", label: "Telepon", val: "+62 812-3456-7890" },
              { icon: "📧", label: "Email", val: "hello@nusantarakitchen.id" },
              { icon: "🕙", label: "Jam Buka", val: "Setiap hari, 10.00 – 22.00 WIB" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-stone-700 text-sm">{item.label}</div>
                  <div className="text-stone-500 text-sm">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-8">
            {["Instagram", "Facebook", "TikTok"].map((s) => (
              <a
                key={s}
                href="#"
                className="bg-stone-200 hover:bg-amber-600 hover:text-white text-stone-600 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-sm p-8 border border-stone-100">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                Terima kasih!
              </h3>
              <p className="text-stone-500">
                Anda akan diarahkan ke WhatsApp kami. Kami akan segera
                mengkonfirmasi reservasi Anda.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-amber-600 underline text-sm"
              >
                Buat reservasi lagi
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="text-xl font-bold text-stone-800 mb-6">
                Form Reservasi
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Nama Lengkap *</label>
                  <input
                    name="nama"
                    required
                    value={form.nama}
                    onChange={handle}
                    placeholder="Budi Santoso"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">No. Telepon *</label>
                  <input
                    name="telp"
                    required
                    value={form.telp}
                    onChange={handle}
                    placeholder="08123456789"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Tanggal *</label>
                  <input
                    name="tanggal"
                    type="date"
                    required
                    value={form.tanggal}
                    onChange={handle}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Jumlah Tamu *</label>
                  <select
                    name="tamu"
                    required
                    value={form.tamu}
                    onChange={handle}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  >
                    <option value="">Pilih</option>
                    {["1-2", "3-4", "5-6", "7-10", "10+"].map((v) => (
                      <option key={v} value={v}>{v} orang</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Pesan Tambahan</label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handle}
                  rows={3}
                  placeholder="Permintaan khusus, alergi makanan, dll."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Reservasi via WhatsApp</span>
                <span>📲</span>
              </button>

              <p className="text-center text-stone-400 text-xs">
                Dengan mengklik tombol di atas, Anda akan diarahkan ke WhatsApp kami
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
