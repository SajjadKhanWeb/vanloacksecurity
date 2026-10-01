import { useState } from 'react'
import { vanModels, popularVanIds, manufacturers, manufacturerOptions } from '../data/site.js'
import { ArrowRight } from './MenuIcons.jsx'

const popularVans = popularVanIds.map((id) => vanModels.find((van) => van.id === id)).filter(Boolean)

const monogram = (name) =>
  name
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

export default function VanMegaMenu({ onClose, onNavigate }) {
  const [view, setView] = useState('root')
  const [selection, setSelection] = useState(null)
  const [option, setOption] = useState(null)

  const selectVan = (van) => {
    setSelection({ type: 'van', id: van.id, name: van.name, options: van.options })
    setOption(null)
    if (view !== 'root') setView('root')
  }

  const selectMaker = (brand) => {
    setSelection({ type: 'maker', id: brand, name: brand, options: manufacturerOptions[brand] ?? [] })
    setOption(null)
  }

  const clearSelection = () => {
    setSelection(null)
    setOption(null)
  }

  return (
    <div className="mega-panel mega-vans" role="menu" aria-label="Choose your van">
      {view === 'all' ? (
        <div className="mega-all">
          <div className="mega-all-head">
            <h3 className="mega-head-title">All Manufacturers</h3>
            <button type="button" className="mega-back" onClick={() => setView('root')}>
              <ArrowRight className="is-back" /> Back
            </button>
          </div>
          <div className="maker-grid maker-grid-wide">
            {manufacturers.map((brand) => (
              <button
                key={brand}
                type="button"
                className={`maker-card${selection?.id === brand ? ' is-selected' : ''}`}
                onClick={() => selectMaker(brand)}
              >
                <span className="maker-glow" aria-hidden="true" />
                  <span className="maker-logo">{monogram(brand)}</span>
                  <span className="maker-name">{brand}</span>
                  <span className="card-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="mega-cols">
            <section className="mega-col">
              <h3 className="mega-head-title">Popular Vans</h3>
              <div className="van-grid">
                {popularVans.map((van) => (
                  <button
                    key={van.id}
                    type="button"
                    className={`van-card${selection?.id === van.id ? ' is-selected' : ''}`}
                    onClick={() => selectVan(van)}
                  >
                    <span className="van-card-media">
                      <img src={van.image} alt="" loading="lazy" />
                      <span className="van-card-sheen" />
                    </span>
                    <span className="van-card-body">
                      <span className="van-card-brand">{van.brand}</span>
                      <span className="van-card-name">{van.name}</span>
                    </span>
                    <span className="card-arrow" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mega-col">
              <h3 className="mega-head-title">Manufacturers</h3>
              <div className="maker-grid">
                {manufacturers.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    className={`maker-card${selection?.id === brand ? ' is-selected' : ''}`}
                    onClick={() => selectMaker(brand)}
                  >
                    <span className="maker-glow" aria-hidden="true" />
                    <span className="maker-logo">{monogram(brand)}</span>
                    <span className="maker-name">{brand}</span>
                    <span className="card-arrow" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </button>
                ))}
              </div>
              <button type="button" className="btn btn-dark mega-all-btn" onClick={() => setView('all')}>
                All Manufacturers <ArrowRight />
              </button>
            </section>
          </div>

          {selection && (
            <div className="sub-panel" role="group" aria-label={`${selection.name} options`}>
              <div className="sub-panel-head">
                <div>
                  <p className="sub-kicker">{selection.type === 'van' ? 'Van security options' : 'Manufacturer options'}</p>
                  <h4 className="sub-title">{selection.name}</h4>
                </div>
                <button type="button" className="sub-close" onClick={clearSelection} aria-label="Close options">
                  ×
                </button>
              </div>

              <div className="sub-grid">
                {selection.options.map((entry) => (
                  <button
                    key={entry}
                    type="button"
                    className={`sub-card${option === entry ? ' is-selected' : ''}`}
                    onClick={() => setOption((current) => (current === entry ? null : entry))}
                  >
                    <span className="sub-card-name">{entry}</span>
                    <span className="card-arrow" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </button>
                ))}
              </div>

              <div className="sub-footer">
                {option ? (
                  <p className="sub-selection">
                    <span>Selected</span> {selection.name} — {option}
                  </p>
                ) : (
                  <p className="sub-selection sub-selection-empty">Select an option to continue.</p>
                )}
                <div className="sub-actions">
                  {option && (
                    <button
                      type="button"
                      className="btn btn-ghost-dark"
                      onClick={() => {
                        clearSelection()
                        onNavigate('vehicles')
                      }}
                    >
                      View matching vans
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      const target = option ? 'contact' : 'vehicles'
                      onClose()
                      onNavigate(target)
                    }}
                  >
                    {option ? 'Get a Quote' : 'View all vans'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
