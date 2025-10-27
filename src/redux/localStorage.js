export const loadFromLocalStorage = () => {
	try {
	  const state = localStorage.getItem('tasksState')
	  if (!state) return undefined
	  const parsed = JSON.parse(state)
	  return {
		tasks: { tasks: parsed.tasks || [] },
		filter: {
		  filter: parsed.filter || 'all',
		  sortOrder: parsed.sortOrder || 'desc',
		},
	  }
	} catch (e) {
	  console.error('Ошибка при загрузке из localStorage:', e)
	  return undefined
	}
  }