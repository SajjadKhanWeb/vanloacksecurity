import { useState } from 'react'
import { serviceGroups, serviceChildren } from '../data/site.js'
import { ArrowRight, MenuIcon } from './MenuIcons.jsx'

export default function ServicesMegaMenu({ onClose, onNavigate }) {
  const [groupId, setGroupId] = useState(null)
  const [itemName, setItemName] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const group = serviceGroups.find((entry) => entry.id === groupId)
  const children = itemName ? serviceChildren[itemName] ?? null : null

  const reset = () => {
    setGroupId(null)
    setItemName(null)
    setSelectedOption(null)
  }

  return (
    <div className="mega-panel mega-services" role="menu" aria-label="Our services">
      {groupId && (
        <button
          type="button"
          className="mega-back"
          onClick={() => {
            if (itemName) {
              setItemName(null)
              setSelectedOption(null)
            } else {
              reset()
            }
          }}
        >
          <ArrowRight className="is-back" /> {itemName ? `Back to ${group.title}` : 'Back to all services'}
        </button>
      )}

      {!groupId && (
        <>
          <div className="mega-cards mega-cards-groups">
            {serviceGroups.map((entry) => (
              <button key={entry.id} type="button" className="mega-group" onClick={() => setGroupId(entry.id)}>
                <span className="mega-group-icon">
                  <MenuIcon name={entry.id} />
                </span>
                <span className="mega-group-title">{entry.title}</span>
                <span className="mega-group-summary">{entry.summary}</span>
                <span className="mega-group-count">{entry.items.length} services</span>
                <span className="mega-group-arrow">
                  <ArrowRight />
                </span>
              </button>
            ))}
          </div>
          <div className="mega-footer">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                onClose()
                onNavigate('services')
              }}
            >
              View All Services
            </button>
          </div>
        </>
      )}

      {groupId && !itemName && (
        <div className="mega-cols">
          <section className="mega-col">
            <h3 className="mega-col-title">{group.title}</h3>
            <div className="mega-cards">
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="mega-card"
                  onClick={() => {
                    setItemName(item)
                    setSelectedOption(null)
                  }}
                >
                  {item}
                  <ArrowRight />
                </button>
              ))}
            </div>
          </section>
          <section className="mega-col">
            <h3 className="mega-col-title">Included as standard</h3>
            <ul className="mega-list mega-list-plain">
              <li>Free on-site consultation and written quote</li>
              <li>Professional mobile installation</li>
              <li>Thatcham-approved components and aftercare</li>
            </ul>
            <button
              type="button"
              className="btn btn-dark mega-footer-btn"
              onClick={() => {
                onClose()
                onNavigate('contact')
              }}
            >
              Book a consultation
            </button>
          </section>
        </div>
      )}

      {groupId && itemName && (
        <div className="mega-cols">
          <section className="mega-col">
            <h3 className="mega-col-title">{itemName}</h3>
            {children ? (
              <div className="mega-cards">
                {children.map((child) => (
                  <button
                    key={child}
                    type="button"
                    className={`mega-card${selectedOption === child ? ' is-selected' : ''}`}
                    onClick={() => setSelectedOption((current) => (current === child ? null : child))}
                  >
                    {child}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mega-lead">Choose this option to add it to your enquiry.</p>
            )}
            <div className="mega-actions">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  onClose()
                  onNavigate('contact')
                }}
              >
                Enquire about {itemName}
              </button>
            </div>
          </section>
          <section className="mega-col">
            <h3 className="mega-col-title">Your selection</h3>
            <div className="mega-summary">
              <p className="mega-summary-title">{itemName}</p>
              <p className="mega-summary-text">
                {selectedOption ? selectedOption : 'Tap an option to build your security package.'}
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
