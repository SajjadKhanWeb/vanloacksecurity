import { useState } from 'react'
import { navLinks, site } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Footer() {
  const [legal, setLegal] = useState(null)

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Premium van and commercial vehicle security. Specified properly, fitted cleanly, supported after the install.
          </p>
          <div className="social">
            <a href={site.social.facebook} aria-label="Facebook">
              Facebook
            </a>
            <a href={site.social.instagram} aria-label="Instagram">
              Instagram
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {navLinks
              .filter((link) => ['home', 'about', 'services', 'vehicles', 'contact'].includes(link.id))
              .map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Dead Locks</a></li>
            <li><a href="#services">Hook Locks</a></li>
            <li><a href="#services">Slam Locks</a></li>
            <li><a href="#services">Security Upgrades</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={site.emailHref}>{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div>
            <button type="button" onClick={() => setLegal('privacy')}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => setLegal('terms')}>
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
      {legal && (
        <div className="legal-modal" role="dialog" aria-modal="true">
          <div className="legal-card">
            <h3>{legal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</h3>
            <p>
              {legal === 'privacy'
                ? 'This frontend demo does not store form submissions. When you connect a live enquiry inbox, publish how contact data is used, retained and protected.'
                : 'Quotes, fittings and aftercare terms should be confirmed in writing before installation. This demo site is for presentation of the VanLock Security frontend only.'}
            </p>
            <button className="btn btn-primary" type="button" onClick={() => setLegal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
