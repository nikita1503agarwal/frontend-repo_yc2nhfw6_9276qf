export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1485808191679-5f86510681a6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif text-stone-900">Gallery</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="Brew Haven" className="rounded-lg object-cover h-48 w-full"/>
        ))}
      </div>
    </div>
  )
}
