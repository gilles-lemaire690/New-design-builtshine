import { useState, useCallback } from 'react'
import { COMPANY, FAQ } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import './Contact.css'

const INITIAL_FORM = {
  name: '',
  company: '',
  subject: 'Étude Eau & Assainissement',
  message: '',
}

const QUICK_CONTACTS = [
  {
    id: 'phone',
    label: 'Téléphone direct',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
    pending: true,
  },
  {
    id: 'email',
    label: 'Courrier électronique',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    pending: true,
  },
  {
    id: 'whatsapp',
    label: 'Échange instantané',
    value: 'Discuter sur WhatsApp',
    href: COMPANY.whatsapp,
    pending: false,
  },
]

function ContactIcon({ id }) {
  const paths = {
    phone: (
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.3 1L6.6 10.8Z" />
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    whatsapp: (
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.9 12.5c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1a12 12 0 0 1-3.7-2.3 8.3 8.3 0 0 1-1.7-2.1c-.4-.6-.1-.9.2-1.2l.5-.5c.2-.2.3-.4.1-.7l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 3 1.2 3 .8 3.5.8.5 0 1.6-.6 1.8-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3Z" />
    ),
    location: (
      <>
        <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.6" r="2.4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" />
      </>
    ),
    arrowRight: (
      <path d="M5 12h14M12 5l7 7-7 7" />
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sent')
    setForm(INITIAL_FORM)
  }

  const scrollToForm = (e) => {
    e.preventDefault()
    const formElement = document.getElementById('contact-form-section')
    if (formElement) {
      formElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    }
  }

  return (
    <>
      {/* 1. HERO ÉDITORIAL D'INGÉNIERIE (REMPLACE PAGEHERO) */}
      <section className="contact-intro" aria-label="Introduction contact">
        <div className="contact-intro__grid">
          <div className="contact-intro__content" data-reveal="up">
            <span className="contact-intro__eyebrow">Nous contacter</span>
            <h1 className="contact-intro__title">Parlons de votre projet.</h1>
            <p className="contact-intro__description">
              Nous accompagnons les acteurs publics, privés et institutionnels dans leurs projets d’ingénierie et d’infrastructures. Notre équipe est disponible pour analyser vos besoins et vous proposer une première orientation technique.
            </p>
            <div className="contact-intro__actions">
              <a href="#contact-form-section" className="btn-primary" onClick={scrollToForm}>
                Démarrer un projet
              </a>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="btn-secondary">
                Nous appeler
              </a>
            </div>
          </div>

          <div className="contact-intro__media" data-reveal="up">
            <div className="contact-intro__image-wrapper">
              <img
                src="/hero/ingenieur.png"
                alt="Ingénieurs ND Builtshine en consultation de projet"
                loading="eager"
              />
            </div>
            <div className="contact-intro__badge">
              <span className="contact-intro__badge-icon" aria-hidden="true" />
              <span className="contact-intro__badge-text">Bureau d'études disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARTES CONTACTS RAPIDES REDESIGNÉES */}
      <section className="contact-quick" aria-label="Modalités de contact rapide">
        <div className="contact-quick__grid">
          {QUICK_CONTACTS.map((c) => (
            <a
              className="quick-card"
              href={c.href}
              target={c.id === 'whatsapp' ? '_blank' : undefined}
              rel={c.id === 'whatsapp' ? 'noreferrer' : undefined}
              key={c.id}
              data-reveal="up"
            >
              <div className="quick-card__top">
                <span className="quick-card__icon">
                  <ContactIcon id={c.id} />
                </span>
                <span className="quick-card__arrow">
                  <ContactIcon id="arrowRight" />
                </span>
              </div>
              <div>
                <span className="quick-card__label">{c.label}</span>
                <span className="quick-card__value">
                  {c.value}
                  {c.pending && <span className="pending">(à confirmer)</span>}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. MAIN SECTION : FORMULAIRE & INFORMATIONS CORPORATE */}
      <section id="contact-form-section" className="contact-main" aria-label="Formulaire et informations de contact">
        <div className="contact-main__grid">
          
          {/* Formulaire Corporate */}
          <div className="form-card" data-reveal="up">
            <div className="form-card__header">
              <h2>Formulaire de demande d’étude</h2>
              <p className="form-card__subtitle"> Transmettez-nous les éléments clés de votre besoin pour une prise en charge rapide.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="ex. Jean Mballa"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="company">Société / Organisation</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="ex. Ministère, Entreprise..."
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Domaine d’intervention</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option value="Étude Eau & Assainissement">Étude Eau & Assainissement</option>
                  <option value="Étude Énergie & Transport">Étude Énergie & Transport</option>
                  <option value="Étude Infrastructures & BTP">Étude Infrastructures & BTP</option>
                  <option value="Autre demande">Autre conseil technique</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Détails de la mission *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez les objectifs, le contexte ou la localisation du projet..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-submit">
                Envoyer la demande d’étude
              </button>

              {status === 'sent' && (
                <div className="form-feedback success" role="status">
                  ✓ Votre message a été transmis avec succès. Un ingénieur vous recontactera sous 24h.
                </div>
              )}
              {status === 'error' && (
                <div className="form-feedback error" role="alert">
                  ⚠ Merci de remplir au moins votre nom et les détails du message avant l’envoi.
                </div>
              )}
            </form>
          </div>

          {/* Panneau latéral Corporate & Carte */}
          <div className="contact-side" data-reveal="up">
            <div className="info-card">
              <h3>Siège social & Bureaux</h3>

              <div className="info-row">
                <span className="info-row__icon">
                  <ContactIcon id="location" />
                </span>
                <div>
                  <span className="label">Adresse principale</span>
                  <span className="val">{COMPANY.address}</span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-row__icon">
                  <ContactIcon id="phone" />
                </span>
                <div>
                  <span className="label">Ligne directe</span>
                  <span className="val">
                    {COMPANY.phone} <span className="pending">(à confirmer)</span>
                  </span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-row__icon">
                  <ContactIcon id="email" />
                </span>
                <div>
                  <span className="label">Courriel officiel</span>
                  <span className="val">
                    {COMPANY.email} <span className="pending">(à confirmer)</span>
                  </span>
                </div>
              </div>

              <div className="info-row info-row--hours">
                <span className="info-row__icon">
                  <ContactIcon id="clock" />
                </span>
                <div style={{ width: '100%' }}>
                  <span className="label">Heures d'ouverture</span>
                  {COMPANY.hours.map((h) => (
                    <div className="info-row__hour" key={h.day}>
                      <span>{h.day}</span>
                      <span className="val">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <ContactIcon id="whatsapp" />
                Échanger via WhatsApp
              </a>
            </div>

            {/* Châssis de Carte Architectural */}
            <div className="map-visual">
              <iframe
                title="Localisation ND Builtshine — Yaoundé"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.48%2C3.83%2C11.55%2C3.90&layer=mapnik"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-visual__pin">
                <span className="map-visual__pin-dot" />
                Yaoundé, Cameroun
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ ACCORDÉON DE CONSULTING */}
      <section className="contact-faq section-panel" aria-labelledby="faq-title">
        <div className="contact-faq__layout">
          <div className="contact-faq__intro" data-reveal="up">
            <span className="contact-intro__eyebrow">FAQ</span>
            <h2 id="faq-title">Questions fréquentes avant engagement.</h2>
          </div>

          <div className="faq-list">
            {FAQ.map((item, index) => {
              const isOpen = openFaq === index
              const faqId = `faq-panel-${index}`
              return (
                <div
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                  key={item.question}
                  data-reveal="up"
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true" />
                  </button>
                  <div id={faqId} className="faq-item__panel" role="region">
                    <div className="faq-item__panel-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. CALL-TO-ACTION FINAL ARCHITECTURAL */}
      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="contact-cta__content" data-reveal="up">
          <span className="contact-intro__eyebrow" style={{ color: 'var(--orange)' }}>
            Démarrons ensemble
          </span>
          <h2 id="contact-cta-title">Prêt à structurer votre prochain projet technique ?</h2>
          <p>
            Écrivez-nous dès aujourd’hui : nous revenons vers vous avec une première analyse de cadrage de votre besoin.
          </p>
          <a
            href="#contact-form-section"
            className="btn-primary"
            style={{ background: 'var(--orange)' }}
            onClick={scrollToForm}
          >
            Remplir le formulaire d'étude
          </a>
        </div>
      </section>
    </>
  )
}