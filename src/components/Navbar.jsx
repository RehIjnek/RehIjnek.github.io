import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',   to: '/' },
  { label: 'About',  to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Blog',   to: '/blog' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  const linkClass = (to) =>
    ['nav-link', isActive(to) ? 'nav-link-active' : '']
      .filter(Boolean)
      .join(' ')

  return (
    <nav className="bg-dk-surface border-b border-dk-border">
      <div className="mx-auto px-4">

        {/* Desktop — links centered */}
        <div className="hidden md:flex items-center justify-center h-16 space-x-1">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className={linkClass(to)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile — hamburger on right */}
        <div className="flex md:hidden items-center justify-end h-16">
          <button
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block w-6 h-0.5 bg-dk-text transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dk-text transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dk-text transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-dk-border py-2">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`block text-center py-2 px-4 ${linkClass(to)}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  )
}
