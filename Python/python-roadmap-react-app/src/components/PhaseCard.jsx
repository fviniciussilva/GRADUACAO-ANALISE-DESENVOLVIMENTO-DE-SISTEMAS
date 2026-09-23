import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { useRoadmapStore } from '../store/useRoadmapStore'

export default function PhaseCard({ phase, idx, index }) {
  const [open, setOpen] = useState(index < 2)
  const { checked, toggleTopic, query, showPendingOnly } = useRoadmapStore()
  const q = (query || '').trim().toLowerCase()
  let topics = phase.topics
    .map((tp, i) => ({ ...tp, key: `${index}-${i}` }))
    .filter((tp) => !q || tp.t.toLowerCase().includes(q) || tp.d.toLowerCase().includes(q))
  if (showPendingOnly) topics = topics.filter((tp) => !checked[tp.key])
  if ((q || showPendingOnly) && topics.length === 0) return null
  const done = phase.topics.filter((_, i) => checked[`${index}-${i}`]).length
  const pct = Math.round((done / phase.topics.length) * 100)
  const cardId = `phase-${index}`

  return (
    <motion.article
      id={`fase-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className="scroll-mt-24 rounded-3xl overflow-hidden bg-white/[.04] border border-white/10 hover:border-white/25 transition shadow-xl"
    >
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={cardId} className="w-full text-left focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-3xl">
        <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
        <div className="p-5 flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl grid place-items-center text-3xl bg-gradient-to-br ${phase.color} shrink-0`} aria-hidden>{phase.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-extrabold">Fase {idx}: {phase.title}</h2>
              {phase.isNew && <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 animate-pulse">✨ NOVA</span>}
            </div>
            <p className="text-sm text-slate-400">{phase.desc}</p>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden max-w-md" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label={`Progresso fase ${idx}`}>
              <div className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-500`} style={{ width: pct + '%' }} />
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1">{done}/{phase.topics.length} • {pct}% <ChevronDown size={14} className={open ? 'rotate-180 transition' : 'transition'} /></p>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={cardId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-5 pb-5">
              <div className="grid sm:grid-cols-2 gap-3">
                {topics.map((tp) => {
                  const c = !!checked[tp.key]
                  return (
                    <label key={tp.key} className={`flex gap-3 p-3 rounded-2xl border cursor-pointer transition ${c ? 'bg-emerald-500/10 border-emerald-400/40' : 'bg-white/[.04] border-white/10 hover:border-white/25'}`}>
                      <input type="checkbox" checked={c} onChange={() => toggleTopic(tp.key)} aria-label={tp.t} className="mt-1 w-[18px] h-[18px] accent-indigo-500" />
                      <span>
                        <span className={`block font-bold text-[15px] ${c ? 'line-through opacity-60' : ''}`}>{c ? '✅ ' : '⬜ '}{tp.t}</span>
                        <span className="block text-[13px] text-slate-400">{tp.d}</span>
                      </span>
                    </label>
                  )
                })}
              </div>
              <details className="mt-3 rounded-2xl bg-amber-300/10 border border-amber-300/20 p-3">
                <summary className="font-bold text-amber-200 text-sm cursor-pointer">📖 Recursos ({phase.resources.length})</summary>
                <ul className="mt-2 space-y-1">
                  {phase.resources.map((r, i) => (
                    <li key={i} className="text-sm flex items-center gap-1"><ExternalLink size={14} /><a href={r.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{r.label}</a></li>
                  ))}
                </ul>
              </details>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

