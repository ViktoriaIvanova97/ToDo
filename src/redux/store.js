import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../slices/tasksSlice'
import filterReducer from '../slices/filterSlice'
import { loadFromLocalStorage } from './localStorage'

const persistedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState,
})
