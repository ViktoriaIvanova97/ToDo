import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import tasksReducer from '../slices/tasksSlice'
import filterReducer from '../slices/filterSlice'
import { loadFromLocalStorage } from './localStorage'

const persistedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState,
})
