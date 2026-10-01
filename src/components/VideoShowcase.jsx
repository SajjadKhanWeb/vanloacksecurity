import { useState } from 'react'
import { images } from '../data/site.js'

export default function VideoShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <section className="section video-section" aria-labelledby="video-heading">
      <div className="container">
        <div className="video-shell">
          <button type="button" className="video-poster" onClick={() => setOpen(true)}>
            <img src={images.videoPoster} alt="Technician working on a commercial van" width="1600" height="780" loading="lazy" />
            <span className="video-overlay">
              <span className="play-btn" aria-hidden="true">
                ▶
              </span>
              <span>
                <span className="eyebrow" id="video-heading">
                  Installation showcase
                </span>
                <strong>Professional van security, fitted on your terms</strong>
                <em>Replace this placeholder with your installation film</em>
              </span>
            </span>
          </button>
          {open && (
            <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
              <div className="video-modal-card">
                <h3 id="video-modal-title">Installation film ready to swap in</h3>
                <p>
                  Drop your own MP4 or hosted video into this section. Autoplay with sound is disabled by design so the
                  site stays fast and professional.
                </p>
                <button className="btn btn-primary" type="button" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
