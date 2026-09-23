import { useQuery } from '@tanstack/react-query'

const API = import.meta.env.VITE_API_URL || ''

async function fetchTasks() {
  if (!API) throw new Error('no-api')
  const res = await fetch(`${API}/tasks`)
  if (!res.ok) throw new Error('http ' + res.status)
  return res.json()
}

export default function ApiDemo() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    retry: false
  })

  return (
    <section className="rounded-3xl bg-white/[.04] border border-white/10 p-5 sm:p-7">
      <h2 className="text-2xl font-extrabold mb-1">🔌 TanStack Query + FastAPI (ao vivo)</h2>
      <p className="text-sm text-slate-400 mb-4">
        Exemplo real de <code className="font-mono">useQuery</code> buscando de <code className="font-mono">VITE_API_URL/tasks</code>.
        Sem backend, mostra fallback local.
      </p>
      {isLoading && <p className="text-sm font-mono">⏳ carregando…</p>}
      {isError && (
        <div className="text-sm rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4">
          <p className="font-bold mb-1">⚠️ Sem API conectada (modo demo)</p>
          <p className="text-slate-300 mb-2">Suba o FastAPI e defina <span className="font-mono">VITE_API_URL=http://localhost:8000</span> no .env</p>
          <pre className="font-mono text-xs bg-black/40 rounded-xl p-3 overflow-x-auto"># main.py
from fastapi import FastAPI
app = FastAPI()
@app.get('/tasks')
def list_tasks():
    return [{'{'}'id': 1, 'title': 'Estudar Hooks'{'}'}]</pre>
          <button onClick={() => refetch()} className="mt-3 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm hover:bg-white/20">↻ Tentar de novo</button>
        </div>
      )}
      {data && (
        <ul className="space-y-2">
          {data.map((t) => (
            <li key={t.id} className="text-sm rounded-xl bg-emerald-500/10 border border-emerald-400/30 px-3 py-2">✅ {t.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
