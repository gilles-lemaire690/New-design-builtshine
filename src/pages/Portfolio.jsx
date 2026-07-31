import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import PageHero from '../components/PageHero.jsx'
import './Portfolio.css'

const FILTERS = [
  { id: 'all', label: 'Toutes les réalisations' },
  { id: 'eau', label: 'Eau & Assainissement' },
  { id: 'energie', label: 'Énergie & Grids' },
  { id: 'infra', label: 'Infrastructures & BTP' },
]

const FEATURED_ID = 'ligne-400kv'

const STATS_IMPACT = [
  { value: '120+', label: 'Ouvrages & Projets Livrés', detail: 'Conception, audits et supervision' },
  { value: '450 km', label: 'Réseaux & Lignes HT', detail: 'Infrastructures énergétiques majeures' },
  { value: '180 MW', label: 'Capacité Énergétique', detail: 'Projets hydroélectriques et solaires' },
  { value: '15+', label: 'Régions & Territoires', detail: 'Impact territorial durable' },
]

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'Études & Cadrage Stratégique',
    desc: 'Analyse d’impact environnemental, études de faisabilité technique et modélisation financière pré-projet.',
  },
  {
    num: '02',
    title: 'Ingénierie & Modélisation BIM',
    desc: 'Conception détaillée aux normes internationales (FIDIC, ISO), jumeaux numériques et optimisation des coûts.',
  },
  {
    num: '03',
    title: 'Supervision & Pilotage de Chantier',
    desc: 'Contrôle qualité rigoureux, coordination multi-corps d’état, gestion du risque et sécurité HSE.',
  },
  {
    num: '04',
    title: 'Mise en Service & Livrables',
    desc: 'Recette technique, transferts de compétences aux exploitants et suivi de l’impact environnemental.',
  },
]

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Ingénierie de Précision & BIM',
    text: 'Modélisation numérique avancée et anticipation des contraintes structurelles avant la première pierre.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Normes ISO & Standards FIDIC',
    text: 'Respect strict des exigences contractuelles internationales pour une maîtrise totale des coûts et des délais.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Résilience & Durabilité',
    text: 'Solutions conçues pour faire face aux défis climatiques et assurer une pérennité décennale maximale.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Supervision de Terrain Rapprochée',
    text: 'Une présence permanente de nos experts sur site pour garantir la conformité d’exécution.',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  const featured = useMemo(() => PROJECTS.find((p) => p.id === FEATURED_ID) || PROJECTS[0], [])

  const visibleProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.id !== FEATURED_ID)
      .filter((p) => (active === 'all' ? true : p.category === active))
      .filter((p) => {
        if (!searchTerm.trim()) return true
        const query = searchTerm.toLowerCase()
        return (
          p.title?.toLowerCase().includes(query) ||
          p.location?.toLowerCase().includes(query) ||
          p.role?.toLowerCase().includes(query)
        )
      })
  }, [active, searchTerm])

  return (
    <div className="portfolio-page">
      {/* ===== Hero Principal ===== */}
      <section className="portfolio-hero-wrapper">
        <PageHero
          eyebrow="Cabinet d’Ingénierie & Conseil"
          title="Grandes Réalisations & Ouvrages Majeurs"
          description="Découvrez comment nos expertises en structures, énergie et hydraulique façonnent durablement les infrastructures stratégiques continentales."
          image="/hero/site-2.jpg"
          number="03"
        />

        {/* Banner de métriques sous le Hero */}
        <div className="portfolio-hero-stats">
          <div className="portfolio-hero-stats__inner">
            <div className="stat-card" data-reveal="up">
              <span className="stat-card__number">100%</span>
              <span className="stat-card__label">Conformité FIDIC / ISO</span>
            </div>
            <div className="stat-card-divider" />
            <div className="stat-card" data-reveal="up">
              <span className="stat-card__number">€250M+</span>
              <span className="stat-card__label">CAPEX Ouvrages Supervisés</span>
            </div>
            <div className="stat-card-divider" />
            <div className="stat-card" data-reveal="up">
              <span className="stat-card__number">Zero</span>
              <span className="stat-card__label">Incident Sécurité Majeur</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Projet Phare / Vedette ===== */}
      {featured && (
        <section className="portfolio-flagship section-panel" aria-labelledby="flagship-title">
          <div className="portfolio-flagship__container">
            <div className="portfolio-flagship__header" data-reveal="up">
              <span className="eyebrow-badge">
                <span className="dot-pulse" /> Projet Référence
              </span>
              <h2 id="flagship-title">Ouvrage Stratégique Majeur</h2>
            </div>

            <div className="portfolio-flagship__card" data-reveal="up">
              <div className="portfolio-flagship__image-wrap">
                <img src={featured.image} alt={featured.title} loading="eager" />
                <div className="portfolio-flagship__image-overlay" />
                <span className="flagship-category-badge">{featured.badge || 'Infrastructures'}</span>
                <div className="flagship-tech-grid">
                  <span className="tech-pill">BIM Level 2</span>
                  <span className="tech-pill">Haute Tension</span>
                  <span className="tech-pill">Supervision FIDIC</span>
                </div>
              </div>

              <div className="portfolio-flagship__content">
                <div className="flagship-top">
                  <span className="flagship-code">REF-ENG-2026</span>
                  <h3>{featured.title}</h3>
                  <p className="flagship-description">{featured.impact}</p>
                </div>

                <div className="flagship-grid-metrics">
                  <div className="metric-box">
                    <span className="metric-label">Localisation</span>
                    <span className="metric-value">{featured.location || 'Cameroun'}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Rôle ND Builtshine</span>
                    <span className="metric-value">{featured.role}</span>
                  </div>
                  {featured.client && (
                    <div className="metric-box">
                      <span className="metric-label">Client / Maître d'Ouvrage</span>
                      <span className="metric-value">{featured.client}</span>
                    </div>
                  )}
                  <div className="metric-box">
                    <span className="metric-label">Statut d'Exécution</span>
                    <span className="metric-value highlight">{featured.status || 'Livré / Exploitation'}</span>
                  </div>
                </div>

                <div className="flagship-footer">
                  <div className="flagship-impact-tag">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Impact : Réduction des pertes énergétiques de 35% sur le réseau régional</span>
                  </div>
                  <Link to="/contact" className="premium-button premium-button--dark">
                    Demander une fiche cas client
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Section Notre Impact (Chiffres Clés) ===== */}
      <section className="portfolio-impact-section">
        <div className="portfolio-impact__container">
          <div className="portfolio-impact__header" data-reveal="up">
            <span className="eyebrow-line eyebrow-line--light">Empreinte & Résultats</span>
            <h2>Notre impact en chiffres vérifiables</h2>
            <p>Une présence opérationnelle renforcée par des standards de qualité internationaux.</p>
          </div>

          <div className="portfolio-impact__grid">
            {STATS_IMPACT.map((stat, idx) => (
              <div className="impact-card" key={idx} data-reveal="up">
                <div className="impact-card__number">{stat.value}</div>
                <div className="impact-card__label">{stat.label}</div>
                <div className="impact-card__detail">{stat.detail}</div>
                <div className="impact-card__glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Catalogue & Toolbar Filtrable ===== */}
      <section className="portfolio-catalog-section section-panel" aria-labelledby="catalog-title">
        <div className="portfolio-catalog__container">
          <div className="portfolio-toolbar-wrapper" data-reveal="up">
            <div className="portfolio-toolbar-top">
              <div>
                <span className="eyebrow-line">Catalogue Général</span>
                <h2 id="catalog-title">Explorer nos références par domaine</h2>
              </div>

              <div className="portfolio-search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher par ville, rôle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Rechercher des projets"
                />
                {searchTerm && (
                  <button className="search-clear" onClick={() => setSearchTerm('')}>
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="portfolio-toolbar-filters">
              <div className="filter-capsules">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`filter-capsule ${active === f.id ? 'is-active' : ''}`}
                    onClick={() => setActive(f.id)}
                  >
                    <span>{f.label}</span>
                  </button>
                ))}
              </div>

              <div className="portfolio-counter-pill">
                <span className="counter-num">{String(visibleProjects.length).padStart(2, '0')}</span>
                <span className="counter-label">Projet{visibleProjects.length > 1 ? 's' : ''} filtré{visibleProjects.length > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>

          {/* Grid des Cartes */}
          <div className="portfolio-grid">
            {visibleProjects.map((p) => (
              <article className="p-card-premium" key={p.id} data-reveal="up">
                <div className="p-card-premium__media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="p-card-premium__overlay" />
                  <span className="p-card-badge">{p.badge}</span>
                  <div className="p-card-status-pill">
                    <span className="status-dot" />
                    <span>Conforme FIDIC</span>
                  </div>
                </div>

                <div className="p-card-premium__body">
                  <div className="p-card-header">
                    <span className="p-card-loc">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {p.location}
                    </span>
                    <h3>{p.title}</h3>
                  </div>

                  <div className="p-card-meta-list">
                    <div className="meta-row">
                      <span className="meta-key">Mission :</span>
                      <span className="meta-val">{p.role}</span>
                    </div>
                    {p.client && (
                      <div className="meta-row">
                        <span className="meta-key">Maître d’ouvrage :</span>
                        <span className="meta-val">{p.client}</span>
                      </div>
                    )}
                  </div>

                  <p className="p-card-impact">
                    <strong>Résultat & Impact :</strong> {p.impact}
                  </p>

                  <div className="p-card-footer">
                    <span className="p-card-tag">Ingénierie & Supervision</span>
                    <Link to="/contact" className="p-card-link" aria-label={`En savoir plus sur ${p.title}`}>
                      Détails
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Carte CTA Intégrée */}
            <article className="p-card-cta-deluxe" data-reveal="up">
              <div className="p-card-cta-deluxe__inner">
                <div className="cta-icon-glow">+</div>
                <h3>Un projet d’envergure à cadrer ou intégrer ?</h3>
                <p>
                  Transmettez-nous vos cahiers des charges, études de faisabilité ou besoins d'audits. Nos ingénieurs analysent votre dossier en 48h.
                </p>
                <Link to="/contact" className="premium-button premium-button--orange">
                  Soumettre un dossier
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Timeline de la Méthodologie d'Exécution ===== */}
      <section className="portfolio-timeline-section">
        <div className="portfolio-timeline__container">
          <div className="portfolio-timeline__header" data-reveal="up">
            <span className="eyebrow-line">Rigueur Opérationnelle</span>
            <h2>Cycle de vie & Contrôle de nos missions</h2>
            <p>Une méthodologie éprouvée garantissant le respect scrupuleux du Triptyque Coût-Délai-Qualité.</p>
          </div>

          <div className="portfolio-timeline__grid">
            {TIMELINE_STEPS.map((step, idx) => (
              <div className="timeline-card" key={idx} data-reveal="up">
                <span className="timeline-card__step">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <div className="timeline-card__connector" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pourquoi nos réalisations font la différence ===== */}
      <section className="portfolio-pillars-section section-panel">
        <div className="portfolio-pillars__container">
          <div className="portfolio-pillars__header" data-reveal="up">
            <span className="eyebrow-line">Excellence Technique</span>
            <h2>Pourquoi nos projets font la différence</h2>
            <p>Chaque infrastructure livrée est conçue comme un actif stratégique durable.</p>
          </div>

          <div className="portfolio-pillars__grid">
            {PILLARS.map((p, idx) => (
              <div className="pillar-card" key={idx} data-reveal="up">
                <div className="pillar-card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="pillar-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Final Ultra Premium ===== */}
      <section className="portfolio-cta-deluxe">
        <div className="cta-deluxe__bg-effects">
          <div className="cta-glow-1" />
          <div className="cta-glow-2" />
          <div className="cta-grid-pattern" />
        </div>

        <div className="portfolio-cta-deluxe__container" data-reveal="up">
          <span className="eyebrow-badge eyebrow-badge--light">
            <span className="dot-pulse" /> Démarrer une collaboration
          </span>
          <h2>Prêt à concrétiser vos projets d’infrastructures ?</h2>
          <p>
            Que vous soyez une collectivité, un bailleur de fonds ou un acteur privé, sollicitez notre expertise pour une assistance à maîtrise d'ouvrage ou une mission de maitrise d’œuvre complète.
          </p>

          <div className="cta-deluxe__actions">
            <Link to="/contact" className="premium-button premium-button--orange">
              Échanger avec nos ingénieurs
            </Link>
            <a href="tel:+237000000000" className="premium-button premium-button--outline-light">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Ligne Directe Bureau
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}