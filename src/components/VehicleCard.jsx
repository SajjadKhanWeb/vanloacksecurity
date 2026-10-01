export default function VehicleCard({ vehicle, isActive, onSelect }) {
  return (
    <article className={`vehicle-card card-3d${isActive ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="card-select"
        aria-pressed={isActive}
        onClick={() => onSelect(vehicle.name)}
      >
        <span className="card-media">
          <img src={vehicle.image} alt={`${vehicle.name} van`} width="420" height="240" loading="lazy" />
        </span>
        <span className="card-body">
          <span className="card-title-row">
            <h3>{vehicle.name}</h3>
            <span className="card-badge" aria-hidden="true" />
          </span>
          <span className="card-text">{vehicle.solution}</span>
          <span className="card-cta">{isActive ? 'Van selected' : 'Select this van'}</span>
        </span>
      </button>
      {isActive && (
        <div className="card-options">
          <a className="btn btn-dark card-enquire" href="#contact">
            Get a quote for the {vehicle.name}
          </a>
        </div>
      )}
    </article>
  )
}
