
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tasksState')
    if (!serializedState) return undefined
    const parsed = JSON.parse(serializedState)
    return {
      tasks: { tasks: parsed.tasks || [] },
      filter: {
        filter: parsed.filter || 'all',
        sortOrder: parsed.sortOrder || 'desc',
      },
    }
  } catch (e) {
    console.error('Ошибка загрузки из localStorage', e)
    return undefined
  }
}