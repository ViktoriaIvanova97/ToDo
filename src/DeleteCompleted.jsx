import { useDispatch, useSelector } from 'react-redux'
import { deleteCompletedTasks } from './redux/api'
import { selectTasks } from './redux/selectors'

const DeleteCompleted = () => {
  const token = localStorage.getItem('token')
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const deleteCompleted = () => {
    dispatch(deleteCompletedTasks({ token, tasks }))
  }

  return (
    <div>
      <button onClick={deleteCompleted}>Очистить выполненные</button>
    </div>
  )
}

export default DeleteCompleted
