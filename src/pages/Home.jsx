import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { STATS, EXPERTISES, PROJECTS } from '../data/company.js'
import './Home.css'

const HERO_SLIDES = [
  { src: '/hero/site-1.jpg', caption: 'CONCEPTION — MODÉLISATION 3D' },
  { src: '/hero/site-2.jpg', caption: 'ÉTUDES DE STRUCTURE — COUPE BÂTIMENT' },
  { src: '/hero/site-3.jpg', caption: 'EXÉCUTION — GROS ŒUVRE' },
  { src: '/hero/site-4.jpg', caption: 'SUIVI DE CHANTIER — ÉQUIPE TERRAIN' },
]

const HERO_PERSON_IMAGE = '/hero/ingenieur.png'

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 2)
  const [slide, setSlide] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((i) => (i + 1) % HERO_SLIDES.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setInView(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <section className="hero grid-bg">
        <div className="hero-bg-slider">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.src}
              className={`hero-bg-img ${i === slide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.src})` }}
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-inner">
          <div className={`hero-text ${inView ? 'in-view' : ''}`}>
            <h1>ND Builtshine —<br /><span className="accent">Incubateur</span> de solutions techniques</h1>
            <p className="lead">
              Bureau d'études en ingénierie eau, énergie et infrastructures, au service des projets
              qui construisent le Cameroun.
            </p>
            <div className="hero-cta">
              <Link to="/expertise" className="btn">Découvrir nos expertises</Link>
              <Link to="/contact" className="btn-outline">Demander un devis</Link>
            </div>
          </div>
          <div className={`hero-visual ${inView ? 'in-view' : ''}`}>
            <img
              src={HERO_PERSON_IMAGE}
              alt="Ingénieure ND Builtshine sur chantier"
              className="hero-person-img"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-row">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="n">{s.value}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Nos domaines</span>
            <h2>Trois pôles d'ingénierie, une seule méthode.</h2>
          </div>
          <div className="expertise-grid">
            {EXPERTISES.map((e) => (
              <div className="card exp-card" key={e.id}>
                <span className="n">{e.code}</span>
                <h3>{e.title}</h3>
                <p>{e.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-teaser">
        <div className="wrap" style={{ padding: '64px 40px' }}>
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Références</span>
              <h2>Projets en cours et livrés</h2>
            </div>
            <Link to="/portfolio" className="btn-outline">Voir tout le portfolio</Link>
          </div>
          <div className="proj-list">
            {featuredProjects.map((p, i) => (
              <div className="proj-item" key={p.id}>
                <span className="label">PRJ—{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{p.title}</h4>
                  <span className="loc">{p.location}</span>
                </div>
                <span className="tag">{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Un projet technique à étudier ?</h2>
        <p>Décrivez-nous votre besoin, notre équipe revient vers vous rapidement.</p>
        <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>
          Écrire à ND Builtshine
        </Link>
      </section>
    </>
  )
}