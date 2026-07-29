import { EXPERTISES } from '../data/company.js'
import './Expertise.css'

const VISUAL_LABELS = {
  eau: 'SCHÉMA RÉSEAU AEP — VISUEL À AJOUTER',
  energie: 'LIGNE 400kV — VISUEL À AJOUTER',
  infra: 'CHANTIER BTP — VISUEL À AJOUTER',
}

export default function Expertise() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <span className="eyebrow">Nos domaines</span>
          <h1>Trois pôles d'ingénierie, une seule méthode d'étude.</h1>
          <p>Chaque mission part d'un diagnostic terrain rigoureux avant toute proposition technique.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          {EXPERTISES.map((e, i) => (
            <div className={`expert-block ${i % 2 === 1 ? 'reverse' : ''}`} key={e.id}>
              <div>
                <span className="label">{e.code}</span>
                <h2>{e.title}</h2>
                <p>{e.summary}</p>
                <ul>
                  {e.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="visual">
                <span>{VISUAL_LABELS[e.id]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
