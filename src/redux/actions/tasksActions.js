export const addTaskAction = (title) => ({
  type: "add",
  payload: title,
});

export const deleteTaskAction = (id) => ({
  type: "delete",
  payload: id,
});

export const editTaskAction = (id, title) => ({
  type: "edit",
  payload: { id, title },
});

export const toggleDoneTaskAction = (id) => ({
  type: "toggleDone",
  payload: id,
});

export const setSortOrderAction = (order) => ({
  type: "setSortOrder",
  payload: order,
});

export const setFilterAction = (filter) => ({
  type: "setFilter",
  payload: filter,
});

export const deleteCompletedTasksAction = () => ({
  type: "deleteCompleted",
});
