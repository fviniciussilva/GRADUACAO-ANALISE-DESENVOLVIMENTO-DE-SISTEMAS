# 🐍 Python Roadmap 2.0 — React + Vite

Roadmap Python reescrito como app **React moderno**.

## Stack
- ⚛️ React 18 + Vite 5
- 🎨 TailwindCSS 3 (darkMode `class`)
- 🗂️ React Router (HashRouter — funciona em hospedagem estática sem rewrite)
- 🐻 Zustand + persist (estado global + localStorage)
- 🔌 TanStack Query (dados da API FastAPI)
- ✨ Framer Motion + Lucide

## Rodar
```powershell
cd python-roadmap-react-app
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # testa o build
npm test         # vitest run
```

## Env
Copie `.env.example` para `.env`:
```
VITE_API_URL=http://localhost:8000
```

## Backend exemplo (FastAPI)
```powershell
pip install fastapi uvicorn
uvicorn backend_main:app --reload --port 8000
```
Rota usada: `GET /tasks` → `[{id, title}]`. Veja `backend_main.py`.

## Funcionalidades
- 9 fases (8 originais + Fase React nova)
- Busca, filtro "só pendentes", progresso por fase + total
- Dark/light mode real, streak 🔥, export/import JSON
- Página `/react`, 404, ErrorBoundary, print/PDF
- A11y: aria-expanded, progressbar, labels, foco visível
