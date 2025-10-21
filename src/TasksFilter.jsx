import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from './redux/selectors'
import { filterTasks } from './slices/filterSlice'

const TasksFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const setFilter = (newFilter) => {
    dispatch(filterTasks(newFilter))
  }

  return (
    <div className="style">
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Все
      </button>
      <button
        onClick={() => setFilter('completedTask')}
        disabled={filter === 'completedTask'}
      >
        Выполненные
      </button>
      <button
        onClick={() => setFilter('activeTask')}
        disabled={filter === 'activeTask'}
      >
        Активные
      </button>
    </div>
  )
}

export default TasksFilter
