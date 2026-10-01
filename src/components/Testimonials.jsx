import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2>Why van owners trust VanLock</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p className="stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </p>
              <p className="quote">“{item.quote}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
