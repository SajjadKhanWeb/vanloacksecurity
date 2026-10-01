import { useParams } from 'react-router-dom'
import { services } from '../data/site.js'
import Contact from '../components/Contact.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  
  const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  // Try to find matching service
  const matchedService = services.find(s => slug.includes(s.id)) || services[0]

  return (
    <main className="detail-page">
      <section className="detail-hero" style={{ backgroundColor: '#ffffff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ color: '#000' }}>{formattedName}</h1>
          <p className="section-kicker" style={{ color: '#333', marginBottom: '2rem' }}>{matchedService.description}</p>
          <img src={matchedService.image} alt={formattedName} style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="detail-content" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#111', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>Why Choose {formattedName}?</h2>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Protecting your livelihood starts with the right physical and electronic security. Our {formattedName} solutions are professionally installed and built to withstand the most aggressive forced-entry techniques.
            </p>
            
            <h3 style={{ color: '#111', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>Key Benefits</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li>Thatcham-approved, commercial-grade components.</li>
              <li>Expert mobile installation at your home or workplace.</li>
              <li>Minimal disruption to your working day.</li>
              <li>Comprehensive warranty and dedicated aftercare.</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
