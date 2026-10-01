import { images } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow" style={{ color: 'var(--gray-light)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: '30px', height: '2px', background: 'var(--yellow)' }}></span>
            Protect your van, protect your business
          </div>
          <h1>Safe & Secure<br/>Vehicle <span style={{ color: 'var(--blue)' }}>Solutions</span></h1>
          <p className="lede">
            We specialize in high-quality van security systems, locks, and
            safeguard your vehicle, tools, and livelihood. With expertly
            installed locks and anti-theft systems, we keep your van secure—
            wherever you go.
          </p>
          <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <a className="btn btn-primary" href="#contact" style={{ background: 'var(--yellow)', color: '#000', borderColor: 'var(--yellow)' }}>
              Get a Quote &rarr;
            </a>
            <a className="btn btn-light" href="#services">
              Our Services
            </a>
          </div>
          <div className="hero-trust" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              <span style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>Advanced<br/>Security Systems</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <span style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>Professional<br/>Installation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              <span style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>24/7<br/>Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
