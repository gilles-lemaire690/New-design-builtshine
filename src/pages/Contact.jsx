import { useState } from 'react'
import { COMPANY } from '../data/company.js'
import './Contact.css'

const INITIAL_FORM = {
  name: '',
  company: '',
  subject: 'Étude Eau & Assainissement',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'sent' | 'error'

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
    <section className="page-hero grid-bg">
      <div className="wrap">
        <span className="eyebrow">Nous contacter</span>
        <h1>Engageons le dialogue.</h1>
        <p>
          Échangez avec notre équipe d'ingénierie pour discuter d'une solution technique, d'une
          consultation ou d'un projet à venir, au Cameroun et au-delà.
        </p>

        <div className="contact-grid">
          <div className="card form-card">
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

              <button type="submit" className="btn">Envoyer la demande</button>

              {status === 'sent' && (
                <p className="form-feedback success">
                  Merci, votre demande a été enregistrée (démonstration — aucun e-mail n'est réellement envoyé pour le moment).
                </p>
              )}
              {status === 'error' && (
                <p className="form-feedback error">
                  Merci de renseigner au moins votre nom et votre message avant d'envoyer.
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="card info-card">
              <h3>Siège social</h3>
              <div className="info-row">
                <div className="ic">📍</div>
                <div>
                  <span className="label">Adresse</span>
                  <span className="val">{COMPANY.address}</span>
                </div>
              </div>
              <div className="info-row">
                <div className="ic">📞</div>
                <div>
                  <span className="label">Téléphone</span>
                  <span className="val">{COMPANY.phone} <span className="pending">(à confirmer)</span></span>
                </div>
              </div>
              <div className="info-row">
                <div className="ic">✉️</div>
                <div>
                  <span className="label">E-mail</span>
                  <span className="val">{COMPANY.email} <span className="pending">(à confirmer)</span></span>
                </div>
              </div>
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="whatsapp-btn">
                💬 Contacter sur WhatsApp
              </a>
            </div>

            <div className="map-visual">
              <span>SECTEUR YAOUNDÉ — CARTE À INTÉGRER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
