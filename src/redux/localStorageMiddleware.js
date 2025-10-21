export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();

  const actionsToSave = [
    "tasksList/addTask",
    "tasksList/deleteTask",
    "tasksList/editInput",
    "tasksList/toggle",
    "tasksList/deleteComp",
    "filter/filterTasks",
    "filter/sortTask",
  ];

  if (actionsToSave.includes(action.type)) {
    try {
      const dataToSave = {
        tasks: state.tasks.tasks,
        filter: state.filter.filter,
        sortOrder: state.filter.sortOrder,
      };
      localStorage.setItem("tasksState", JSON.stringify(dataToSave));
    } catch (e) {
      console.error("Ошибка при сохранении в localStorage:", e);
    }
  }

  return result;
};
