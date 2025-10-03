import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return
      if (window.scrollY > 6) headerRef.current.classList.add('scrolled')
      else headerRef.current.classList.remove('scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link to="/" className="brand">Your Name</Link>
        <nav className="nav">
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(v => !v)}
          >
            ☰
          </button>
          <ul className={`nav-list ${open ? 'open' : ''}`} onClick={(e) => {
            if (e.target.tagName === 'A') setOpen(false)
          }}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/contact" className="btn btn-primary btn-small">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}