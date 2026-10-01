import { whyChoose } from '../data/site.js'

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Why choose us</p>
          <h2>Secure, specify and protect — without the generic package</h2>
        </div>
        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <article className="why-card" key={item.title}>
              <span className="why-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
