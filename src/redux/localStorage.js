
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tasksState')
    if (!serializedState) return undefined
    const parsed = JSON.parse(serializedState)
    console.log(parsed);
    return {
      tasks: { tasks: parsed || [] },
    }
  } catch (e) {
    console.error('Ошибка загрузки из localStorage', e)
    return undefined
  }
}
