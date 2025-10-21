import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        isDone: false,
        createdAt: Date.now(),
      })
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload)
    },
    toggle(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload)
      if (task) task.isDone = !task.isDone
    },
    editInput(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload.id)
      if (task) task.title = action.payload.title
    },
    deleteComp(state) {
      state.tasks = state.tasks.filter((item) => !item.isDone)
    },
  },
})

export const { addTask, deleteTask, toggle, editInput, deleteComp } = tasksSlice.actions
export default tasksSlice.reducer
