import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import tasksReducer from '../slices/tasksSlice'
import filterReducer from '../slices/filterSlice'
import { loadFromLocalStorage} from './localStorage'

const persistedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState,
})
store.subscribe(() => {
  const state = store.getState()
  try {
    const dataToSave = {
      tasks: state.tasks.tasks,
      filter: state.filter.filter,
      sortOrder: state.filter.sortOrder,
    }
    localStorage.setItem('tasksState', JSON.stringify(dataToSave))
  } catch (e) {
    console.error('Ошибка при сохранении в localStorage:', e)
  }
})
