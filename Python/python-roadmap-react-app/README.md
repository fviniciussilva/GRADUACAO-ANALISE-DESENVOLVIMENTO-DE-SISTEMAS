# 🐍 Python Roadmap 2.0 — React + Vite

[![CI](https://github.com/fviniciussilva/GRADUACAO-ANALISE-DESENVOLVIMENTO-DE-SISTEMAS/actions/workflows/ci-react-roadmap.yml/badge.svg)](https://github.com/fviniciussilva/GRADUACAO-ANALISE-DESENVOLVIMENTO-DE-SISTEMAS/actions/workflows/ci-react-roadmap.yml)
[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fviniciussilva/GRADUACAO-ANALISE-DESENVOLVIMENTO-DE-SISTEMAS&project-name=python-roadmap-react&repository-name=python-roadmap-react&root-directory=Python/python-roadmap-react-app)

Roadmap Python reescrito como app **React moderno**.

> 🌐 **Demo ao vivo:** após o deploy, coloque a URL aqui. Ex.: `https://python-roadmap-react.vercel.app`

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

## Deploy

### Opção 1 — Vercel (recomendado, grátis)
1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repo `GRADUACAO-ANALISE-DESENVOLVIMENTO-DE-SISTEMAS`
2. Configure:
   - **Root Directory:** `Python/python-roadmap-react-app`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy! O `vercel.json` do projeto já cuida do resto.

### Opção 2 — Netlify (grátis)
1. Acesse [app.netlify.com](https://app.netlify.com) → Add new site → Import
2. Configure:
   - **Base directory:** `Python/python-roadmap-react-app`
   - **Build command:** `npm run build`
   - **Publish directory:** `Python/python-roadmap-react-app/dist`
3. Ou arraste a pasta `dist/` no [Netlify Drop](https://app.netlify.com/drop) para preview rápido.

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

