import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navLinks, site, vanModels, popularVanIds, services } from '../data/site.js'
import Logo from './Logo.jsx'
import { Chevron, ArrowRight } from './MenuIcons.jsx'

const ACTIVE_COLOR = '#3B82F6'
const DEFAULT_COLOR = '#fff'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [activeItem, setActiveItem] = useState('home')
  const headerRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      // On home page, keep current activeItem (could be a hash section)
      if (!location.hash && activeItem !== '#about' && activeItem !== '#contact') {
        setActiveItem('home')
      }
    } else if (path === '/fleets') {
      setActiveItem('fleets')
    } else if (path.startsWith('/van/')) {
      setActiveItem('vans')
    } else if (path.startsWith('/services/')) {
      setActiveItem('services')
    }
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (path) => {
    setOpen(false)
    setOpenMenu(null)

    // Set active item based on what was clicked
    if (path === '/') {
      setActiveItem('home')
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (path === '#about') {
      setActiveItem('about')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path === '#contact') {
      setActiveItem('contact')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path === '/fleets') {
      setActiveItem('fleets')
      navigate(path)
    } else {
      navigate(path)
    }
  }

  const toggleMenu = (key) => {
    setOpenMenu((current) => (current === key ? null : key))
  }

  const getColor = (item) => activeItem === item ? ACTIVE_COLOR : DEFAULT_COLOR
  const getMobileColor = (item) => activeItem === item ? ACTIVE_COLOR : DEFAULT_COLOR

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} ref={headerRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, backgroundColor: scrolled ? '#000' : 'transparent', transition: '0.3s' }}>
      <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <Link className="header-brand" to="/" onClick={() => go('/')}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" onClick={(e) => { e.preventDefault(); go('/'); }} style={{ color: getColor('home'), textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
          <button onClick={() => go('#about')} style={{ background: 'none', border: 'none', color: getColor('about'), cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit', transition: 'color 0.3s' }}>About Us</button>

          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setOpenMenu(null)}>
            <button
              type="button"
              style={{ background: 'none', border: 'none', color: getColor('vans'), cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontFamily: 'inherit', transition: 'color 0.3s' }}
              onMouseEnter={() => setOpenMenu('vans')}
              onClick={() => toggleMenu('vans')}
            >
              <span>Choose Your Van</span>
              <Chevron />
            </button>
            {openMenu === 'vans' && (
              <div className="simple-dropdown" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#111', padding: '1rem', borderRadius: '8px', minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                {popularVanIds.map((id) => {
                  const van = vanModels.find((v) => v.id === id)
                  if (!van) return null
                  return (
                    <Link key={van.id} to={`/van/${van.id}`} onClick={() => { setOpenMenu(null); setActiveItem('vans'); }} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                      {van.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setOpenMenu(null)}>
            <button
              type="button"
              style={{ background: 'none', border: 'none', color: getColor('services'), cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontFamily: 'inherit', transition: 'color 0.3s' }}
              onMouseEnter={() => setOpenMenu('services')}
              onClick={() => toggleMenu('services')}
            >
              <span>Our Services</span>
              <Chevron />
            </button>
            {openMenu === 'services' && (
              <div className="simple-dropdown" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#111', padding: '1rem', borderRadius: '8px', minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                {services.map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`} onClick={() => { setOpenMenu(null); setActiveItem('services'); }} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => go('/fleets')} style={{ background: 'none', border: 'none', color: getColor('fleets'), cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit', transition: 'color 0.3s' }}>Fleets</button>
          <button onClick={() => go('#contact')} style={{ background: 'none', border: 'none', color: getColor('contact'), cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit', transition: 'color 0.3s' }}>Contact</button>
        </nav>

        <button className="btn btn-primary header-cta" onClick={() => go('#contact')}>
          Get a Quote
        </button>

        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobile-menu" style={{ display: open ? 'block' : 'none', backgroundColor: '#000', padding: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button onClick={() => go('/')} style={{ background: 'none', border: 'none', color: getMobileColor('home'), cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0, transition: 'color 0.3s' }}>Home</button>
          <button onClick={() => go('#about')} style={{ background: 'none', border: 'none', color: getMobileColor('about'), cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0, transition: 'color 0.3s' }}>About Us</button>
          
          <div style={{ color: getMobileColor('vans'), fontSize: '1.2rem', fontWeight: 'bold' }}>Vans</div>
          {popularVanIds.map((id) => {
            const van = vanModels.find((v) => v.id === id)
            if (!van) return null
            return (
              <Link key={van.id} to={`/van/${van.id}`} onClick={() => { setOpen(false); setActiveItem('vans'); }} style={{ color: '#ccc', textDecoration: 'none', paddingLeft: '1rem' }}>
                {van.name}
              </Link>
            )
          })}

          <div style={{ color: getMobileColor('services'), fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Services</div>
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} onClick={() => { setOpen(false); setActiveItem('services'); }} style={{ color: '#ccc', textDecoration: 'none', paddingLeft: '1rem' }}>
              {service.title}
            </Link>
          ))}

          <button onClick={() => { setOpen(false); go('/fleets'); }} style={{ background: 'none', border: 'none', color: getMobileColor('fleets'), cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0, marginTop: '1rem', transition: 'color 0.3s' }}>Fleets</button>
          <button onClick={() => { setOpen(false); go('#contact'); }} style={{ background: 'none', border: 'none', color: getMobileColor('contact'), cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0, transition: 'color 0.3s' }}>Contact</button>

          <button className="btn btn-primary" onClick={() => { setOpen(false); go('#contact'); }} style={{ marginTop: '1rem' }}>
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}
