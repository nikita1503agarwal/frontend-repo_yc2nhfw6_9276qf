export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-amber-50/60">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-stone-700">
        <div>
          <h4 className="font-serif text-xl text-stone-900">Brew Haven</h4>
          <p className="mt-2 text-sm">Warm cups, fresh bakes, and cozy corners. Come by and make yourself at home.</p>
        </div>
        <div>
          <h5 className="font-medium text-stone-900">Hours</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>Mon–Fri: 7:00 AM – 8:00 PM</li>
            <li>Sat: 8:00 AM – 9:00 PM</li>
            <li>Sun: 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-stone-900">Contact</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>123 Roastery Ln, Bean City</li>
            <li>Phone: (555) 123-4567</li>
            <li>Instagram: <a className="underline" href="https://instagram.com" target="_blank" rel="noreferrer">@brewhaven</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 pb-6">© {new Date().getFullYear()} Brew Haven. All rights reserved.</div>
    </footer>
  )
}
