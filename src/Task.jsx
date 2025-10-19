import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteTaskAction,
  editTaskAction,
  toggleDoneTaskAction,
} from './redux/actions/tasksActions'

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false)
  const [editTask, setEditTask] = useState(task.title)

  const dispatch = useDispatch()

  const deleteTask = () => {
    dispatch(deleteTaskAction(task.id))
  }

  const toggleDone = () => {
    dispatch(toggleDoneTaskAction(task.id))
  }

  const handleDownEnter = (e) => {
    if (e.key === 'Enter') {
      saveEdit()
    }
  }
  const saveEdit = () => {
    if (editTask.trim() === '') return
    dispatch(editTaskAction(task.id, editTask))
    setEdit(false)
  }
  const handleEditClick = () => {
    if (edit) {
      saveEdit()
    } else {
      setEdit(true)
    }
  }

  return (
    <div className="style" style={{ paddingTop: '20px' }}>
      <label className="checkbox-wrapper">
        <input type="checkbox" checked={task.isDone} onChange={toggleDone} />
        {!edit ? (
          <p className={task.isDone ? 'active' : ''} style={{ width: '125px' }}>
            {task.title}
          </p>
        ) : (
          <input
            className="editInput"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            onKeyDown={handleDownEnter}
            autoFocus
          />
        )}
      </label>
      <button onClick={handleEditClick}>
        {edit ? 'Сохранить' : 'Изменить'}
      </button>
      <button onClick={deleteTask}>&times;</button>
    </div>
  )
}

export default Task
