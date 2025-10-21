import { useDispatch } from 'react-redux'
import { deleteComp } from './slices/tasksSlice'

const DeleteCompleted = () => {
  const dispatch = useDispatch()

  const deleteCompleted = () => {
    dispatch(deleteComp())
  }

  return (
    <div>
      <button onClick={deleteCompleted}>Очистить выполненные</button>
    </div>
  )
}

export default DeleteCompleted
