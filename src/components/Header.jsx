import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navLinks, site, vanModels, popularVanIds, services } from '../data/site.js'
import Logo from './Logo.jsx'
import { Chevron, ArrowRight } from './MenuIcons.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const headerRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (path) => {
    setOpen(false)
    setOpenMenu(null)
    if (path === '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  const toggleMenu = (key) => {
    setOpenMenu((current) => (current === key ? null : key))
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} ref={headerRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, backgroundColor: scrolled ? '#000' : 'transparent', transition: '0.3s' }}>
      <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <Link className="header-brand" to="/" onClick={() => go('/')}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" onClick={(e) => { e.preventDefault(); go('/'); }} style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <button onClick={() => go('#about')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>About Us</button>

          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setOpenMenu(null)}>
            <button
              type="button"
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontFamily: 'inherit' }}
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
                    <Link key={van.id} to={`/van/${van.id}`} onClick={() => setOpenMenu(null)} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
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
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontFamily: 'inherit' }}
              onMouseEnter={() => setOpenMenu('services')}
              onClick={() => toggleMenu('services')}
            >
              <span>Our Services</span>
              <Chevron />
            </button>
            {openMenu === 'services' && (
              <div className="simple-dropdown" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#111', padding: '1rem', borderRadius: '8px', minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                {services.map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`} onClick={() => setOpenMenu(null)} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => go('#fleets')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Fleets</button>
          <button onClick={() => go('#contact')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>Contact</button>
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
          <button onClick={() => go('/')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0 }}>Home</button>
          <button onClick={() => go('#about')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0 }}>About Us</button>
          
          <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>Vans</div>
          {popularVanIds.map((id) => {
            const van = vanModels.find((v) => v.id === id)
            if (!van) return null
            return (
              <Link key={van.id} to={`/van/${van.id}`} onClick={() => setOpen(false)} style={{ color: '#ccc', textDecoration: 'none', paddingLeft: '1rem' }}>
                {van.name}
              </Link>
            )
          })}

          <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Services</div>
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} onClick={() => setOpen(false)} style={{ color: '#ccc', textDecoration: 'none', paddingLeft: '1rem' }}>
              {service.title}
            </Link>
          ))}

          <button onClick={() => go('#fleets')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0, marginTop: '1rem' }}>Fleets</button>
          <button onClick={() => go('#contact')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem', textAlign: 'left', padding: 0 }}>Contact</button>

          <button className="btn btn-primary" onClick={() => go('#contact')} style={{ marginTop: '1rem' }}>
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}
