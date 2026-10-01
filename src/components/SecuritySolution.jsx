import { images } from '../data/site.js'

const features = [
  'High-security protection',
  'Professional installation',
  'Premium components',
  'Commercial vehicle ready',
  'Long-term reliability',
]

export default function SecuritySolution() {
  return (
    <section className="section section-muted" id="solutions">
      <div className="container split">
        <div className="split-media">
          <img
            src={images.solution}
            alt="Row of commercial vans protected with specialist lock systems"
            width="720"
            height="480"
            loading="lazy"
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Featured security solution</p>
          <h2>Layered protection that holds when a standard lock fails</h2>
          <p>
            Factory locks are a starting point, not a defence. We combine deadlocks, hook locks, slam systems and
            door reinforcement so thieves lose time — and usually walk away.
          </p>
          <ul className="check-list">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#contact">
            Request a Specification
          </a>
        </div>
      </div>
    </section>
  )
}
