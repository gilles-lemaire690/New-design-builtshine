import { useState } from 'react'
import { COMPANY, FAQ } from '../data/company.js'
import { usePrefersReducedMotion, useRevealAnimations } from '../hooks/useAnimations.jsx'
import PageHero from '../components/PageHero.jsx'
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
    label: 'Téléphone',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
    pending: true,
  },
  {
    id: 'email',
    label: 'E-mail',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    pending: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Discuter directement',
    href: COMPANY.whatsapp,
    pending: false,
  },
]

function ContactIcon({ id }) {
  const paths = {
    phone: <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.3 1L6.6 10.8Z" />,
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
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'sent' | 'error'
  const [openFaq, setOpenFaq] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()
  useRevealAnimations(prefersReducedMotion)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    // ⚠️ Démonstration : aucun envoi réel n'est effectué ici.
    // Pour la mise en production, connectez ce formulaire à un service
    // d'envoi (ex. formspree.io, EmailJS, ou une route API côté serveur).
    console.log('Formulaire envoyé (démo) :', form)
    setStatus('sent')
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <PageHero
        eyebrow="Nous contacter"
        title="Engageons le dialogue."
        description="Échangez avec notre équipe d’ingénierie pour discuter d’une solution technique, d’une consultation ou d’un projet à venir, au Cameroun et au-delà."
        image="/hero/ingenieur.png"
        number="04"
      />

      <section className="contact-quick section-panel" aria-label="Contacts rapides">
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
              <span className="quick-card__icon">
                <ContactIcon id={c.id} />
              </span>
              <span className="quick-card__label">{c.label}</span>
              <span className="quick-card__value">
                {c.value}
                {c.pending && <span className="pending"> (à confirmer)</span>}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-main" aria-label="Formulaire et informations de contact">
        <div className="contact-main__grid">
          <div className="form-card" data-reveal="up">
            <h2>Formulaire de demande de projet</h2>
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Nom complet</label>
                  <input id="name" name="name" type="text" placeholder="Jean Mballa" value={form.name} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="company">Société / Organisation</label>
                  <input id="company" name="company" type="text" placeholder="Nom de votre structure" value={form.company} onChange={handleChange} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Sujet</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option>Étude Eau & Assainissement</option>
                  <option>Étude Énergie & Transport</option>
                  <option>Étude Infrastructures & BTP</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Détails du message</label>
                <textarea id="message" name="message" placeholder="Décrivez votre projet ou votre demande..." value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="premium-button premium-button--dark contact-submit">
                Envoyer la demande
              </button>

              {status === 'sent' && (
                <p className="form-feedback success">
                  Merci, votre demande a été enregistrée (démonstration — aucun e-mail n’est réellement envoyé pour le moment).
                </p>
              )}
              {status === 'error' && (
                <p className="form-feedback error">
                  Merci de renseigner au moins votre nom et votre message avant d’envoyer.
                </p>
              )}
            </form>
          </div>

          <div className="contact-side" data-reveal="up">
            <div className="info-card">
              <h3>Siège social</h3>
              <div className="info-row">
                <span className="info-row__icon"><ContactIcon id="location" /></span>
                <div>
                  <span className="label">Adresse</span>
                  <span className="val">{COMPANY.address}</span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-row__icon"><ContactIcon id="phone" /></span>
                <div>
                  <span className="label">Téléphone</span>
                  <span className="val">{COMPANY.phone} <span className="pending">(à confirmer)</span></span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-row__icon"><ContactIcon id="email" /></span>
                <div>
                  <span className="label">E-mail</span>
                  <span className="val">{COMPANY.email} <span className="pending">(à confirmer)</span></span>
                </div>
              </div>
              <div className="info-row info-row--hours">
                <span className="info-row__icon"><ContactIcon id="clock" /></span>
                <div>
                  <span className="label">Horaires</span>
                  {COMPANY.hours.map((h) => (
                    <span className="val info-row__hour" key={h.day}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </span>
                  ))}
                </div>
              </div>

              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="whatsapp-btn">
                <ContactIcon id="whatsapp" />
                Contacter sur WhatsApp
              </a>
            </div>

            <div className="map-visual">
              <iframe
                title="Localisation ND Builtshine — Yaoundé"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.48%2C3.83%2C11.55%2C3.90&layer=mapnik"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="map-visual__pin">Yaoundé, Cameroun</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq section-panel" aria-labelledby="faq-title">
        <div className="contact-faq__layout">
          <div className="contact-faq__intro" data-reveal="up">
            <span className="eyebrow-line">Questions fréquentes</span>
            <h2 id="faq-title">Tout ce qu’il faut savoir avant d’écrire.</h2>
          </div>

          <div className="faq-list">
            {FAQ.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question} data-reveal="up">
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true" />
                  </button>
                  <div className="faq-item__panel">
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="contact-cta__content" data-reveal="up">
          <span className="eyebrow-line eyebrow-line--light">Démarrons ensemble</span>
          <h2 id="contact-cta-title">Prêt à structurer votre prochain projet technique ?</h2>
          <p>
            Écrivez-nous dès aujourd’hui : nous revenons vers vous avec une première lecture
            claire de votre besoin.
          </p>
          <a href="#top" className="premium-button premium-button--orange" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }) }}>
            Remplir le formulaire
          </a>
        </div>
      </section>
    </>
  )
}
