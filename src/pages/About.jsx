import { TEAM, PARTNERS } from '../data/company.js'
import './About.css'

export default function About() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <span className="eyebrow">Notre identité</span>
          <h1>La précision de l'ingénierie, au service d'un monde en construction.</h1>
          <p>
            ND Builtshine n'est pas qu'un cabinet d'exécution. Nous sommes un incubateur de solutions
            techniques, qui adapte les protocoles d'ingénierie avancés aux réalités structurelles et
            infrastructurelles du Cameroun et du continent africain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Notre méthode</span>
            <h2>Le modèle incubateur</h2>
          </div>
          <div className="model-grid">
            <div className="model-photo">
              <span className="cap">CROQUIS / ÉTUDE TECHNIQUE — VISUEL À REMPLACER</span>
            </div>
            <div className="card model-card">
              <h3>Incubation technique</h3>
              <p>
                Notre approche dépasse la simple prestation d'études. Nous identifions les défis
                infrastructurels complexes et développons des solutions techniques sur mesure, en
                cultivant l'apprentissage continu et une rigueur d'exécution constante.
              </p>
            </div>
            <div className="card model-card">
              <h3>Le contexte africain</h3>
              <p>
                Appliquer des standards internationaux exige une intelligence locale. Nos solutions sont
                calibrées pour les contraintes logistiques, climatiques et matérielles du Cameroun — pour
                une infrastructure résiliente sur la durée.
              </p>
              <ul className="checklist">
                <li>✓ Ingénierie optimisée aux ressources locales</li>
                <li>✓ Infrastructures résilientes au climat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Capital humain</span>
              <h2>Notre équipe</h2>
            </div>
            <p style={{ maxWidth: 340, color: 'var(--muted)', fontSize: '0.88rem' }}>
              Une équipe pluridisciplinaire d'ingénieurs, d'experts techniques et de consultants projets.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((t) => (
              <div className="card team-card" key={t.name}>
                <div className="team-photo">{t.initials}</div>
                <div className="info">
                  <h4>{t.name}</h4>
                  <span className="role">{t.role}</span>
                </div>
              </div>
            ))}
            <div className="card team-card open">
              Photos et profils de l'équipe complète à ajouter — dites-moi qui inclure.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Standards internationaux</span>
            <h2 style={{ margin: '0 auto' }}>Agréments & partenariats</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: 520, margin: '12px auto 0' }}>
              Notre capacité à exécuter des projets de niveau international s'appuie sur des alliances
              stratégiques avec des institutions techniques reconnues.
            </p>
          </div>
          <div className="accred-grid">
            {PARTNERS.map((p) => (
              <div className="card accred-card" key={p.name}>
                <div className="word">{p.name}</div>
                <div className="desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
