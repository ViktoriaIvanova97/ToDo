import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_DONE,
  SET_SORT_ORDER,
  SET_FILTER,
  DELETE_COMPLETED,
} from '../actions/tasksActionTypes'

const initialValue = {
  tasks: [],
  filter: 'all',
  sortOrder: 'desc',
}

export const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case ADD_TASK:
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
      }
    case DELETE_TASK:
      return {
        ...store,
        tasks: store.tasks.filter((item) => item.id !== action.payload),
      }

    case EDIT_TASK:
      return {
        ...store,
        tasks: store.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      }

    case TOGGLE_DONE:
      return {
        ...store,
        tasks: store.tasks.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      }
    case SET_SORT_ORDER:
      return {
        ...store,
        sortOrder: action.payload,
      }

    case SET_FILTER:
      return { ...store, filter: action.payload }

    case DELETE_COMPLETED: {
      return { ...store, tasks: store.tasks.filter((item) => !item.isDone) }
    }
    default:
      return store
  }
}
