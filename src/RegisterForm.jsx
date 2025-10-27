import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [changeForm, setChangeForm] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      //   await register(username, email, password, gender, age);
      alert('Регистрация успешна!')
      navigate('/todoform')
      setUsername('')
      setEmail('')
      setPassword('')
      setGender('')
      setAge('')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLogin = async () => {
    try {
      //   await login(email, password);
      alert('Вход успешен!')
      navigate('/todoform')
      setEmail('')
      setPassword('')
    } catch (error) {
      alert(error.message)
    }
  }

  return changeForm ? (
    <form className="registerForm" autoComplete="off">
      <h2>Регистрация</h2>
      <input
        className="inputRegister"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя"
        autoComplete="off"
      />
      <input
        className="inputRegister"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
      />
      <input
        className="inputRegister"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="new-password"
      />
      <select
        className="inputRegister"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Выберите пол</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
      <input
        className="inputRegister"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Возраст"
        autoComplete="off"
      />
      <button type="button" onClick={handleRegister}>
        Зарегистрироваться
      </button>
      <div style={{ display: 'flex', alignItems: ' center', gap: ' 15px' }}>
        <h3>Уже есть аккаунт? </h3>
        <button type="button" onClick={() => setChangeForm(false)}>
          Логин
        </button>
      </div>
    </form>
  ) : (
    <form className="registerForm" autoComplete="off">
      <h2>Авторизация</h2>
      <input className="inputRegister"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
      />
      <input className="inputRegister"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="new-password"
      />
      <button type="button" onClick={handleLogin}>
        Войти
      </button>
      <div style={{ display: 'flex', alignItems: ' center', gap: ' 15px' }}>
        <h3>Еще нет аккаунта?</h3>
        <button type="button" onClick={() => setChangeForm(true)}>
          Регистрация
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
