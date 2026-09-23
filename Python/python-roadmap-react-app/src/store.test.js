import { describe, it, expect, beforeEach } from 'vitest'
import { useRoadmapStore } from './store/useRoadmapStore'

beforeEach(() => {
  useRoadmapStore.setState({ checked: {}, query: '', showPendingOnly: false, streak: 0, lastVisit: null })
})

describe('roadmap store', () => {
  it('marca e desmarca tópico', () => {
    const { toggleTopic } = useRoadmapStore.getState()
    toggleTopic('8-0')
    expect(useRoadmapStore.getState().checked['8-0']).toBe(true)
    toggleTopic('8-0')
    expect(useRoadmapStore.getState().checked['8-0']).toBeUndefined()
  })

  it('calcula progresso', () => {
    const { toggleTopic } = useRoadmapStore.getState()
    toggleTopic('0-0')
    toggleTopic('0-1')
    const done = Object.values(useRoadmapStore.getState().checked).filter(Boolean).length
    expect(done).toBe(2)
  })

  it('reseta tudo', () => {
    const s = useRoadmapStore.getState()
    s.toggleTopic('1-1')
    s.reset()
    expect(Object.keys(useRoadmapStore.getState().checked)).toHaveLength(0)
  })

  it('exporta e importa JSON', () => {
    const s = useRoadmapStore.getState()
    s.toggleTopic('2-3')
    const json = s.exportData()
    s.reset()
    expect(Object.keys(useRoadmapStore.getState().checked)).toHaveLength(0)
    useRoadmapStore.getState().importData(json)
    expect(useRoadmapStore.getState().checked['2-3']).toBe(true)
  })

  it('rejeita JSON inválido', () => {
    expect(() => useRoadmapStore.getState().importData('{"x":1}')).toThrow()
  })
})
