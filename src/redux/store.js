import { tasksReducer } from './reducers/tasksReducer'
import { localStorageMiddleware } from './localStorageMiddleware'
import { configureStore } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('tasksState')
    if (!state) return undefined
    return { tasks: JSON.parse(state) }
  } catch (e) {
    console.error('Ошибка при загрузке из localStorage:', e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})
