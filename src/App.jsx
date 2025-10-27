import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import ToDoForm from './ToDoForm'
import RegisterForm from './RegisterForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registerform" replace />} />
      <Route path="/registerform" element={<RegisterForm />} />
      <Route path="/todoform" element={<ToDoForm />} />
    </Routes>
  )
}

export default App
