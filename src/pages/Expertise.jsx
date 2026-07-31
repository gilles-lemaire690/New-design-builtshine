import { Link } from 'react-router-dom'
import { EXPERTISES } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import './Expertise.css'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Analyse du contexte',
    description: 'Lecture approfondie des contraintes du terrain, des données géographiques et des exigences environnementales.',
  },
  {
    number: '02',
    title: 'Diagnostic technique',
    description: 'Inspections in situ, auscultation des structures et évaluation précise des risques.',
  },
  {
    number: '03',
    title: 'Étude et conception',
    description: 'Dimensionnement, modélisation avancée et formulation de solutions durables et optimisées.',
  },
  {
    number: '04',
    title: 'Suivi d’exécution',
    description: 'Contrôle qualité rigoureux et accompagnement permanent sur le terrain.',
  },
  {
    number: '05',
    title: 'Livraison',
    description: 'Validation de la conformité des ouvrages et remise des dossiers d’exécution complets.',
  },
]

const SECTORS = [
  { id: '01', title: 'Hydraulique', items: ['Eau potable', 'Assainissement'] },
  { id: '02', title: 'Génie civil', items: ['Routes', 'Ponts'] },
  { id: '03', title: 'Énergie', items: ['Réseaux & Électrification', 'Infrastructures énergétiques'] },
  { id: '04', title: 'Transport', items: ['Infrastructures de mobilité', 'Axes routiers'] },
  { id: '05', title: 'Ouvrages publics', items: ['Bâtiments institutionnels', 'Équipements publics'] },
  { id: '06', title: 'Urbanisme', items: ['Aménagement urbain', 'Infrastructures rurales'] },
]

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

const WHY_US_CARDS = [
  { title: 'Expertise multidisciplinaire', text: 'Une synergie parfaite entre génie civil, hydraulique et énergie pour couvrir l’intégralité des besoins.' },
  { title: 'Standards internationaux', text: 'Des études et des calculs alignés sur les normes les plus exigeantes des bailleurs de fonds mondiaux.' },
  { title: 'Solutions adaptées au contexte africain', text: 'Une ingénierie ancrée dans les réalités climatiques, géotechniques et socio-économiques locales.' },
  { title: 'Suivi de projet', text: 'Une présence constante du diagnostic initial jusqu’à la livraison finale sur le terrain.' },
  { title: 'Innovation', text: 'Intégration de méthodologies durables et de technologies modernes de modélisation.' },
  { title: 'Exécution rigoureuse', text: 'Un contrôle qualité intransigeant pour garantir la viabilité et la longévité des ouvrages.' },
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
      {paths[type] || paths.structure}
    </svg>
  )
}

export default function Expertise() {
  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  return (
    <main className="expertise-page">
      {/* 1. NOUVELLE INTRODUCTION ÉDITORIALE (Pas de PageHero) */}
      <section className="exp-intro" aria-label="Introduction aux expertises">
        <div className="exp-intro__inner">
          <div className="exp-intro__col-left" data-reveal="up">
            <span className="exp-eyebrow">NOS EXPERTISES</span>
            <h1 className="exp-intro__title">
              Transformer les défis techniques <br className="desktop-only" />
              en solutions durables.
            </h1>
            <p className="exp-intro__text">
              Chez ND Builtshine, chaque mission commence par une analyse rigoureuse, une compréhension du terrain et une méthodologie éprouvée. Nous accompagnons les acteurs publics, privés et institutionnels dans leurs projets d'infrastructures.
            </p>
            <a href="#quicknav" className="exp-btn-cta">
              Découvrir nos domaines
            </a>
          </div>

          <div className="exp-intro__col-right" data-reveal="image">
            <div className="exp-intro__image-wrapper">
              <img
                src="/hero/site-3.jpg"
                alt="Ingénieurs ND Builtshine réalisant une étude technique de terrain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION PROCESSUS : "Pourquoi notre méthode fonctionne." */}
      <section className="exp-process" aria-labelledby="process-title">
        <div className="exp-process__inner">
          <div className="exp-process__header" data-reveal="up">
            <span className="exp-eyebrow">MÉTHODOLOGIE</span>
            <h2 id="process-title" className="exp-section-title">Pourquoi notre méthode fonctionne.</h2>
          </div>

          <div className="exp-timeline">
            {PROCESS_STEPS.map((step, idx) => (
              <div className="exp-timeline__step" key={step.number} data-reveal="up">
                <div className="exp-timeline__node">
                  <span className="exp-timeline__number">{step.number}</span>
                  {idx < PROCESS_STEPS.length - 1 && <div className="exp-timeline__line" aria-hidden="true" />}
                </div>
                <div className="exp-timeline__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NAVIGATION DES EXPERTISES (REDESIGNÉE) */}
      <nav id="quicknav" className="expertise-quicknav" aria-label="Accès rapide aux pôles d’expertise">
        <div className="expertise-quicknav__inner">
          {EXPERTISES.map((e) => (
            <a href={`#${e.id}`} className="quicknav-card" key={e.id} data-reveal="up">
              <div className="quicknav-card__top">
                <span className="quicknav-card__number">{e.number}</span>
                <span className="quicknav-card__icon">
                  <ExpertiseIcon type={e.icon} />
                </span>
              </div>
              <div className="quicknav-card__bottom">
                <h3 className="quicknav-card__title">{e.title}</h3>
                <span className="quicknav-card__arrow" aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* 4. PRÉSENTATION DES EXPERTISES (STYLE ÉTUDE DE CAS) */}
      <section className="expertise-list" aria-label="Détail des pôles d’expertise">
        {EXPERTISES.map((e, i) => (
          <article className={`expertise-row ${i % 2 === 1 ? 'is-reverse' : ''}`} id={e.id} key={e.id}>
            <span className="expertise-row__bignumber" aria-hidden="true">{e.number}</span>

            <div className="expertise-row__inner">
              <div className="expertise-row__visual" data-reveal="image">
                <img src={e.image} alt={e.title} loading="lazy" />
                <div className="expertise-row__visual-overlay" />
                <span className="expertise-row__visual-icon">
                  <ExpertiseIcon type={e.icon} />
                </span>
              </div>

              <div className="expertise-row__content" data-reveal="up">
                <span className="expertise-row__code">{e.code}</span>
                <h2>{e.title}</h2>
                <p className="expertise-row__desc">{e.description}</p>

                <div className="expertise-row__services-wrapper">
                  <h4>Services clés</h4>
                  <ul className="expertise-row__services">
                    {e.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="expertise-row__badges">
                  {e.advantages.map((a) => (
                    <span className="badge-pill" key={a}>{a}</span>
                  ))}
                </div>

                <div className="expertise-row__cta">
                  <Link to={`/contact?pole=${e.id}`} className="exp-discrete-link">
                    Échanger avec nos experts du pôle {e.title.toLowerCase()} <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 5. NOUVELLE SECTION : NOS SECTEURS D'INTERVENTION */}
      <section className="exp-sectors" aria-labelledby="sectors-title">
        <div className="exp-sectors__inner">
          <div className="exp-sectors__header" data-reveal="up">
            <span className="exp-eyebrow">CHAMPS D'ACTION</span>
            <h2 id="sectors-title" className="exp-section-title">Nos secteurs d'intervention.</h2>
          </div>

          <div className="exp-sectors__grid">
            {SECTORS.map((sec) => (
              <div className="sector-card" key={sec.id} data-reveal="up">
                <span className="sector-card__id">{sec.id}</span>
                <h3>{sec.title}</h3>
                <ul className="sector-card__tags">
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPROCHE TRANSVERSALE (REDESIGNÉE) */}
      <section className="expertise-approach" aria-labelledby="approach-title">
        <div className="expertise-approach__inner">
          <div className="expertise-approach__intro" data-reveal="up">
            <span className="exp-eyebrow exp-eyebrow--light">APPROCHE TRANSVERSALE</span>
            <h2 id="approach-title">Une méthode commune aux trois pôles, quelle que soit l’échelle.</h2>
          </div>
          <div className="expertise-approach__grid">
            {COMMITMENTS.map((c, index) => (
              <article className="commitment-card" key={c.title} data-reveal="up">
                <span className="commitment-card__num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NOUVELLE SECTION : POURQUOI CHOISIR ND BUILTSHINE ? */}
      <section className="exp-why" aria-labelledby="why-title">
        <div className="exp-why__inner">
          <div className="exp-why__header" data-reveal="up">
            <span className="exp-eyebrow">ENGAGEMENT DE QUALITÉ</span>
            <h2 id="why-title" className="exp-section-title">Pourquoi choisir ND Builtshine ?</h2>
          </div>

          <div className="exp-why__grid">
            {WHY_US_CARDS.map((card) => (
              <div className="why-card" key={card.title} data-reveal="up">
                <div className="why-card__icon">✔</div>
                <div className="why-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="expertise-cta" aria-labelledby="expertise-cta-title">
        <div className="expertise-cta__glow" aria-hidden="true" />
        <div className="expertise-cta__content" data-reveal="up">
          <span className="exp-eyebrow exp-eyebrow--light">UN BESOIN TECHNIQUE PRÉCIS ?</span>
          <h2 id="expertise-cta-title">Discutons du pôle qui correspond à votre projet.</h2>
          <p>
            Décrivez-nous votre contexte : nous vous orientons vers l’expertise et le format de mission adaptés.
          </p>
          <Link to="/contact" className="premium-button premium-button--dark">
            Demander une consultation
          </Link>
        </div>
      </section>
    </main>
  )
}