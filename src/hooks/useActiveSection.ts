import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      })
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return activeSection
}
