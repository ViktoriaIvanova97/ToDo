import tasksReducer from '../slices/tasksSlice'
import filterReducer from '../slices/filterSlice'
import { localStorageMiddleware } from './localStorageMiddleware'
import { configureStore } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('tasksState')
    if (!state) return undefined
    const parsed = JSON.parse(state)
    return {
      tasks: { tasks: parsed.tasks || [] },
      filter: {
        filter: parsed.filter || 'all',
        sortOrder: parsed.sortOrder || 'desc',
      },
    }
  } catch (e) {
    console.error('Ошибка при загрузке из localStorage:', e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})
