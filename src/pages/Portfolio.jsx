import { useMemo, useState } from 'react'
import { PROJECTS } from '../data/company.js'
import './Portfolio.css'

const FILTERS = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'eau', label: 'Eau' },
  { id: 'energie', label: 'Énergie' },
  { id: 'infra', label: 'Infrastructures' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const visibleProjects = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <span className="eyebrow">Portfolio technique</span>
          <h1>Des projets qui structurent le territoire</h1>
          <p>
            Sélection de missions menées seules ou en groupement — à compléter avec vos réalisations et
            clients autorisés à citer.
          </p>

          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${active === f.id ? 'active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="portfolio-grid">
            {visibleProjects.map((p) => (
              <div className="card p-card" key={p.id}>
                <div className="p-photo">
                  <span className="p-badge">{p.badge}</span>
                </div>
                <div className="p-body">
                  <h3>{p.title}</h3>
                  <div className="p-meta">
                    <div>
                      <span className="label">Localisation</span>
                      <span className="val">{p.location}</span>
                    </div>
                    <div>
                      <span className="label">{p.client ? 'Rôle' : 'Rôle ND Builtshine'}</span>
                      <span className="val">
                        {p.role}
                        {p.client ? ` — ${p.client}` : ''}
                      </span>
                    </div>
                  </div>
                  <div className="p-impact">
                    <b>Impact :</b> {p.impact}
                  </div>
                </div>
              </div>
            ))}

            <div className="card p-card p-card--empty">
              Ajoutez vos prochains projets ici — envoyez-moi les détails (nom, lieu, rôle, résultat) et
              je les intègre dans <code>src/data/company.js</code>.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
