import { trustItems } from '../data/site.js'

const icons = [
  <svg key="1" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V7l8-4 8 4v12H4zm4-2h8v-6H8v6z" /></svg>,
  <svg key="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-8 9a8 8 0 0116 0H4z" /></svg>,
  <svg key="4" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3l-2 8h6l-8 10 2-8H5l8-10z" /></svg>,
  <svg key="5" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" /></svg>,
]

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust points">
      <div className="container trust-row">
        {trustItems.map((item, index) => (
          <article className="trust-item" key={item}>
            <span className="trust-icon">{icons[index]}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
