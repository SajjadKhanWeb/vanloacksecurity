import { Link } from 'react-router-dom'
import Contact from '../components/Contact.jsx'
import TrustBar from '../components/TrustBar.jsx'

export default function Fleets() {
  return (
    <main className="fleets-page">
      <section className="detail-hero" style={{ backgroundColor: '#ffffff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ color: '#000' }}>Fleet Security Solutions</h1>
          <p className="section-kicker" style={{ color: '#333', marginBottom: '2rem' }}>Comprehensive protection for commercial fleets of all sizes.</p>
          <img src="/images/fleet.jpg" alt="Fleet Security Solutions" style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="detail-content" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#111', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>Securing Your Business Assets</h2>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              When you manage a fleet, vehicle downtime isn't just an inconvenience—it's a direct hit to your bottom line. Our bespoke fleet security packages ensure your vans, tools, and cargo are protected around the clock, allowing your business to operate without interruption.
            </p>
            
            <h3 style={{ color: '#111', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>Our Fleet Services Include:</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Volume Discounts:</strong> Competitive pricing for multi-vehicle installations.</li>
              <li><strong>Mobile Installation:</strong> We come to your depot or site to minimize vehicle downtime.</li>
              <li><strong>Custom Packages:</strong> Mixed fleets? No problem. We tailor the locks and electronic security to suit each vehicle model.</li>
              <li><strong>Account Management:</strong> Dedicated support for ongoing maintenance, repairs, and fleet expansion.</li>
              <li><strong>Standardized Security:</strong> Ensure every driver has the same high level of protection with uniform deadlocks, slamlocks, and trackers.</li>
            </ul>
          </div>
        </div>
      </section>

      <TrustBar />
      <Contact />
    </main>
  )
}
