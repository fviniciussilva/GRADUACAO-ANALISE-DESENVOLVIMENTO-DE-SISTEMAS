import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const todayKey = () => new Date().toISOString().slice(0, 10)

export const useRoadmapStore = create(
  persist(
    (set, get) => ({
      checked: {},
      dark: true,
      query: '',
      showPendingOnly: false,
      streak: 0,
      lastVisit: null,

      toggleTopic: (key) =>
        set((s) => {
          const next = { ...s.checked }
          if (next[key]) delete next[key]
          else next[key] = true
          return { checked: next }
        }),
      reset: () => set({ checked: {} }),
      setDark: (dark) => set({ dark }),
      setQuery: (query) => set({ query }),
      setShowPendingOnly: (v) => set({ showPendingOnly: v }),

      touchVisit: () => {
        const t = todayKey()
        const { lastVisit, streak } = get()
        if (lastVisit === t) return
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
        set({ lastVisit: t, streak: lastVisit === yesterday ? (streak || 0) + 1 : 1 })
      },

      exportData: () => JSON.stringify({ checked: get().checked, exportedAt: new Date().toISOString() }, null, 2),
      importData: (json) => {
        const parsed = JSON.parse(json)
        if (!parsed || typeof parsed.checked !== 'object') throw new Error('Arquivo inválido')
        set({ checked: parsed.checked })
      }
    }),
    { name: 'python-roadmap-v2' }
  )
)

