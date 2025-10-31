import './App.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import TasksList from './TasksList'
import TasksFilter from './TasksFilter'
import DeleteCompleted from './DeleteCompleted'
import CountActive from './CountActive'
import { logout } from './slices/authSlice'

function ToDoForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/registerform')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h2>To-Do List</h2>
      <div className="component">
        <Input />
      </div>
      <div className="component">
        <TasksList />
      </div>
      <div className="component">
        <TasksFilter />
      </div>
      <div
        className="component"
        style={{
          display: 'flex',
          width: '370px',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#333',
          fontWeight: '500',
        }}
      >
        <DeleteCompleted />
        <CountActive />
      </div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default ToDoForm
