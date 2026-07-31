import { useEffect, useRef, useState } from 'react'

export function usePrefersReducedMotion() {
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

export function useRevealAnimations(prefersReducedMotion) {
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

export function useSectionInView(prefersReducedMotion) {
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

export function CountUp({ value, suffix = '', start, prefersReducedMotion }) {
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
