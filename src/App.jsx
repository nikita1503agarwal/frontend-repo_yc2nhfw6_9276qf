import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ReservationModal from './components/ReservationModal'
import CartSheet from './components/CartSheet'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [reserveOpen, setReserveOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 text-stone-800">
      <Navbar onReserveClick={()=>setReserveOpen(true)} onCartClick={()=>setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onReserveClick={()=>setReserveOpen(true)} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      <ReservationModal open={reserveOpen} onClose={()=>setReserveOpen(false)} />
      <CartSheet open={cartOpen} onClose={()=>setCartOpen(false)} />
    </div>
  )
}

export default App
