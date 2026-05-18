import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQProps {
  items: { q: string; a: string }[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <motion.div
            key={i}
            layout
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-md border overflow-hidden ${
              isOpen ? 'border-accent/40 bg-accent-soft/30' : 'border-line bg-surface'
            }`}
            style={{ boxShadow: isOpen ? 'var(--shadow-tile)' : undefined }}
          >
            <motion.button
              layout
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold pr-4 text-ink leading-snug">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-accent text-ink-invert' : 'bg-surface-2 text-ink-2'
                }`}
              >
                <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-ink-2 leading-relaxed">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
