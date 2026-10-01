import { steps } from '../data/site.js'

export default function HowItWorks() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Four clear steps from first call to a secured van</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li className="step" key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
