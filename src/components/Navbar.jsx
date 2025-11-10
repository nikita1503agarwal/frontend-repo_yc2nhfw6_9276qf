import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu as MenuIcon } from 'lucide-react'

export default function Navbar({ onReserveClick, onCartClick }) {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-amber-200/60 text-stone-900' : 'text-stone-700 hover:text-stone-900 hover:bg-amber-100/60'}`

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-semibold text-stone-800">Brew Haven</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/menu" className={linkClass}>Menu</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={onCartClick} className="px-4 py-2 rounded-md bg-stone-800 text-amber-100 hover:bg-stone-700 transition">Order Coffee</button>
            <button onClick={onReserveClick} className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition">Reserve a Table</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            <MenuIcon className="w-6 h-6 text-stone-800" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/menu" onClick={() => setOpen(false)} className={linkClass}>Menu</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
            <button onClick={() => { setOpen(false); onCartClick?.() }} className="px-4 py-2 rounded-md bg-stone-800 text-amber-100">Order Coffee</button>
            <button onClick={() => { setOpen(false); onReserveClick?.() }} className="px-4 py-2 rounded-md bg-amber-600 text-white">Reserve a Table</button>
          </div>
        )}
      </div>
    </header>
  )
}
