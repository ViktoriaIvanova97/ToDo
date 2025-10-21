import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all',
  sortOrder: 'desc',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTasks(state, action) {
      state.filter = action.payload
    },
    sortTask(state, action) {
      state.sortOrder = action.payload
    },
  },
})

export const { filterTasks, sortTask } = filterSlice.actions
export default filterSlice.reducer
