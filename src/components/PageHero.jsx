import './PageHero.css'

export default function PageHero({ eyebrow, title, description, image, number }) {
  return (
    <section className="page-hero-immersive" aria-label={title}>
      <div className="page-hero-immersive__bg" aria-hidden="true">
        <img src={image} alt="" loading="eager" />
      </div>
      <div className="page-hero-immersive__overlay" aria-hidden="true" />
      <div className="page-hero-immersive__grid" aria-hidden="true" />

      <div className="page-hero-immersive__content" data-reveal="mask">
        <span className="page-hero-immersive__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p className="page-hero-immersive__desc">{description}</p>}
        {number && (
          <span className="page-hero-immersive__number" aria-hidden="true">
            {number}
          </span>
        )}
      </div>
    </section>
  )
}
