import { images } from '../data/site.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container split split-reverse">
        <div className="split-copy">
          <p className="eyebrow">About VanLock</p>
          <h2>Specialists in van security, not a general locksmith add-on</h2>
          <p>
            VanLock Security exists for one job: protecting commercial vans and the businesses that rely on them. We
            specify proven hardware, install it properly, and stand behind the work.
          </p>
          <p>
            From Ilford and greater London to nationwide mobile fitting, our technicians work around your day — depot,
            driveway or site — with a finish that looks factory, not aftermarket.
          </p>
          <div className="stat-row">
            <div>
              <strong>UK-wide</strong>
              <span>Mobile installation</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support line</span>
            </div>
            <div>
              <strong>Fleet</strong>
              <span>&amp; single-van ready</span>
            </div>
          </div>
        </div>
        <div className="split-media">
          <img
            src={images.about}
            alt="Technician preparing professional vehicle security hardware"
            width="720"
            height="480"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
