export const selectTasks = (state) => state.tasks.tasks
export const selectFilter = (state) => state.filter.filter
export const selectSortOrder = (state) => state.filter.sortOrder
export const selectorToken = (state) => state.auth.token
export const selectorLoading = (state) => state.auth.loading
export const selectorError = (state) => state.auth.error

export const task = (state) => state
export const selectFilteredTasks = (state) => {
  const tasks = state.tasks.tasks
  const filter = state.filter.filter
  if (filter === 'activeTask') return tasks.filter((t) => !t.isCompleted)
  if (filter === 'completedTask') return tasks.filter((t) => t.isCompleted)
  return tasks
}

export const selectVisibleTasks = (state) => {
  const filtered = selectFilteredTasks(state)
  const sortOrder = state.filter.sortOrder

  return [...filtered].sort((a, b) =>
    sortOrder === 'desc' ? b.id - a.id : a.id - b.id
  )
}

export const selectCountActive = (state) => {
  const tasks = state.tasks.tasks
  return tasks.filter((item) => !item.isCompleted).length
}
