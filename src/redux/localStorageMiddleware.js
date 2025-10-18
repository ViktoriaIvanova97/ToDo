export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();

  const actionsToSave = [
    "add",
    "delete",
    "edit",
    "toggleDone",
    "deleteCompleted",
    "setSortOrder",
  ];

  if (actionsToSave.includes(action.type)) {
    try {
      localStorage.setItem("tasksState", JSON.stringify(state.tasks));
    } catch (e) {
      console.error("Ошибка при сохранении в localStorage:", e);
    }
  }

  return result;
};
