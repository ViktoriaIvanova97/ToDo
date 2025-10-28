import { createSlice } from '@reduxjs/toolkit'
import { addNewTask ,getTasks } from '../redux/api'

const initialState = {
  tasks: [],
  loading: false,
  error:null
}

const tasksSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(addNewTask.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.loading = false
        state.tasks.push({
          id: Date.now(),
          title: action.payload.title,
          isDone: false,
          createdAt: Date.now(),
        })
        localStorage.setItem('tasksState', JSON.stringify(state.tasks))
      })
      .addCase(addNewTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false
        state.tasks = action.payload
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

  }
})

export const { addTask, deleteTask, toggle, editInput, deleteComp } = tasksSlice.actions
export default tasksSlice.reducer
