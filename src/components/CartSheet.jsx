import { useState } from 'react'

export default function CartSheet({ open, onClose }){
  const [items, setItems] = useState([
    { name: 'Espresso', price: 3.0, quantity: 1 },
    { name: 'Cappuccino', price: 4.5, quantity: 1 },
  ])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  const total = items.reduce((s,i)=> s + i.price * i.quantity, 0)

  const checkout = async () => {
    try {
      const res = await fetch(`${base}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      })
      const data = await res.json()
      if (data.payment_url) {
        window.open(data.payment_url, '_blank')
      } else {
        alert('Order placed! Total $' + total.toFixed(2))
      }
    } catch (e) {
      alert('Could not process payment right now.')
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6" onClick={(e)=>e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-stone-800">Your Order</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-700">✕</button>
        </div>
        <div className="mt-4 space-y-3">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between border rounded-md p-3">
              <div>
                <div className="font-medium text-stone-900">{it.name}</div>
                <div className="text-sm text-stone-600">${it.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setItems(prev => prev.map((p,i)=> i===idx? {...p, quantity: Math.max(1,p.quantity-1)}:p))} className="px-2 py-1 border rounded">-</button>
                <span>{it.quantity}</span>
                <button onClick={() => setItems(prev => prev.map((p,i)=> i===idx? {...p, quantity: p.quantity+1}:p))} className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-stone-700">Total</span>
          <span className="text-stone-900 font-semibold">${total.toFixed(2)}</span>
        </div>
        <button onClick={checkout} className="mt-4 w-full py-2 rounded-md bg-stone-800 text-amber-100">Checkout</button>
      </div>
    </div>
  )
}
