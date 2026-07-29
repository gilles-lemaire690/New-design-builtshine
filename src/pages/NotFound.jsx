import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero grid-bg" style={{ textAlign: 'center', paddingBottom: 90 }}>
      <div className="wrap">
        <span className="eyebrow" style={{ display: 'block' }}>Erreur 404</span>
        <h1 style={{ margin: '0 auto 16px' }}>Cette page n'existe pas.</h1>
        <p style={{ margin: '0 auto 24px' }}>La page que vous cherchez a peut-être été déplacée ou renommée.</p>
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </div>
    </section>
  )
}
