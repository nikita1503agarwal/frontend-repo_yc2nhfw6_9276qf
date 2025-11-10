import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks for reaching out! We\'ll get back to you shortly.')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif text-stone-900">Contact Us</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-3">
          <input required placeholder="Name" className="w-full border rounded-md px-3 py-2" />
          <input required type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2" />
          <textarea required placeholder="Message" rows="5" className="w-full border rounded-md px-3 py-2" />
          <button className="px-5 py-2 rounded-md bg-stone-800 text-amber-100">Send</button>
          {status && <p className="text-green-700 text-sm">{status}</p>}
        </form>
        <div className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg border">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95373631550454!3d-37.81627974202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1614317321234"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          <p className="text-stone-700">Phone: (555) 123-4567</p>
          <p className="text-stone-700">Instagram: <a className="underline" href="https://instagram.com" target="_blank" rel="noreferrer">@brewhaven</a></p>
        </div>
      </div>
    </div>
  )
}
