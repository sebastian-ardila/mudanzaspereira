import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '../motion/variants'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  variants?: Variants
  as?: 'div' | 'section' | 'span' | 'li' | 'article'
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  variants = fadeUp,
  as = 'div',
}: RevealOnScrollProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
