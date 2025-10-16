import { legacy_createStore, combineReducers } from "redux";
import { inputTextReducer } from "./reducers/inputTextReducer";
import { tasksReducer } from "./reducers/tasksReducer";

const store = legacy_createStore(
  combineReducers({
    text: inputTextReducer,
    tasks: tasksReducer,
  }),
);

export default store;
