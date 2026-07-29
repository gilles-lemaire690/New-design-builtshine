import { Link } from 'react-router-dom'
import { COMPANY } from '../data/company.js'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">ND BUILTSHINE</div>
          <p style={{ maxWidth: 260 }}>
            Incubateur de solutions techniques — eau, énergie et infrastructures. Yaoundé, Cameroun.
          </p>
        </div>
        <div>
          <h5>Navigation</h5>
          <Link to="/expertise">Expertise</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/a-propos">À propos</Link>
        </div>
        <div>
          <h5>Contact</h5>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.address}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
        <div>
          <h5>Suivez-nous</h5>
          <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">WhatsApp Pro</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ND Builtshine Engineering. Tous droits réservés. Yaoundé, Cameroun.</span>
        <span>Site en développement — contenus à valider</span>
      </div>
    </footer>
  )
}
