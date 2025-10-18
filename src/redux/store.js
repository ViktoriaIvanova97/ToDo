import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";
import { localStorageMiddleware } from "./localStorageMiddleware";

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("tasksState");
    if (!state) return undefined;
    return { tasks: JSON.parse(state) };
  } catch (e) {
    console.error("Ошибка при загрузке из localStorage:", e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = legacy_createStore(
  rootReducer,
  persistedState,
  applyMiddleware(localStorageMiddleware),
);
