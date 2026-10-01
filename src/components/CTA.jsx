import { images } from '../data/site.js'

export default function CTA() {
  return (
    <section className="cta-band" style={{ backgroundImage: `url(${images.cta})` }}>
      <div className="cta-mask">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow light">Ready when you are</p>
            <h2>Protect your van with professional security</h2>
            <p>Get the right solution for your vehicle from experienced installers — one van or a full fleet.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href="#contact">
              Get a Quote
            </a>
            <a className="btn btn-light" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
