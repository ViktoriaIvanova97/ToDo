import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_DONE,
  SET_SORT_ORDER,
  SET_FILTER,
  DELETE_COMPLETED,
} from '../actions/tasksActionTypes'

export const addTaskAction = (title) => ({
  type: ADD_TASK,
  payload: title,
})

export const deleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: id,
})

export const editTaskAction = (id, title) => ({
  type: EDIT_TASK,
  payload: { id, title },
})

export const toggleDoneTaskAction = (id) => ({
  type: TOGGLE_DONE,
  payload: id,
})

export const setSortOrderAction = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
})

export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
})

export const deleteCompletedTasksAction = () => ({
  type: DELETE_COMPLETED,
})
