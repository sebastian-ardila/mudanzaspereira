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

    const managed: Element[] = []

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      // Replace existing tag if present (from prerender), otherwise create new
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (el) {
        el.content = content
      } else {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        el.content = content
        document.head.appendChild(el)
        managed.push(el)
      }
    }

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (el) {
        el.href = href
      } else {
        el = document.createElement('link')
        el.rel = rel
        el.href = href
        document.head.appendChild(el)
        managed.push(el)
      }
    }

    setMeta('name', 'description', description)
    setLink('canonical', `${SITE_URL}${canonical}`)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${SITE_URL}${canonical}`)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Mudanzas Pereira')
    setMeta('property', 'og:image', ogImage || `${SITE_URL}/mudanza-pereira.jpg`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage || `${SITE_URL}/mudanza-pereira.jpg`)

    return () => {
      managed.forEach((el) => el.remove())
    }
  }, [title, description, canonical, ogImage])

  return null
}
