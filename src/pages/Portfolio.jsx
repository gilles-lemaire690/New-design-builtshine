import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import PageHero from '../components/PageHero.jsx'
import './Portfolio.css'

const FILTERS = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'eau', label: 'Eau' },
  { id: 'energie', label: 'Énergie' },
  { id: 'infra', label: 'Infrastructures' },
]

const FEATURED_ID = 'ligne-400kv'

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  const featured = useMemo(() => PROJECTS.find((p) => p.id === FEATURED_ID), [])

  const visibleProjects = useMemo(
    () =>
      (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)).filter(
        (p) => p.id !== FEATURED_ID,
      ),
    [active],
  )

  return (
    <>
      <PageHero
        eyebrow="Portfolio technique"
        title="Des projets qui structurent le territoire"
        description="Sélection de missions menées seules ou en groupement — à compléter avec vos réalisations et clients autorisés à citer."
        image="/hero/site-2.jpg"
        number="03"
      />

      {featured && (
        <section className="portfolio-featured section-panel" aria-labelledby="featured-title">
          <div className="portfolio-featured__layout">
            <figure className="portfolio-featured__image" data-reveal="image">
              <img src={featured.image} alt={featured.title} loading="eager" />
              <span className="portfolio-featured__badge">{featured.badge}</span>
            </figure>

            <div className="portfolio-featured__body" data-reveal="up">
              <span className="eyebrow-line">Projet en vedette</span>
              <h2 id="featured-title">{featured.title}</h2>
              <p>{featured.impact}</p>

              <div className="portfolio-featured__meta">
                <div>
                  <span className="label">Localisation</span>
                  <span className="val">{featured.location}</span>
                </div>
                <div>
                  <span className="label">Rôle ND Builtshine</span>
                  <span className="val">{featured.role}</span>
                </div>
                {featured.client && (
                  <div>
                    <span className="label">Client</span>
                    <span className="val">{featured.client}</span>
                  </div>
                )}
                <div>
                  <span className="label">Statut</span>
                  <span className="val">{featured.status}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="portfolio-grid-section section-panel" aria-labelledby="portfolio-grid-title">
        <div className="portfolio-toolbar" data-reveal="up">
          <div>
            <span className="eyebrow-line">Catalogue</span>
            <h2 id="portfolio-grid-title">Explorer les missions par domaine</h2>
          </div>

          <div className="portfolio-toolbar__controls">
            <div className="filters">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`filter-btn ${active === f.id ? 'is-active' : ''}`}
                  onClick={() => setActive(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <span className="portfolio-count">
              {String(visibleProjects.length).padStart(2, '0')} projet{visibleProjects.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        <div className="portfolio-grid">
          {visibleProjects.map((p) => (
            <article className="p-card" key={p.id} data-reveal="image">
              <div className="p-card__media">
                <img src={p.image} alt="" loading="lazy" aria-hidden="true" />
                <div className="p-card__overlay" />
                <span className="p-badge">{p.badge}</span>
              </div>
              <div className="p-card__content">
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
                <p className="p-impact">
                  <b>Impact :</b> {p.impact}
                </p>
              </div>
            </article>
          ))}

          <article className="p-card p-card--cta" data-reveal="up">
            <span className="p-card--cta__icon" aria-hidden="true">+</span>
            <h3>Un projet à valoriser ?</h3>
            <p>
              Envoyez-nous les détails (nom, lieu, rôle, résultat) et nous l’intégrons à votre
              portfolio.
            </p>
            <Link to="/contact" className="premium-button premium-button--dark">
              Ajouter un projet
            </Link>
          </article>
        </div>
      </section>

      <section className="portfolio-cta" aria-labelledby="portfolio-cta-title">
        <div className="portfolio-cta__content" data-reveal="up">
          <span className="eyebrow-line eyebrow-line--light">Parlons de votre projet</span>
          <h2 id="portfolio-cta-title">Un projet à valoriser ou à lancer ?</h2>
          <p>
            Que vous ayez une réalisation à documenter ou une nouvelle mission à cadrer, notre
            équipe vous répond avec une première lecture technique claire.
          </p>
          <Link to="/contact" className="premium-button premium-button--orange">
            Écrire à ND Builtshine
          </Link>
        </div>
      </section>
    </>
  )
}
