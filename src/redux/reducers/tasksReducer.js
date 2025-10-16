const initialValue = {
  tasks: [],
  filter: "all",
};

export const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case "add":
      return {
        ...store,
        tasks: [
          ...store.tasks,
          { id: Date.now(), title: action.payload, isDone: false },
        ],
      };
    case "delete":
      return {
        ...store,
        tasks: store.tasks.filter((item) => item.id !== action.payload),
      };

    case "edit":
      return {
        ...store,
        tasks: store.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item,
        ),
      };

    case "toggleDone":
      return {
        ...store,
        tasks: store.tasks.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
        ),
      };
    default:
      return store;
  }
};
