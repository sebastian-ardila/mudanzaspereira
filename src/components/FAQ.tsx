import { useState } from 'react'

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
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen ? 'border-amber-500/30 bg-amber-500/5' : 'border-warm-200/60 bg-white'
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold pr-4 transition-colors ${isOpen ? 'text-dark-900' : 'text-warm-700'}`}>
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-amber-500 text-dark-900 rotate-45' : 'bg-warm-100 text-warm-500'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-warm-500 leading-relaxed">{item.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
