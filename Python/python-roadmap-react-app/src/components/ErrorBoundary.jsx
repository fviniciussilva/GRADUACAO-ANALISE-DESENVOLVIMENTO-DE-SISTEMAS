import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-100 p-8">
          <div className="max-w-md text-center rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-5xl mb-3">💥</p>
            <h1 className="text-xl font-extrabold mb-2">Algo quebrou aqui</h1>
            <p className="text-sm text-slate-400 mb-4">Mas o resto do app continua funcionando. Tente recarregar.</p>
            <button onClick={() => location.reload()} className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-bold text-sm">↻ Recarregar</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
