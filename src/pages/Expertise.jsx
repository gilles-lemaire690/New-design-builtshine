import { Link } from 'react-router-dom'
import { EXPERTISES } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import PageHero from '../components/PageHero.jsx'
import './Expertise.css'

const COMMITMENTS = [
  {
    title: 'Diagnostic avant promesse',
    text: 'Aucune solution technique n’est proposée sans une lecture réelle du terrain et de ses contraintes.',
  },
  {
    title: 'Dossiers défendables',
    text: 'Chaque étude est documentée pour être présentée sans détour devant un comité ou un bailleur.',
  },
  {
    title: 'Suivi jusqu’à réception',
    text: 'Notre engagement ne s’arrête pas à la conception : nous accompagnons l’exécution jusqu’à la livraison.',
  },
]

function ExpertiseIcon({ type }) {
  const paths = {
    water: (
      <>
        <path d="M12 3s-6 6.2-6 10.1a6 6 0 0 0 12 0C18 9.2 12 3 12 3Z" />
        <path d="M9.2 14.2c.8 1.3 1.8 1.9 3.1 1.9" />
      </>
    ),
    energy: <path d="M13 2 5 13h6l-1 9 9-13h-6l1-7Z" />,
    structure: (
      <>
        <path d="M4 20h16" />
        <path d="M6 20V7l6-3 6 3v13" />
        <path d="M9 20v-5h6v5" />
        <path d="M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[type]}
    </svg>
  )
}

export default function Expertise() {
  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  return (
    <>
      <PageHero
        eyebrow="Nos domaines"
        title="Trois pôles d’ingénierie, une seule méthode d’étude."
        description="Chaque mission part d’un diagnostic terrain rigoureux avant toute proposition technique."
        image="/hero/site-3.jpg"
        number="02"
      />

      <nav className="expertise-quicknav" aria-label="Accès rapide aux pôles d’expertise">
        <div className="expertise-quicknav__inner">
          {EXPERTISES.map((e) => (
            <a href={`#${e.id}`} className="quicknav-card" key={e.id} data-reveal="up">
              <span className="quicknav-card__number">{e.number}</span>
              <span className="quicknav-card__icon">
                <ExpertiseIcon type={e.icon} />
              </span>
              <span className="quicknav-card__title">{e.title}</span>
            </a>
          ))}
        </div>
      </nav>

      <section className="expertise-list" aria-label="Détail des pôles d’expertise">
        {EXPERTISES.map((e, i) => (
          <article className={`expertise-row ${i % 2 === 1 ? 'is-reverse' : ''}`} id={e.id} key={e.id}>
            <span className="expertise-row__bignumber" aria-hidden="true">{e.number}</span>

            <div className="expertise-row__inner">
              <div className="expertise-row__visual" data-reveal="image">
                <img src={e.image} alt="" loading="lazy" aria-hidden="true" />
                <div className="expertise-row__visual-overlay" />
                <span className="expertise-row__visual-icon">
                  <ExpertiseIcon type={e.icon} />
                </span>
              </div>

              <div className="expertise-row__content" data-reveal="up">
                <span className="expertise-row__code">{e.code}</span>
                <h2>{e.title}</h2>
                <p>{e.description}</p>

                <ul className="expertise-row__services">
                  {e.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <div className="expertise-row__badges">
                  {e.advantages.map((a) => (
                    <span className="badge-pill" key={a}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="expertise-approach" aria-labelledby="approach-title">
        <div className="expertise-approach__inner">
          <div className="expertise-approach__intro" data-reveal="up">
            <span className="eyebrow-line eyebrow-line--light">Approche transversale</span>
            <h2 id="approach-title">Une méthode commune aux trois pôles, quelle que soit l’échelle.</h2>
          </div>
          <div className="expertise-approach__grid">
            {COMMITMENTS.map((c, index) => (
              <article className="commitment-card" key={c.title} data-reveal="up">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-cta" aria-labelledby="expertise-cta-title">
        <div className="expertise-cta__content" data-reveal="up">
          <span className="eyebrow-line">Un besoin technique précis ?</span>
          <h2 id="expertise-cta-title">Discutons du pôle qui correspond à votre projet.</h2>
          <p>
            Décrivez-nous votre contexte : nous vous orientons vers l’expertise et le format de
            mission adaptés.
          </p>
          <Link to="/contact" className="premium-button premium-button--dark">
            Demander une consultation
          </Link>
        </div>
      </section>
    </>
  )
}
