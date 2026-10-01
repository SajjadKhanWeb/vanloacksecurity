import { useState } from 'react'
import { vehicles } from '../data/site.js'
import VehicleCard from './VehicleCard.jsx'

export default function VehicleModels() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section section-muted" id="vehicles">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Choose your van</p>
          <h2>Security solutions for popular commercial vehicles</h2>
          <p>Hardware is specified to each body style — not a generic kit forced onto every door. Select your van to continue.</p>
        </div>
        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.name}
              vehicle={vehicle}
              isActive={selected === vehicle.name}
              onSelect={(name) => setSelected((current) => (current === name ? null : name))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
