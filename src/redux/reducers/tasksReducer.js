const initialValue = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: localStorage.getItem("filter") || "all",
  sortOrder: localStorage.getItem("sortOrder") || "desc",
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case "add": {
      const updatedTasks = [
        ...store.tasks,
        {
          id: Date.now(),
          title: action.payload,
          isDone: false,
          createdAt: Date.now(),
        },
      ];
      saveToLocalStorage("tasks", updatedTasks);
      return { ...store, tasks: updatedTasks };
    }
    case "delete": {
      const updatedTasks = store.tasks.filter(
        (item) => item.id !== action.payload,
      );
      saveToLocalStorage("tasks", updatedTasks);
      return { ...store, tasks: updatedTasks };
    }

    case "edit": {
      const updatedTasks = store.tasks.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item,
      );
      saveToLocalStorage("tasks", updatedTasks);
      return { ...store, tasks: updatedTasks };
    }

    case "toggleDone": {
      const updatedTasks = store.tasks.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
      );
      saveToLocalStorage("tasks", updatedTasks);
      return { ...store, tasks: updatedTasks };
    }

    case "setSortOrder": {
      const sortedTasks = [...store.tasks].sort((a, b) =>
        action.payload === "desc"
          ? b.createdAt - a.createdAt
          : a.createdAt - b.createdAt,
      );
      saveToLocalStorage("sortOrder", action.payload);
      saveToLocalStorage("tasks", sortedTasks);
      return { ...store, sortOrder: action.payload, tasks: sortedTasks };
    }

    case "setFilter": {
      localStorage.setItem("filter", action.payload);
      return { ...store, filter: action.payload };
    }

    case "deleteCompleted": {
      const updatedTasks = store.tasks.filter((item) => !item.isDone);
      saveToLocalStorage("tasks", updatedTasks);
      return { ...store, tasks: updatedTasks };
    }
    default:
      return store;
  }
};
