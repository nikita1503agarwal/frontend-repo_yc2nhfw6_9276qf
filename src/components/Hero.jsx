import { motion } from 'framer-motion'

export default function Hero({ onReserveClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-amber-900/40" />

      {/* Parallax coffee steam using framer-motion */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-300/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-28 sm:py-36 text-center text-amber-50">
        <h1 className="text-4xl sm:text-6xl font-serif font-semibold drop-shadow-lg">Welcome to Brew Haven</h1>
        <p className="mt-4 max-w-2xl mx-auto text-amber-100/90">A cozy corner for coffee lovers. Sip, savor, and stay awhile with artisanal brews, delicate teas, and freshly baked pastries.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#menu" className="px-5 py-3 rounded-md bg-amber-600 hover:bg-amber-700 text-white">Explore Menu</a>
          <button onClick={onReserveClick} className="px-5 py-3 rounded-md bg-white/90 text-stone-900 hover:bg-white">Reserve a Table</button>
        </div>
      </div>
    </section>
  )
}
