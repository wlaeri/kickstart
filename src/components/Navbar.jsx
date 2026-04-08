import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <div className={`transition-all duration-300 ${scrolled ? '' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}`}>
            <img
              src="/images/soccer-ball.svg"
              alt="Kickstart Kids Soccer"
              className="h-9 md:h-11 w-auto transition-transform duration-300 group-hover:rotate-[20deg]"
            />
          </div>
          <span
            className={`font-display text-base md:text-lg tracking-tight transition-colors duration-300 hidden sm:block ${
              scrolled ? 'text-navy' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
            }`}
          >
            Kickstart Kids
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 ${
                scrolled
                  ? 'text-navy/70 hover:text-navy hover:bg-green-bg'
                  : 'text-white/80 hover:text-white hover:bg-white/15'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-3 px-5 py-2 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              scrolled
                ? 'bg-orange text-white shadow-[0_4px_12px_rgba(255,152,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,152,0,0.45)]'
                : 'bg-white text-navy shadow-lg hover:shadow-xl'
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[3px] rounded-full transition-all duration-300 origin-center ${
              scrolled ? 'bg-navy' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
          />
          <span
            className={`block w-6 h-[3px] rounded-full transition-all duration-300 ${
              scrolled ? 'bg-navy' : 'bg-white'
            } ${menuOpen ? 'opacity-0 scale-0' : ''}`}
          />
          <span
            className={`block w-6 h-[3px] rounded-full transition-all duration-300 origin-center ${
              scrolled ? 'bg-navy' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-white rounded-b-3xl shadow-xl mx-3 mb-3 p-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 rounded-2xl text-navy font-extrabold uppercase tracking-wider text-sm hover:bg-green-bg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mx-3 mt-2 mb-2 px-5 py-3 rounded-2xl bg-orange text-white font-extrabold uppercase tracking-wider text-sm text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
