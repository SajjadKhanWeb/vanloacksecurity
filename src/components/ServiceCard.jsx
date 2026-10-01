export default function ServiceCard({ service, isActive, selectedOption, onSelect, onSelectOption }) {
  return (
    <article className={`service-card card-3d${isActive ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="card-select"
        aria-pressed={isActive}
        onClick={() => onSelect(service.id)}
      >
        <span className="card-media">
          <img src={service.image} alt="" width="480" height="280" loading="lazy" />
        </span>
        <span className="card-body">
          <span className="card-title-row">
            <h3>{service.title}</h3>
            <span className="card-badge" aria-hidden="true" />
          </span>
          <span className="card-text">{service.description}</span>
          <span className="card-cta">
            {isActive ? 'Selected — view options' : 'Select service'}
          </span>
        </span>
      </button>

      {isActive && (
        <div className="card-options">
          <p className="card-options-title">{service.title} options</p>
          <ul>
            {service.options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className={`card-option${selectedOption === option ? ' is-selected' : ''}`}
                  onClick={() => onSelectOption(service.id, option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <a className="btn btn-dark card-enquire" href="#contact">
            Enquire about {service.title}
          </a>
        </div>
      )}
    </article>
  )
}
