import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="nav">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="ND Builtshine — Incubateur de solutions techniques" />
        </NavLink>

        <nav className={`links ${open ? 'open' : ''}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <NavLink to="/contact" className="btn hide-mobile">
            Demander un devis
          </NavLink>
          <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={() => setOpen((v) => !v)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
