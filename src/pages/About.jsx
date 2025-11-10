export default function About(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-stone-700">
      <h2 className="text-4xl font-serif text-stone-900">Our Story</h2>
      <p className="mt-4">Brew Haven was born from a love of slow mornings and handcrafted cups. We work with local roasters and bakers to bring the freshest flavors to our neighborhood.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-100">
          <h3 className="font-medium text-stone-900">Location</h3>
          <p className="text-sm mt-1">123 Roastery Ln, Bean City</p>
        </div>
        <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-100">
          <h3 className="font-medium text-stone-900">Hours</h3>
          <ul className="text-sm mt-1 space-y-1">
            <li>Mon–Fri: 7:00 AM – 8:00 PM</li>
            <li>Sat: 8:00 AM – 9:00 PM</li>
            <li>Sun: 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
