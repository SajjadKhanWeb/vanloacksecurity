import { useEffect, useRef, useState } from 'react'
import { navLinks, site, vanModels, serviceGroups, popularVanIds } from '../data/site.js'
import Logo from './Logo.jsx'
import VanMegaMenu from './VanMegaMenu.jsx'
import ServicesMegaMenu from './ServicesMegaMenu.jsx'
import { Chevron, ArrowRight } from './MenuIcons.jsx'

const accordionData = {
  vans: {
    title: 'Popular vans',
    items: popularVanIds
      .map((id) => vanModels.find((van) => van.id === id))
      .filter(Boolean),
    allLabel: 'All vans',
    target: 'vehicles',
  },
  services: {
    title: 'Service categories',
    items: serviceGroups,
    allLabel: 'All services',
    target: 'services',
  },
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [openSection, setOpenSection] = useState(null)
  const [openVan, setOpenVan] = useState(null)
  const [active, setActive] = useState('home')
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open || openMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, openMenu])

  useEffect(() => {
    if (!openMenu) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }
    const onClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenMenu(null)
    }
    const onScroll = () => setOpenMenu(null)

    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
    }
  }, [openMenu])

  const go = (id) => {
    setOpen(false)
    setOpenSection(null)
    setOpenVan(null)
    setOpenMenu(null)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMenu = (key) => {
    setOpenMenu((current) => (current === key ? null : key))
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="container header-inner">
        <a className="header-brand" href="#home" onClick={() => go('home')}>
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div className="nav-dropdown" key={link.id}>
                <button
                  type="button"
                  className={`nav-trigger${active === link.id ? ' is-active' : ''}${openMenu === link.hasMegaMenu ? ' is-open' : ''}`}
                  aria-expanded={openMenu === link.hasMegaMenu}
                  aria-haspopup="true"
                  onClick={() => toggleMenu(link.hasMegaMenu)}
                >
                  <span>{link.label}</span>
                  <Chevron />
                </button>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  go(link.id)
                }}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <a className="btn btn-primary header-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>
          Get a Quote
        </a>

        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
          <span />
        </button>
      </div>

      {openMenu && (
        <div className="mega-wrap">
          <div className="container">
            {openMenu === 'vans' ? (
              <VanMegaMenu onClose={() => setOpenMenu(null)} onNavigate={go} />
            ) : (
              <ServicesMegaMenu onClose={() => setOpenMenu(null)} onNavigate={go} />
            )}
          </div>
        </div>
      )}

      <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobile-menu">
        <p className="mobile-kicker">{site.tagline}</p>
        {navLinks.map((link) => {
          const data = link.hasMegaMenu ? accordionData[link.hasMegaMenu] : null
          const expanded = openSection === link.id
          return (
            <div className="mobile-item" key={link.id}>
              {data ? (
                <>
                  <button
                    type="button"
                    className={`mobile-link${active === link.id ? ' is-active' : ''}${expanded ? ' is-open' : ''}`}
                    aria-expanded={expanded}
                    onClick={() => setOpenSection((current) => (current === link.id ? null : link.id))}
                  >
                    <span>{link.label}</span>
                    <Chevron />
                  </button>
                  {expanded && (
                    <div className="mobile-sub">
                      <p className="mobile-sub-title">{data.title}</p>
                      {data.items.map((item) =>
                        item.options ? (
                          <div className="mobile-sub-group" key={item.id ?? item.name}>
                            <button
                              type="button"
                              className={`mobile-sub-link mobile-van-toggle${openVan === item.id ? ' is-open' : ''}`}
                              aria-expanded={openVan === item.id}
                              onClick={() => setOpenVan((current) => (current === item.id ? null : item.id))}
                            >
                              {item.name ?? item.title}
                              <Chevron />
                            </button>
                            {openVan === item.id && (
                              <ul className="mobile-van-options">
                                {item.options.map((option) => (
                                  <li key={option}>
                                    <button type="button" onClick={() => go('contact')}>
                                      {option}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <button
                            key={item.id ?? item.name}
                            type="button"
                            className="mobile-sub-link"
                            onClick={() => go(link.id)}
                          >
                            {item.name ?? item.title}
                            <ArrowRight />
                          </button>
                        ),
                      )}
                      <button
                        type="button"
                        className="btn btn-dark mobile-sub-all"
                        onClick={() => go(data.target)}
                      >
                        {data.allLabel}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <a
                  className={`mobile-link${active === link.id ? ' is-active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    go(link.id)
                  }}
                >
                  {link.label}
                </a>
              )}
            </div>
          )
        })}
        <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>
          Get a Quote
        </a>
      </div>
    </header>
  )
}
