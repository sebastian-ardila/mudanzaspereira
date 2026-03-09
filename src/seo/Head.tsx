import { useEffect } from 'react'
import { SITE_URL } from '../utils/constants'

interface HeadProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
}

export default function Head({ title, description, canonical, ogImage }: HeadProps) {
  useEffect(() => {
    document.title = title

    const metas: HTMLMetaElement[] = []
    const links: HTMLLinkElement[] = []

    const setMeta = (name: string, content: string, property = false) => {
      const meta = document.createElement('meta')
      if (property) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      meta.content = content
      document.head.appendChild(meta)
      metas.push(meta)
    }

    const setLink = (rel: string, href: string) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      document.head.appendChild(link)
      links.push(link)
    }

    setMeta('description', description)
    setLink('canonical', `${SITE_URL}${canonical}`)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', `${SITE_URL}${canonical}`, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', 'Mudanzas Pereira', true)
    if (ogImage) {
      setMeta('og:image', ogImage, true)
    }
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    return () => {
      metas.forEach((m) => m.remove())
      links.forEach((l) => l.remove())
    }
  }, [title, description, canonical, ogImage])

  return null
}
