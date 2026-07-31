import { Link } from 'react-router-dom'
import { TEAM, PARTNERS, VALUES } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations, useSectionInView, CountUp } from '../hooks/useAnimations.jsx'
import './About.css'

const NUMERIC_STATS = [
  { value: 120, suffix: '+', label: 'missions techniques structurées' },
  { value: 15, suffix: '+', label: 'années de pratique cumulée' },
  { value: 3, suffix: '', label: 'pôles d’expertise intégrés' },
]

const STORY_TIMELINE = [
  {
    year: '2018',
    title: 'Genèse & Constat',
    text: 'Naissance de ND Builtshine à Yaoundé suite au constat d’un déficit récurrent d’études d’exécution rigoureuses et adaptées aux contraintes géotechniques locales.',
  },
  {
    year: '2021',
    title: 'Modèle Incubateur',
    text: 'Formulation d’un modèle hybride associant bureau d’études de précision et incubateur de talents d’ingénierie locale.',
  },
  {
    year: '2024',
    title: 'Expansion Régionale',
    text: 'Structuration de 3 pôles d’expertise majeurs et déploiement de protocoles techniques d’échelle internationale à travers l’Afrique centrale.',
  },
]

function ValueIcon({ id }) {
  const paths = {
    rigueur: (
      <>
        <path d="M9 12.5 11 14.5 15.5 9.5" />
        <path d="M12 3 4 6.5V11c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6.5L12 3Z" />
      </>
    ),
    innovation: (
      <>
        <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
        <circle cx="12" cy="12" r="4.4" />
      </>
    ),
    impact: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </>
    ),
    collaboration: (
      <>
        <circle cx="8.5" cy="9" r="2.6" />
        <circle cx="16" cy="9.5" r="2.2" />
        <path d="M3.5 19c.6-3.2 2.6-5 5-5s4.4 1.8 5 5" />
        <path d="M14.2 14.4c2 .3 3.5 2 4 4.6" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  )
}

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [statsRef, statsInView] = useSectionInView(prefersReducedMotion)

  useRevealAnimations(prefersReducedMotion)

  return (
    <>
      {/* ===== 1. NOTRE IDENTITÉ — Header Éditorial & Distinctif ===== */}
      <section className="about-identity" aria-labelledby="about-identity-title">
        <div className="about-identity__container">
          <div className="about-identity__content" data-reveal="up">
            <div className="about-identity__badge">
              <span className="about-identity__index">01</span>
              <span className="eyebrow-line">Notre identité</span>
            </div>
            
            <h1 id="about-identity-title" className="about-identity__title">
              La précision de l’ingénierie, <br />
              <span className="about-identity__title-highlight">au service d’un monde en construction.</span>
            </h1>

            <p className="about-identity__lead">
              ND Builtshine n’est pas un simple cabinet d’exécution. Nous sommes un incubateur de solutions techniques avancées, conçu pour adapter les standards internationaux d'ingénierie aux réalités structurelles et climatiques de l'Afrique.
            </p>

            <blockquote className="about-identity__quote">
              <p>« Penser l'infrastructure de demain exige d'allier l'exigence des normes mondiales à une compréhension fine du terrain local. »</p>
              <cite>— Direction Technique ND Builtshine</cite>
            </blockquote>
          </div>

          <div className="about-identity__media" data-reveal="image">
            <div className="about-identity__frame">
              <img 
                src="/hero/site-1.jpg" 
                alt="Chantier de construction d'infrastructure de haute précision dirigé par ND Builtshine" 
                className="about-identity__img"
              />
              <div className="about-identity__caption-tag">
                <span>Ingénierie de précision</span>
                <strong>Cameroun &amp; Afrique Centrale</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. NOTRE MÉTHODE — Le Modèle Incubateur ===== */}
      <section className="about-method section-panel" aria-labelledby="method-title">
        <div className="about-method__layout">
          <figure className="about-method__image" data-reveal="image">
            <img src="/home/site-team.jpg" alt="Ingénieurs analysant un plan technique sur site" loading="lazy" />
          </figure>

          <div className="about-method__card" data-reveal="up">
            <span className="about-section-number" aria-hidden="true">02</span>
            <span className="eyebrow-line">Notre méthode</span>
            <h2 id="method-title">Le modèle incubateur</h2>
            <p>
              Notre approche dépasse la simple prestation d’études. Nous identifions les défis
              infrastructurels complexes et développons des solutions techniques sur mesure, en
              cultivant l’apprentissage continu et une rigueur d’exécution constante.
            </p>
            <p>
              Appliquer des standards internationaux exige une intelligence locale. Nos solutions
              sont calibrées pour les contraintes logistiques, climatiques et matérielles du
              Cameroun — pour une infrastructure résiliente sur la durée.
            </p>
            <ul className="about-checklist">
              <li>Ingénierie optimisée aux ressources locales</li>
              <li>Infrastructures résilientes au climat</li>
              <li>Apprentissage continu au sein des équipes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 3. NOTRE HISTOIRE — Récit & Trajectoire (Nouvelle Section) ===== */}
      <section className="about-history section-panel" aria-labelledby="history-title">
        <div className="about-section-heading about-section-heading--split" data-reveal="up">
          <div>
            <span className="eyebrow-line">Parcours &amp; Ambition</span>
            <h2 id="history-title">Notre histoire</h2>
          </div>
          <p className="about-section-heading__aside">
            De la vision initiale à la structuration d'un acteur majeur d'ingénierie technique en Afrique centrale.
          </p>
        </div>

        <div className="about-history__layout">
          <div className="about-history__narrative" data-reveal="up">
            <h3>Pourquoi ND Builtshine existe</h3>
            <p>
              Face à la complexification des projets d'infrastructure en Afrique et aux pertes d'efficacité dues à des études mal adaptées aux sols et contextes locaux, ND Builtshine s'est imposé avec une conviction : <strong>rendre l'ingénierie technique irréprochable et totalement exploitable.</strong>
            </p>
            <p>
              Nous avons construit notre réputation sur l'intransigeance du calcul, l'optimisation des matériaux et la capacitation des talents locaux.
            </p>
          </div>

          <div className="about-history__timeline" data-reveal="up">
            {STORY_TIMELINE.map((item, index) => (
              <div className="history-event" key={item.year}>
                <div className="history-event__marker">
                  <span className="history-event__year">{item.year}</span>
                  <span className="history-event__line" aria-hidden="true"></span>
                </div>
                <div className="history-event__content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. MISSION & VISION ===== */}
      <section className="about-mission" aria-labelledby="mission-title">
        <div className="about-mission__grid">
          <article className="about-mission__block" data-reveal="up">
            <span className="about-mission__tag">Mission</span>
            <h2 id="mission-title">Rendre l’ingénierie technique lisible et exploitable.</h2>
            <p>
              Nous traduisons des contraintes complexes — hydrauliques, structurelles,
              énergétiques — en dossiers clairs, chiffrés et défendables devant tout comité
              technique ou bailleur de fonds.
            </p>
          </article>
          <article className="about-mission__block" data-reveal="up">
            <span className="about-mission__tag">Vision</span>
            <h2>Devenir la référence de l’ingénierie incubée en Afrique centrale.</h2>
            <p>
              À terme, ND Builtshine ambitionne de structurer un réseau d’experts capable de
              répondre aux plus grands défis d’infrastructure du continent, avec la même
              exigence à chaque échelle de projet.
            </p>
          </article>
        </div>
      </section>

      {/* ===== 5. NOTRE ÉQUIPE ===== */}
      <section className="about-team section-panel" aria-labelledby="team-title">
        <div className="about-section-heading about-section-heading--split" data-reveal="up">
          <div>
            <span className="eyebrow-line">Capital humain</span>
            <h2 id="team-title">Notre équipe</h2>
          </div>
          <p className="about-section-heading__aside">
            Une équipe pluridisciplinaire d’ingénieurs, d’experts techniques et de consultants
            projets.
          </p>
        </div>

        <div className="about-team__grid">
          {TEAM.map((t, index) => (
            <article className="team-card" key={t.name} data-reveal="up">
              <div className="team-card__photo">
                <span>{t.initials}</span>
              </div>
              <div className="team-card__info">
                <h3>{t.name}</h3>
                <span className="team-card__role">{t.role}</span>
              </div>
              <span className="team-card__number">{String(index + 1).padStart(2, '0')}</span>
            </article>
          ))}
          <article className="team-card team-card--open" data-reveal="up">
            <p>Photos et profils de l’équipe complète à ajouter — dites-moi qui inclure.</p>
          </article>
        </div>
      </section>

      {/* ===== 6. CHIFFRES CLÉS ===== */}
      <section className="about-stats" ref={statsRef} aria-label="Chiffres clés ND Builtshine">
        <div className="about-stats__inner">
          <div className="about-stats__intro" data-reveal="up">
            <span className="eyebrow-line eyebrow-line--light">En chiffres</span>
            <h2>Une pratique mesurable, pas seulement affirmée.</h2>
          </div>
          <div className="about-stats__row">
            {NUMERIC_STATS.map((item) => (
              <div className="about-stat" key={item.label} data-reveal="up">
                <strong>
                  <CountUp
                    value={item.value}
                    suffix={item.suffix}
                    start={statsInView}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. VALEURS ===== */}
      <section className="about-values section-panel" aria-labelledby="values-title">
        <div className="about-section-heading" data-reveal="up">
          <span className="eyebrow-line">Nos valeurs</span>
          <h2 id="values-title">Ce qui guide chaque mission, quelle que soit son échelle.</h2>
        </div>

        <div className="about-values__grid">
          {VALUES.map((value) => (
            <article className="value-card" key={value.id} data-reveal="up">
              <span className="value-card__icon">
                <ValueIcon id={value.id} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== 8. PARTENAIRES & AGRÉMENTS ===== */}
      <section className="about-partners section-panel" aria-labelledby="partners-title">
        <div className="about-section-heading about-section-heading--center" data-reveal="up">
          <span className="eyebrow-line">Standards internationaux</span>
          <h2 id="partners-title">Agréments &amp; partenariats</h2>
          <p>
            Notre capacité à exécuter des projets de niveau international s’appuie sur des
            alliances stratégiques avec des institutions techniques reconnues.
          </p>
        </div>

        <div className="about-partners__grid">
          {PARTNERS.map((p) => (
            <article className="partner-card" key={p.name} data-reveal="up">
              <span className="partner-card__mark" aria-hidden="true">{p.name.slice(0, 2)}</span>
              <div className="partner-card__word">{p.name}</div>
              <div className="partner-card__desc">{p.desc}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== 9. CTA FINAL ===== */}
      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta__content" data-reveal="up">
          <span className="eyebrow-line eyebrow-line--light">Travaillons ensemble</span>
          <h2 id="about-cta-title">Une équipe à rencontrer, un projet à cadrer ?</h2>
          <p>
            Parlez-nous de votre contexte technique et de vos contraintes. Nous vous répondons
            avec une première lecture claire et actionnable.
          </p>
          <Link to="/contact" className="premium-button premium-button--orange">
            Contacter ND Builtshine
          </Link>
        </div>
      </section>
    </>
  )
}