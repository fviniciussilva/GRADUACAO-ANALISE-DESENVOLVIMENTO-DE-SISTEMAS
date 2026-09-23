import { useEffect } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import PhaseCard from './components/PhaseCard'
import CodeDemo from './components/CodeDemo'
import ApiDemo from './components/ApiDemo'
import ErrorBoundary from './components/ErrorBoundary'
import { PHASES, TIPS } from './data/phases'
import { useRoadmapStore } from './store/useRoadmapStore'
import './index.css'

const qc = new QueryClient()

function Home() {
  const { checked, dark, streak, touchVisit, showPendingOnly } = useRoadmapStore()
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    touchVisit()
  }, [dark])
  const total = PHASES.reduce((a, p) => a + p.topics.length, 0)
  const done = Object.values(checked).filter(Boolean).length
  const pct = total ? Math.round((done / total) * 100) : 0
  const shell = dark
    ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-slate-100'
    : 'bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900'

  return (
    <div className={`min-h-screen ${shell}`}>
      <Navbar total={total} pct={pct} streak={streak} />
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-8 text-center relative">
        <p className="inline-block text-xs font-mono px-3 py-1 rounded-full glass mb-4">⚛️ React 18 • Vite • Tailwind • Zustand • Router • Query • Motion</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-black">🐍 Python <span className="grad-text">ROADMAP 2.0</span></motion.h1>
        <p className="mt-3 max-w-2xl mx-auto opacity-80">Seu roadmap original como <b>app React moderno</b> + <b>Fase 9 de Front-End</b>.</p>
        <div className="mt-6 max-w-xl mx-auto glass rounded-2xl p-4">
          <div className="flex justify-between text-sm mb-2"><span className="font-bold">📊 Progresso</span><span className="font-mono">{done}/{total} • {pct}%</span></div>
          <div className="h-3 rounded-full bg-white/10 overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label="Progresso total">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 transition-all duration-700" style={{ width: pct + '%' }} />
          </div>
          {pct === 100 && <p className="mt-2 text-2xl">🎉 Roadmap concluído! 🎉</p>}
          {showPendingOnly && <p className="mt-2 text-xs font-mono opacity-70">Filtro: só pendentes</p>}
          <div className="mt-3 flex gap-2 justify-center flex-wrap">
            <a href="#fase-8" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-bold text-sm shadow-glow text-white">⚛️ Ver Fase React</a>
            <Link to="/react" className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm hover:bg-white/20">📄 Página /react</Link>
            <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm hover:bg-white/20">🖨️ PDF</button>
          </div>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-5">
        {PHASES.map((ph, i) => (
          <ErrorBoundary key={i}>
            <PhaseCard phase={ph} idx={i + 1} index={i} />
          </ErrorBoundary>
        ))}
        <CodeDemo />
        <ApiDemo />
        <section className="rounded-3xl p-6 bg-gradient-to-r from-violet-600 to-indigo-600 shadow-glow text-white">
          <h3 className="text-xl font-extrabold mb-3">🎓 Dicas de ouro</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">{TIPS.map((t, i) => <li key={i} className="bg-white/10 rounded-xl px-3 py-2">✅ {t}</li>)}</ul>
        </section>
        <footer className="text-center text-xs opacity-60 pt-4">🐍 Roadmap 2.0 em React • <a className="underline" href="../python-roadmap.html">versão original</a></footer>
      </main>
    </div>
  )
}

function ReactPage() {
  const { dark } = useRoadmapStore()
  return (
    <div className={`min-h-screen p-8 ${dark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-cyan-500 underline">← Voltar</Link>
        <h1 className="text-4xl font-black mt-4">⚛️ Trilha Front-End Moderno</h1>
        <ol className="mt-4 space-y-2 text-sm list-decimal ml-5">
          <li><b>Vite:</b> <span className="font-mono">npm create vite@latest app -- --template react</span></li>
          <li><b>Tailwind:</b> <span className="font-mono">npm i -D tailwindcss postcss autoprefixer</span></li>
          <li><b>Router:</b> HashRouter + Routes (sem 404 no estático)</li>
          <li><b>Dados:</b> TanStack Query p/ FastAPI; Zustand p/ UI</li>
          <li><b>Integração:</b> <span className="font-mono">VITE_API_URL=http://localhost:8000</span> + CORS</li>
          <li><b>Deploy:</b> front Vercel + API Render/Railway</li>
        </ol>
        <div className="mt-6"><CodeDemo /></div>
        <div className="mt-4"><ApiDemo /></div>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-100 p-8">
      <div className="text-center">
        <p className="text-6xl mb-2">🐍💨</p>
        <h1 className="text-3xl font-black">404 — Rota não encontrada</h1>
        <Link to="/" className="inline-block mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-bold text-sm">← Voltar ao início</Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  )
}


