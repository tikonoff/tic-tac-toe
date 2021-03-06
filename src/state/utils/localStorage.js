import emptyState from '../emptyState'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('gameState')
    return serializedState ? JSON.parse(serializedState) : emptyState
  } catch (e) {
    return emptyState
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('gameState', serializedState)
  } catch (e) {
    // ignore
  }
}

export const clearState = state => localStorage.clear()
