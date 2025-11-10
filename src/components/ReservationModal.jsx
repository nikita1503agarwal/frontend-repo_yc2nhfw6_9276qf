import { useState } from 'react'

export default function ReservationModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: 2, phone: '' })
  const base = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${base}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) })
      })
      if (!res.ok) throw new Error('Failed')
      onClose()
      alert('Reservation requested! We\'ll confirm shortly.')
    } catch (e) {
      alert('Something went wrong. Please try again later.')
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-stone-800">Reserve a Table</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-700">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input required placeholder="Name" className="w-full border rounded-md px-3 py-2" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <div className="grid grid-cols-2 gap-3">
            <input required type="date" className="border rounded-md px-3 py-2" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} />
            <input required type="time" className="border rounded-md px-3 py-2" value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input required type="number" min="1" max="20" className="border rounded-md px-3 py-2" value={form.guests} onChange={e=>setForm(f=>({...f,guests:e.target.value}))} />
            <input placeholder="Phone" className="border rounded-md px-3 py-2" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} />
          </div>
          <button className="w-full py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700">Submit</button>
        </form>
      </div>
    </div>
  )
}
