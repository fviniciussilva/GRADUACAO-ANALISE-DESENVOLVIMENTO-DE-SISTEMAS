import { Moon, Sun, Search, RotateCcw, Download, Upload, ListFilter } from 'lucide-react'
import { useRef } from 'react'
import { useRoadmapStore } from '../store/useRoadmapStore'

export default function Navbar({ total, pct, streak }) {
  const { dark, setDark, query, setQuery, reset, showPendingOnly, setShowPendingOnly, exportData, importData } = useRoadmapStore()
  const fileRef = useRef(null)

  const onExport = () => {
    const blob = new Blob([exportData()], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'python-roadmap-progresso.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const onImportFile = async (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    try {
      const text = await f.text()
      importData(text)
      alert('Progresso importado! ✅')
    } catch {
      alert('Arquivo inválido ❌')
    } finally {
      e.target.value = ''
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-300 to-emerald-500 grid place-items-center text-2xl shadow-glow" aria-hidden>🐍</div>
        <div className="leading-tight">
          <p className="font-extrabold">Python Roadmap <span className="text-xs ml-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600">React 2.0</span></p>
          <p className="text-xs text-slate-400 font-mono">{pct}% • {total} tópicos{streak > 0 ? ` • 🔥 ${streak}d` : ''}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              aria-label="Buscar tópicos"
              value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar: hooks, pandas..."
              className="w-64 text-sm pl-9 pr-3 py-2 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-400 focus-visible:ring-2" />
          </div>
          <button title="Só pendentes" aria-pressed={showPendingOnly} onClick={() => setShowPendingOnly(!showPendingOnly)}
            className={`p-2 rounded-xl border transition ${showPendingOnly ? 'bg-cyan-500/30 border-cyan-400' : 'bg-white/10 border-white/10 hover:bg-white/20'}`}>
            <ListFilter size={18} />
          </button>
          <button title="Exportar progresso (JSON)" onClick={onExport} className="p-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20"><Download size={18} /></button>
          <button title="Importar progresso (JSON)" onClick={() => fileRef.current?.click()} className="p-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20"><Upload size={18} /></button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={onImportFile} />
          <button title={dark ? 'Modo claro' : 'Modo escuro'} aria-label="Alternar tema" onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button title="Resetar progresso" onClick={() => { if (confirm('Resetar todo o progresso?')) reset() }} className="p-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20"><RotateCcw size={18} /></button>
        </div>
      </div>
      <div className="sm:hidden px-4 pb-3">
        <input aria-label="Buscar tópicos" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="🔍 Buscar..."
          className="w-full text-sm px-3 py-2 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
    </header>
  )
}

