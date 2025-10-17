import { legacy_createStore } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";

const store = legacy_createStore(tasksReducer);

export default store;
