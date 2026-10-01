import { useParams } from 'react-router-dom'
import { vanModels, manufacturerOptions } from '../data/site.js'
import Contact from '../components/Contact.jsx'

export default function VanDetail() {
  const { slug } = useParams()
  
  // Example slug: ford-custom-2023
  // Here we just extract the name to match with something or just display it.
  const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  // We could try to find a specific van from vanModels, or just use a default image.
  const matchedVan = vanModels.find(v => slug.includes(v.id)) || vanModels[0]

  return (
    <main className="detail-page">
      <section className="detail-hero" style={{ backgroundColor: '#ffffff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ color: '#000' }}>{formattedName}</h1>
          <p className="section-kicker" style={{ color: '#333', marginBottom: '2rem' }}>Professional security solutions for {formattedName}</p>
          <img src={matchedVan.image} alt={formattedName} style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="detail-content" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#111', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>Securing Your {formattedName}</h2>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We offer bespoke security packages for the {formattedName}. Whether you are an independent tradesperson or managing a fleet, our mobile installation service ensures your vehicle is protected against modern theft techniques.
            </p>
            
            <h3 style={{ color: '#111', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>Recommended Security Upgrades</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li>High-Security Deadlocks</li>
              <li>Hook Locks for maximum door protection</li>
              <li>Slam Locks for multi-drop delivery drivers</li>
              <li>Anti-Peel Brackets</li>
              <li>Loom Guards</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
