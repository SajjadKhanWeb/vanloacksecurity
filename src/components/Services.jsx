import { useState } from 'react'
import { services } from '../data/site.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  const [activeId, setActiveId] = useState(null)
  const [optionByService, setOptionByService] = useState({})

  const selectService = (id) => {
    setActiveId((current) => (current === id ? null : id))
  }

  const selectOption = (id, option) => {
    setOptionByService((current) => ({
      ...current,
      [id]: current[id] === option ? undefined : option,
    }))
  }

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our services</p>
          <h2>Van lock systems built for real-world theft</h2>
          <p>
            Smart, reliable security specified for commercial and private vans — from a single vehicle to a full fleet.
            Select a service to see the options available.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeId === service.id}
              selectedOption={optionByService[service.id]}
              onSelect={selectService}
              onSelectOption={selectOption}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
