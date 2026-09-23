export const PHASES = [
  { icon: '📚', title: 'Fundamentos Básicos', desc: 'A base de tudo! Sem pular etapas.', color: 'from-rose-500 to-orange-400', topics: [
    { t: 'Instalação e Configuração', d: 'Python + VS Code/PyCharm + terminal' },
    { t: 'Primeiros Passos', d: 'print(), input(), vars, tipos' },
    { t: 'Operadores', d: 'Aritméticos, comparação, lógicos' },
    { t: 'Estruturas de Controle', d: 'if/elif/else, while, for, range()' },
    { t: 'Funções Básicas', d: 'def, parâmetros, return, escopo' },
    { t: 'Listas e Tuplas', d: 'slicing, append/pop, imutáveis' }],
    resources: [
      { label: 'Docs Oficial PT-BR', url: 'https://docs.python.org/pt-br/3/tutorial/' },
      { label: 'Exercism', url: 'https://exercism.org/tracks/python' }] },
  { icon: '🔧', title: 'Estruturas de Dados', desc: 'Essencial p/ qualquer programa.', color: 'from-amber-400 to-yellow-500', topics: [
    { t: 'Dicionários', d: 'chave-valor, get, comprehension' },
    { t: 'Sets', d: 'União, interseção, diferença' },
    { t: 'Strings', d: 'split, join, f-strings' },
    { t: 'List Comprehension', d: 'Sintaxe + condições' },
    { t: 'Arquivos', d: 'open(), with, CSV' },
    { t: 'Módulos', d: 'import, math, random, os' }],
    resources: [{ label: 'W3Schools', url: 'https://www.w3schools.com/python/' }] },
  { icon: '🎯', title: 'POO', desc: 'Paradigma dos projetos reais.', color: 'from-cyan-400 to-sky-600', topics: [
    { t: 'Classes e Objetos', d: 'class, __init__, self' },
    { t: 'Métodos', d: '__str__, mágicos' },
    { t: 'Encapsulamento', d: '@property' },
    { t: 'Herança', d: 'super(), MRO' },
    { t: 'Polimorfismo', d: 'duck typing' },
    { t: 'Abstratas', d: 'ABC' }],
    resources: [{ label: 'Real Python OOP', url: 'https://realpython.com/python3-object-oriented-programming/' }] },
  { icon: '🧩', title: 'Avançado', desc: 'Iniciante → profissional.', color: 'from-fuchsia-500 to-pink-500', topics: [
    { t: 'Erros', d: 'try/except, raise' },
    { t: 'Geradores', d: 'yield, itertools' },
    { t: 'Decorators', d: '@wraps' },
    { t: 'Lambda', d: 'map, filter' },
    { t: '*args/**kwargs', d: 'desempacotamento' },
    { t: 'Context Managers', d: 'with' }],
    resources: [{ label: 'Real Python', url: 'https://realpython.com/' }] },
  { icon: '📦', title: 'Bibliotecas', desc: 'Ecossistema essencial.', color: 'from-blue-500 to-indigo-600', topics: [
    { t: 'pip + venv', d: 'requirements, venv, conda' },
    { t: 'Padrão', d: 'os, json, re, datetime' },
    { t: 'Requests', d: 'APIs REST, JSON' },
    { t: 'NumPy', d: 'arrays, broadcasting' },
    { t: 'Pandas', d: 'DataFrames' },
    { t: 'Matplotlib', d: 'gráficos' }],
    resources: [{ label: 'Docs Pandas', url: 'https://pandas.pydata.org/docs/' }] },
  { icon: '🌐', title: 'Web', desc: 'Python + front moderno.', color: 'from-violet-600 to-purple-600', topics: [
    { t: 'Flask', d: 'rotas, Jinja2' },
    { t: 'Django', d: 'MVT, ORM, auth' },
    { t: 'FastAPI', d: 'OpenAPI auto' },
    { t: 'HTML/CSS', d: 'Flex/Grid' },
    { t: 'JS Essencial', d: 'DOM, fetch' },
    { t: 'DB', d: 'SQL, Postgres' }],
    resources: [{ label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' }] },
  { icon: '🗄️', title: 'Teste e DevOps', desc: 'Código profissional.', color: 'from-teal-400 to-emerald-600', topics: [
    { t: 'Testing', d: 'pytest, TDD' },
    { t: 'Type Hinting', d: 'mypy' },
    { t: 'Debug', d: 'pdb, logging' },
    { t: 'Git', d: 'branch, PR' },
    { t: 'CI/CD', d: 'Actions' },
    { t: 'Docker', d: 'compose' }],
    resources: [{ label: 'Pytest', url: 'https://docs.pytest.org/' }] },
  { icon: '🚀', title: 'Especialização', desc: 'Escolha e aprofunde!', color: 'from-orange-400 to-pink-600', topics: [
    { t: 'Data/ML', d: 'sklearn, torch' },
    { t: 'Web Avançado', d: 'async, OAuth' },
    { t: 'Automação', d: 'Selenium' },
    { t: 'Cloud', d: 'AWS/GCP' }],
    resources: [{ label: 'sklearn', url: 'https://scikit-learn.org/stable/' }] },
  { icon: '⚛️', title: 'Front-End Moderno com React', desc: 'NOVO! Python + interfaces profissionais.', isNew: true, color: 'from-cyan-400 via-sky-500 to-indigo-600', topics: [
    { t: 'React 18 + Vite', d: 'npm create vite, HMR, JSX, src/' },
    { t: 'Hooks', d: 'useState, useEffect, useMemo, custom hooks' },
    { t: 'Tailwind 3', d: 'utility-first, darkMode, responsivo' },
    { t: 'Router 6', d: 'Routes, useParams, loaders' },
    { t: 'Estado global', d: 'Zustand / Redux Toolkit / TanStack Query' },
    { t: 'Python <-> React', d: 'fetch→FastAPI, CORS, JWT, VITE_API_URL' },
    { t: 'Deploy', d: 'Vercel + Render, CI/CD' }],
    resources: [
      { label: 'React', url: 'https://react.dev/' },
      { label: 'Vite', url: 'https://vitejs.dev/' },
      { label: 'Tailwind', url: 'https://tailwindcss.com/docs' },
      { label: 'TanStack Query', url: 'https://tanstack.com/query/latest' }] }
];

export const TIPS = [
  'Pratique todo dia: 30min > 5h 1x/sem',
  'Crie projetos reais', 'Leia código no GitHub',
  'Não decore — entenda', 'Erre muito',
  'Comunidade', 'Leia a docs', 'Ensine p/ aprender',
  'Paciência', 'Code!'
];

