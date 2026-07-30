import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

const HERO_SLIDES = [
  {
    src: '/home/site-team.jpg',
    caption: 'Maîtrise d’œuvre',
    kicker: 'Suivi de chantier',
  },
  {
    src: '/home/project-minsante.jpg',
    caption: 'Architecture technique',
    kicker: 'Espaces institutionnels',
  },
  {
    src: '/hero/site-2.jpg',
    caption: 'Conception 3D',
    kicker: 'Études et modélisation',
  },
  {
    src: '/home/project-justice.jpg',
    caption: 'Infrastructures publiques',
    kicker: 'Bâtiments complexes',
  },
]

const STATS = [
  { value: 120, suffix: '+', label: 'missions techniques structurées' },
  { value: 25, suffix: '+', label: 'experts et partenaires mobilisables' },
  { value: 15, suffix: '+', label: 'années de pratique cumulée' },
  { value: 98, suffix: '%', label: 'dossiers livrés avec validation technique' },
]

const ABOUT_POINTS = [
  'Diagnostics terrain, relevés et notes de cadrage avant conception',
  'Dimensionnement conforme aux contraintes locales et aux standards internationaux',
  'Pilotage de projet lisible pour les maîtres d’ouvrage publics et privés',
]

const EXPERTISE_BLOCKS = [
  {
    number: '01',
    icon: 'water',
    title: 'Eau & assainissement',
    text: 'Études AEP, réseaux, ouvrages hydrauliques et assistance à maîtrise d’ouvrage.',
    image: '/home/project-lab.png',
    link: '/expertise',
  },
  {
    number: '02',
    icon: 'energy',
    title: 'Énergie & réseaux',
    text: 'Transport électrique, postes, lignes et coordination technique en groupement.',
    image: '/hero/site-4.jpg',
    link: '/expertise',
  },
  {
    number: '03',
    icon: 'structure',
    title: 'Infrastructures & BTP',
    text: 'Structures, bâtiments publics, diagnostics, réhabilitation et suivi d’exécution.',
    image: '/home/project-justice.jpg',
    link: '/expertise',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Analyse',
    text: 'Comprendre le site, les usages, les risques et les contraintes opérationnelles.',
  },
  {
    number: '02',
    title: 'Conception',
    text: 'Transformer le diagnostic en scénarios techniques clairs et arbitrables.',
  },
  {
    number: '03',
    title: 'Dimensionnement',
    text: 'Calculer, modéliser et documenter les solutions retenues.',
  },
  {
    number: '04',
    title: 'Suivi',
    text: 'Contrôler l’exécution, résoudre les écarts et sécuriser la qualité.',
  },
  {
    number: '05',
    title: 'Livraison',
    text: 'Remettre un dossier exploitable, défendable et prêt pour la suite du projet.',
  },
]

const PROJECTS = [
  {
    image: '/home/project-minsante.jpg',
    title: 'Réaménagement institutionnel',
    category: 'Architecture intérieure',
    location: 'Yaoundé, Cameroun',
  },
  {
    image: '/home/project-justice.jpg',
    title: 'Complexe judiciaire',
    category: 'Bâtiment public',
    location: 'Akonolinga, Cameroun',
  },
  {
    image: '/home/project-lab.png',
    title: 'Laboratoire technique',
    category: 'Équipement spécialisé',
    location: 'Mokolo, Cameroun',
  },
]

const ADVANTAGES = [
  'Une lecture terrain avant toute promesse technique',
  'Des dossiers structurés pour accélérer les validations',
  'Une culture de la preuve: notes, plans, métrés, simulations',
  'Une équipe habituée aux projets publics, privés et en groupement',
]

const TESTIMONIALS = [
  {
    photo: '/home/hero-engineer.png',
    name: 'A. N.',
    company: 'Maîtrise d’ouvrage publique',
    quote:
      'L’équipe a apporté une méthode claire, des arbitrages précis et une vraie capacité à transformer les contraintes du site en solutions exploitables.',
  },
  {
    photo: '/home/site-team.jpg',
    name: 'M. T.',
    company: 'Partenaire technique',
    quote:
      'ND Builtshine sait rendre les sujets complexes lisibles. Les livrables sont structurés, argumentés et faciles à défendre en comité.',
  },
  {
    photo: '/home/project-minsante.jpg',
    name: 'C. E.',
    company: 'Direction de projet',
    quote:
      'Le suivi a été rigoureux, avec une attention constante portée à la qualité d’exécution et à la cohérence entre études et chantier.',
  },
]

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(query.matches)

    update()

    if (query.addEventListener) {
      query.addEventListener('change', update)
      return () => query.removeEventListener('change', update)
    }

    query.addListener(update)
    return () => query.removeListener(update)
  }, [])

  return prefersReducedMotion
}

function useRevealAnimations(prefersReducedMotion) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [prefersReducedMotion])
}

function useSectionInView(prefersReducedMotion) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setInView(true)
      return undefined
    }

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return [ref, inView]
}

function CountUp({ value, suffix, start, prefersReducedMotion }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return undefined

    if (prefersReducedMotion) {
      setDisplay(value)
      return undefined
    }

    let frame = 0
    const duration = 1500
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [prefersReducedMotion, start, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

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

function Home() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [slide, setSlide] = useState(0)
  const [testimonial, setTestimonial] = useState(0)
  const [statsRef, statsInView] = useSectionInView(prefersReducedMotion)

  useRevealAnimations(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const id = setInterval(() => {
      setSlide((index) => (index + 1) % HERO_SLIDES.length)
    }, 5200)

    return () => clearInterval(id)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const id = setInterval(() => {
      setTestimonial((index) => (index + 1) % TESTIMONIALS.length)
    }, 5600)

    return () => clearInterval(id)
  }, [prefersReducedMotion])

  const handleHeroPointerMove = (event) => {
    if (prefersReducedMotion) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2

    event.currentTarget.style.setProperty('--mx', x.toFixed(3))
    event.currentTarget.style.setProperty('--my', y.toFixed(3))
  }

  const activeSlide = HERO_SLIDES[slide]
  const activeTestimonial = TESTIMONIALS[testimonial]

  return (
    <>
      <section
        className="home-hero"
        aria-label="Accueil ND Builtshine"
        onPointerMove={handleHeroPointerMove}
      >
        <div className="home-hero__media" aria-hidden="true">
          {HERO_SLIDES.map((item, index) => (
            <div
              key={item.src}
              className={`home-hero__slide ${index === slide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${item.src})` }}
            />
          ))}
          <div className="home-hero__veil" />
          <div className="home-hero__grid" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__copy" data-reveal="mask">
            <span className="home-eyebrow">Bureau d’études en ingénierie - Cameroun</span>
            <h1>
              ND Builtshine transforme les contraintes techniques en infrastructures fiables.
            </h1>
            <p>
              Études, conception, dimensionnement et suivi de projets en eau, énergie,
              bâtiments publics et infrastructures à haute exigence.
            </p>
            <div className="home-hero__actions">
              <Link to="/expertise" className="premium-button premium-button--light">
                Découvrir nos expertises
              </Link>
              <Link to="/contact" className="premium-button premium-button--ghost">
                Demander un devis
              </Link>
            </div>
          </div>

          <aside className="home-hero__portrait" data-reveal="image">
            <img
              src="/home/engineer-cutout.png"
              alt="Ingénieure en équipement de protection ND Builtshine"
              width="1264"
              height="841"
              fetchPriority="high"
            />
            <div className="home-hero__glass" aria-hidden="true">
              <span>Études</span>
              <strong>01</strong>
            </div>
          </aside>
        </div>

        <div className="home-hero__controls" aria-label="Contrôle du slider principal">
          <div>
            <span>{String(slide + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(HERO_SLIDES.length).padStart(2, '0')}</span>
          </div>
          <p>
            {activeSlide.kicker}
            <strong>{activeSlide.caption}</strong>
          </p>
          <div className="home-hero__dots" role="tablist" aria-label="Choisir une image du hero">
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={index === slide ? 'is-active' : ''}
                onClick={() => setSlide(index)}
                aria-label={`Afficher le slide ${index + 1}: ${item.caption}`}
                aria-selected={index === slide}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-stats" ref={statsRef} aria-label="Chiffres clés ND Builtshine">
        <div className="home-stats__inner">
          {STATS.map((item) => (
            <article className="home-stat" key={item.label} data-reveal="up">
              <strong>
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  start={statsInView}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about section-panel" aria-labelledby="about-title">
        <div className="home-about__layout">
          <figure className="home-about__image" data-reveal="image">
            <img src="/home/site-team.jpg" alt="Équipe technique analysant un plan sur chantier" loading="lazy" />
          </figure>

          <div className="home-about__card" data-reveal="up">
            <span className="home-section-number" aria-hidden="true">
              02
            </span>
            <span className="home-eyebrow">Notre approche</span>
            <h2 id="about-title">Une ingénierie calme, précise, ancrée dans le réel.</h2>
            <p>
              ND Builtshine accompagne les maîtres d’ouvrage dans les phases où chaque
              décision technique compte: cadrage, conception, exécution et contrôle.
            </p>
            <ul>
              {ABOUT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="home-about__signature">
              <span>ND Builtshine Engineering</span>
              <strong>Incubateur de solutions techniques</strong>
            </div>
            <Link to="/a-propos" className="premium-button premium-button--dark">
              Comprendre notre méthode
            </Link>
          </div>
        </div>
      </section>

      <section className="home-expertise section-panel" aria-labelledby="expertise-title">
        <div className="home-section-heading" data-reveal="up">
          <span className="home-eyebrow">Expertises</span>
          <h2 id="expertise-title">Trois pôles, une même exigence d’exécution.</h2>
        </div>

        <div className="home-expertise__grid">
          {EXPERTISE_BLOCKS.map((item) => (
            <article className="expertise-panel" key={item.title} data-reveal="up">
              <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
              <div className="expertise-panel__overlay" />
              <div className="expertise-panel__content">
                <span className="expertise-panel__number">{item.number}</span>
                <span className="expertise-panel__icon">
                  <ExpertiseIcon type={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.link} aria-label={`Voir l’expertise ${item.title}`}>
                  Explorer
                  <span aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-process section-panel" aria-labelledby="process-title">
        <div className="home-process__intro" data-reveal="up">
          <span className="home-eyebrow">Process</span>
          <h2 id="process-title">De l’analyse initiale à la livraison, chaque étape est documentée.</h2>
        </div>

        <div className="home-process__timeline" aria-label="Processus de mission ND Builtshine">
          {PROCESS_STEPS.map((step) => (
            <article className="process-step" key={step.number} data-reveal="up">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-portfolio section-panel" aria-labelledby="portfolio-title">
        <div className="home-section-heading home-section-heading--split" data-reveal="up">
          <div>
            <span className="home-eyebrow">Portfolio</span>
            <h2 id="portfolio-title">Des rendus et dossiers qui parlent le langage du chantier.</h2>
          </div>
          <Link to="/portfolio" className="premium-button premium-button--dark">
            Voir le portfolio
          </Link>
        </div>

        <div className="home-portfolio__grid">
          {PROJECTS.map((project, index) => (
            <article className="portfolio-card" key={project.title} data-reveal="image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="portfolio-card__overlay" />
              <div className="portfolio-card__content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <Link to="/portfolio" aria-label={`Voir le projet ${project.title}`}>
                  PRJ {String(index + 1).padStart(2, '0')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-why" aria-labelledby="why-title">
        <div className="home-why__inner">
          <div className="home-why__statement" data-reveal="up">
            <span className="home-eyebrow">Pourquoi nous choisir</span>
            <h2 id="why-title">Le sérieux technique se voit avant même le premier coup de pelle.</h2>
          </div>
          <div className="home-why__list">
            {ADVANTAGES.map((advantage, index) => (
              <article className="why-item" key={advantage} data-reveal="up">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{advantage}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-testimonials section-panel" aria-labelledby="testimonials-title">
        <div className="home-testimonials__layout">
          <div data-reveal="up">
            <span className="home-eyebrow">Témoignages</span>
            <h2 id="testimonials-title">Une relation de confiance, fondée sur la clarté.</h2>
          </div>

          <article className="testimonial-card" data-reveal="up">
            <div className="testimonial-card__photo">
              <img src={activeTestimonial.photo} alt="" loading="lazy" aria-hidden="true" />
            </div>
            <div className="testimonial-card__body">
              <div className="testimonial-card__rating" aria-label="Note de 5 étoiles">
                ★★★★★
              </div>
              <p>“{activeTestimonial.quote}”</p>
              <div>
                <strong>{activeTestimonial.name}</strong>
                <span>{activeTestimonial.company}</span>
              </div>
              <div className="testimonial-card__controls" aria-label="Choisir un témoignage">
                {TESTIMONIALS.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={index === testimonial ? 'is-active' : ''}
                    onClick={() => setTestimonial(index)}
                    aria-label={`Afficher le témoignage ${index + 1}`}
                    aria-selected={index === testimonial}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <img src="/home/project-minsante.jpg" alt="" loading="lazy" aria-hidden="true" />
        <div className="home-cta__overlay" />
        <div className="home-cta__content" data-reveal="up">
          <span className="home-eyebrow">Parlons projet</span>
          <h2 id="cta-title">Une infrastructure à étudier, fiabiliser ou suivre?</h2>
          <p>
            Donnez-nous le contexte, le site, les délais et les contraintes. Nous vous aidons
            à transformer le besoin en feuille de route technique.
          </p>
          <Link to="/contact" className="premium-button premium-button--orange">
            Écrire à ND Builtshine
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
