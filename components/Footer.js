export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-white font-bold text-2xl mb-3">
              🍽 Nusantara<span className="text-amber-400">Kitchen</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Menghadirkan cita rasa autentik masakan Nusantara dalam suasana
              modern yang hangat dan nyaman.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "TikTok", "Google"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center text-xs transition-colors"
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Menu</h4>
            <ul className="space-y-2 text-sm">
              {["Nasi & Mie", "Sup & Soto", "Lauk Pauk", "Minuman", "Dessert"].map((m) => (
                <li key={m}>
                  <a href="#menu" className="hover:text-amber-400 transition-colors">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Jl. Nusantara No. 88</li>
              <li>🏙 Kebayoran Baru, Jakarta</li>
              <li>📞 +62 812-3456-7890</li>
              <li>🕙 10.00 – 22.00 WIB</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors inline-block"
                >
                  WhatsApp Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Nusantara Kitchen. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
