import type { Variants } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
}

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const staggerFast: Variants = {
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
}

export const bentoTile: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
}

export const pageFade: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
}

export const slideUpWord: Variants = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
}

export const viewportOnce = { once: true, margin: '-10% 0px -5% 0px' }
