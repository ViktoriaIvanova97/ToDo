import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editInput } from './slices/tasksSlice'
import { deleteTask, toggleTaskDone } from './redux/api'

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false)
  const [editTask, setEditTask] = useState(task.title)
  const token = localStorage.getItem('token')

  const dispatch = useDispatch()

  const deleteOneTask = () => {
    dispatch(deleteTask({ token, id: task.id }))
  }

  const toggleDone = () => {
    dispatch(
      toggleTaskDone({ token, id: task.id, isCompleted: task.isCompleted })
    )
  }

  const handleDownEnter = (e) => {
    if (e.key === 'Enter') {
      saveEdit()
    }
  }
  const saveEdit = () => {
    if (editTask.trim() === '') return
    dispatch(editInput({ id: task.id, title: editTask }))
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
        <input type="checkbox" checked={task.isCompleted} onChange={toggleDone} />
        {!edit ? (
          <p className={task.isCompleted ? 'active' : ''} style={{ width: '125px' }}>
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
      <button onClick={deleteOneTask}>&times;</button>
    </div>
  )
}

export default Task
