import { useState, useEffect } from 'react'
import Hero from '../components/Hero'

export default function Home({ onReserveClick }) {
  const [menu, setMenu] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/api/menu`).then(r=>r.json()).then(setMenu).catch(()=>{})
  }, [])

  return (
    <div>
      <Hero onReserveClick={onReserveClick} />

      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-stone-900">Signature Picks</h2>
        <p className="text-stone-600 mt-2">A taste of what we serve fresh daily.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.slice(0,6).map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
              {item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-stone-900">{item.name}</h3>
                  <span className="text-amber-700 font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-stone-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
