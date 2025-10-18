export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export const selectSortOrder = (state) => state.tasks.sortOrder;

export const selectFilteredTasks = (state) => {
  const { tasks, filter } = state.tasks;
  if (filter === "activeTask") return tasks.filter((t) => !t.isDone);
  if (filter === "completedTask") return tasks.filter((t) => t.isDone);
  return tasks;
};

export const selectVisibleTasks = (state) => {
  const filtered = selectFilteredTasks(state);
  const { sortOrder } = state.tasks;

  return [...filtered].sort((a, b) =>
    sortOrder === "desc"
      ? b.createdAt - a.createdAt
      : a.createdAt - b.createdAt,
  );
};

export const selectCountActive = (state) => {
	const { tasks } = state.tasks;
	return tasks.filter((item) => !item.isDone).length;
}
