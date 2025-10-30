import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addNewTask, } from './redux/api'

const Input = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleAddTask = () => {
    const trimmedText = value.trim()
    if (!trimmedText) return

    dispatch(addNewTask({ token, title: trimmedText }))
      .then((result) => {
        if (addNewTask.fulfilled.match(result)) {
          setValue('')
        } else {
          alert(result.payload || 'Ошибка при добавлении задачи')
        }
      })
      .catch(console.log)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask()
  }
  return (
    <div className="style">
      <input
        className="inputTask"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Введите текст задачи..."
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  )
}

export default Input
