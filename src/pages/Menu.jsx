import { useEffect, useState } from 'react'

export default function Menu() {
  const [items, setItems] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(()=>{
    fetch(`${base}/api/menu`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])

  const groups = items.reduce((acc, item)=>{
    acc[item.category] = acc[item.category] || []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {['coffee','tea','bakery'].map((cat) => (
        <section key={cat} className="mt-10">
          <h2 className="text-3xl font-serif capitalize text-stone-900">{cat}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(groups[cat]||[]).map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                {item.image && <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />}
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
      ))}
    </div>
  )
}
