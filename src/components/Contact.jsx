import { useState } from 'react'
import { services, site } from '../data/site.js'

const empty = {
  name: '',
  phone: '',
  email: '',
  vehicle: '',
  service: '',
  message: '',
}

const ContactIcon = ({ path }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('')
  const [focused, setFocused] = useState('')

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    if (!form.name || !form.phone || !form.email) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm(empty)
  }

  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #07101c 0%, #0c1a2e 50%, #071018 100%)',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '60px',
          alignItems: 'start',
        }}>

          {/* LEFT — Contact Info */}
          <div>
            <p style={{
              color: 'var(--blue)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ width: '28px', height: '2px', background: 'var(--blue)', display: 'inline-block' }} />
              Contact Us
            </p>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', lineHeight: 1.2, marginBottom: '20px' }}>
              Get in touch with<br />
              <span style={{ color: 'var(--blue)' }}>the VanLock team</span>
            </h2>
            <p style={{ color: '#8fa3b8', lineHeight: 1.7, marginBottom: '40px', fontSize: '0.95rem' }}>
              Tell us the van and the risk. We will come back with a clear specification and a fitting window that works for you.
            </p>

            {/* Info Cards */}
            {[
              { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z', label: 'Phone', value: site.phone, href: site.phoneHref },
              { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6', label: 'Email', value: site.email, href: site.emailHref },
              { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', label: 'Location', value: site.address, href: null },
              { icon: 'M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', label: 'Hours', value: site.hours, href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                marginBottom: '24px',
                padding: '18px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                transition: 'border-color 0.3s',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(20,119,193,0.18)',
                  border: '1px solid rgba(20,119,193,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--blue)', flexShrink: 0,
                }}>
                  <ContactIcon path={icon} />
                </div>
                <div>
                  <p style={{ color: '#4e7a9e', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>{label}</p>
                  {href
                    ? <a href={href} style={{ color: '#e0eaf4', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>{value}</a>
                    : <p style={{ color: '#e0eaf4', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Premium Form */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '44px 40px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '40px', right: '40px', height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--blue), transparent)',
              borderRadius: '2px',
            }} />

            <h3 style={{ color: '#fff', fontSize: '1.45rem', fontWeight: 700, marginBottom: '8px' }}>
              Request a Free Quote
            </h3>
            <p style={{ color: '#5e7e99', fontSize: '0.88rem', marginBottom: '30px' }}>
              Fill in your details and we'll get back to you shortly.
            </p>

            {status === 'success' && (
              <div style={{
                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '12px', padding: '16px 20px', marginBottom: '24px',
                color: '#4ade80', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                Thank you! Your enquiry has been received. We'll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '12px', padding: '16px 20px', marginBottom: '24px',
                color: '#f87171', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                Please fill in your name, phone and email to continue.
              </div>
            )}

            <form onSubmit={submit} noValidate style={{ display: 'grid', gap: '20px' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', color: '#7aa3c0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Full Name *</label>
                <input
                  name="name" value={form.name} onChange={update}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                  autoComplete="name" required
                  placeholder="John Smith"
                  style={{
                    width: '100%', padding: '13px 16px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${focused === 'name' ? 'var(--blue)' : 'rgba(255,255,255,0.1)'}`,
                    color: '#fff', fontSize: '0.95rem', outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    boxShadow: focused === 'name' ? '0 0 0 3px rgba(20,119,193,0.2)' : 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Phone + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'phone', label: 'Phone *', placeholder: '07367 674000', type: 'tel', auto: 'tel' },
                  { name: 'email', label: 'Email *', placeholder: 'you@example.com', type: 'email', auto: 'email' },
                ].map(({ name, label, placeholder, type, auto }) => (
                  <div key={name}>
                    <label style={{ display: 'block', color: '#7aa3c0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</label>
                    <input
                      name={name} value={form[name]} onChange={update} type={type}
                      onFocus={() => setFocused(name)} onBlur={() => setFocused('')}
                      autoComplete={auto} placeholder={placeholder}
                      style={{
                        width: '100%', padding: '13px 16px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${focused === name ? 'var(--blue)' : 'rgba(255,255,255,0.1)'}`,
                        color: '#fff', fontSize: '0.95rem', outline: 'none',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        boxShadow: focused === name ? '0 0 0 3px rgba(20,119,193,0.2)' : 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Vehicle + Service */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: '#7aa3c0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Vehicle Type</label>
                  <input
                    name="vehicle" value={form.vehicle} onChange={update}
                    onFocus={() => setFocused('vehicle')} onBlur={() => setFocused('')}
                    placeholder="e.g. Ford Transit"
                    style={{
                      width: '100%', padding: '13px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)',
                      border: `1px solid ${focused === 'vehicle' ? 'var(--blue)' : 'rgba(255,255,255,0.1)'}`,
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      boxShadow: focused === 'vehicle' ? '0 0 0 3px rgba(20,119,193,0.2)' : 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#7aa3c0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Required Service</label>
                  <select
                    name="service" value={form.service} onChange={update}
                    onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                    style={{
                      width: '100%', padding: '13px 16px', borderRadius: '10px',
                      background: '#0e1e30',
                      border: `1px solid ${focused === 'service' ? 'var(--blue)' : 'rgba(255,255,255,0.1)'}`,
                      color: form.service ? '#fff' : '#4e7a9e', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      boxShadow: focused === 'service' ? '0 0 0 3px rgba(20,119,193,0.2)' : 'none',
                      boxSizing: 'border-box', cursor: 'pointer',
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', color: '#7aa3c0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
                <textarea
                  name="message" rows="4" value={form.message} onChange={update}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  placeholder="Tell us more about your security needs..."
                  style={{
                    width: '100%', padding: '13px 16px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${focused === 'message' ? 'var(--blue)' : 'rgba(255,255,255,0.1)'}`,
                    color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(20,119,193,0.2)' : 'none',
                    boxSizing: 'border-box', fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%', padding: '15px 24px',
                  background: 'linear-gradient(135deg, #1477c1 0%, #0e5fa0 100%)',
                  border: 'none', borderRadius: '12px', color: '#fff',
                  fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                  letterSpacing: '0.5px',
                  boxShadow: '0 8px 30px rgba(20,119,193,0.4)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(20,119,193,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(20,119,193,0.4)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Submit Enquiry
              </button>

              <p style={{ color: '#3d6080', fontSize: '0.8rem', textAlign: 'center', margin: 0 }}>
                🔒 Your information is 100% secure and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
