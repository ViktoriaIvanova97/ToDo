const initialValue = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: localStorage.getItem("filter") || "all",
  sortOrder: localStorage.getItem("sortOrder") || "desc",
};

export const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case "add":
      return {
        ...store,
        tasks: [
          ...store.tasks,
          {
            id: Date.now(),
            title: action.payload,
            isDone: false,
            createdAt: Date.now(),
          },
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
    case "setSortOrder":
      return {
        ...store,
        sortOrder: action.payload,
        tasks: [...store.tasks].sort((a, b) =>
          action.payload === "desc"
            ? b.createdAt - a.createdAt
            : a.createdAt - b.createdAt,
        ),
      };

    case "setFilter":
      return { ...store, filter: action.payload };

    case "deleteCompleted": {
      return { ...store, tasks: store.tasks.filter((item) => !item.isDone) };
    }
    default:
      return store;
  }
};
