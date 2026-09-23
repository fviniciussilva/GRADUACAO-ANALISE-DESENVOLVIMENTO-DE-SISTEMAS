# Backend demo p/ o React (FastAPI)
# pip install fastapi uvicorn
# uvicorn backend_main:app --reload --port 8000
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Python Roadmap API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/tasks')
def list_tasks():
    return [
        {'id': 1, 'title': 'Estudar Hooks (useState, useEffect)'},
        {'id': 2, 'title': 'Praticar Tailwind dark mode'},
        {'id': 3, 'title': 'Ligar React no FastAPI via VITE_API_URL'},
    ]


@app.get('/health')
def health():
    return {'ok': True}
