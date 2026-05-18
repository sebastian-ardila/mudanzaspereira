import { motion } from 'framer-motion'
import { useEffect, useState, type ElementType } from 'react'
import { slideUpWord, viewportOnce } from '../motion/variants'

interface AnimatedHeadingProps {
  as?: ElementType
  children: string
  splitWords?: boolean
  className?: string
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  children,
  splitWords = true,
  className,
}: AnimatedHeadingProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!splitWords || !mounted) {
    return <Tag className={className}>{children}</Tag>
  }

  const words = children.split(' ')

  return (
    <Tag className={className} aria-label={children}>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ staggerChildren: 0.07 }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.22em] last:mr-0">
            <motion.span variants={slideUpWord} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
