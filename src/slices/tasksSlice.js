import { createSlice } from '@reduxjs/toolkit'
import {
  addNewTask,
  getTasks,
  deleteTask,
  toggleTaskDone,
  deleteCompletedTasks,
} from '../redux/api'

const initialState = {
  tasks: [],
  loading: false,
  error: null,
}

const tasksSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    editInput(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload.id)
      if (task) task.title = action.payload.title
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
        state.tasks.push(action.payload)
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
      .addCase(deleteTask.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false
        state.tasks = state.tasks.filter(
          (item) => item.id !== action.payload.id
        )
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(toggleTaskDone.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(toggleTaskDone.fulfilled, (state, action) => {
        state.loading = false
        const task = state.tasks.find((item) => item.id === action.payload.id)
        if (task) {
          task.isCompleted = action.payload.isCompleted
        }
      })
      .addCase(toggleTaskDone.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteCompletedTasks.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteCompletedTasks.fulfilled, (state, action) => {
        state.loading = false
        state.tasks = state.tasks.filter(
          (item) => !action.payload.includes(item.id)
        )
      })
      .addCase(deleteCompletedTasks.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { editInput } = tasksSlice.actions
export default tasksSlice.reducer
