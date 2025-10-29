// components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-yellow-500" />
            <span className="text-xl font-bold">Leopard Mining</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Team', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-sm font-medium tracking-wider">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <button className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
export default Navbar;