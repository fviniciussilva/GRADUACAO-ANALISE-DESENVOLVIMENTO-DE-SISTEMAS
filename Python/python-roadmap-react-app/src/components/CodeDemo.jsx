import { useState } from 'react'

const SNIPPETS = {
  react: `// App.jsx — React 18 + Vite
import { useState, useEffect } from 'react'
export default function Lista() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/tasks')
      .then(r => r.json()).then(setTasks)
  }, [])
  return <ul>{tasks.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}`,
  api: `# main.py — FastAPI p/ o React
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"],
  allow_methods=["*"], allow_headers=["*"])
@app.get("/tasks")
def list_tasks():
    return [{"id": 1, "title": "Estudar Hooks"}]`,
  tail: `{/* Tailwind — card dark + responsivo */}
<div className="p-6 max-w-sm rounded-2xl bg-white
  dark:bg-slate-800 shadow-xl hover:scale-105 transition">
  <h3 className="font-bold">Fase 9: React</h3>
</div>`
}

export default function CodeDemo() {
  const [tab, setTab] = useState('react')
  return (
    <section className="rounded-3xl bg-white/[.04] border border-white/10 p-5 sm:p-7">
      <h2 className="text-2xl font-extrabold">💻 Python + React na prática</h2>
      <p className="text-sm text-slate-400 mb-4">Como o front conversa com o backend Python:</p>
      <div className="flex gap-2 mb-3">
        {Object.keys(SNIPPETS).map((k) => (
          <button key={k} onClick={() => setTab(k)} className={`px-4 py-2 rounded-xl text-sm font-bold transition ${tab === k ? 'bg-gradient-to-r from-cyan-500 to-violet-600' : 'bg-white/10 hover:bg-white/20'}`}>
            {k === 'react' ? '⚛️ React' : k === 'api' ? '🐍 FastAPI' : '🎨 Tailwind'}
          </button>
        ))}
      </div>
      <pre className="overflow-x-auto text-[13px] font-mono bg-black/50 border border-white/10 rounded-2xl p-4 whitespace-pre-wrap">{SNIPPETS[tab]}</pre>
    </section>
  )
}
