import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ username, email, password, gender, age }, thunkAPI) => {
    try {
      const res = await fetch(
        'https://todo-redev.herokuapp.com/api/users/register',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password, gender, age }),
        }
      )
      const response = await res.json()

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          response.message || 'Ошибка регистрации'
        )
      }

      localStorage.setItem('token', response.token)
      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch(
        'https://todo-redev.herokuapp.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      )
      const response = await res.json()

      if (!res.ok) {
        return thunkAPI.rejectWithValue(response.message || 'Ошибка логина')
      }

      localStorage.setItem('token', response.token)
      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const addNewTask = createAsyncThunk(
  'tasksList/addNewTask',
  async ({ token, title }, thunkAPI) => {
    try {
      const res = await fetch('https://todo-redev.herokuapp.com/api/todos', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      })
      const response = await res.json()

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          response.message || 'Ошибка добавления задачи'
        )
      }

      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const getTasks = createAsyncThunk(
  'tasksList/getTasks',
  async ({ token }, thunkAPI) => {
    try {
      const res = await fetch('https://todo-redev.herokuapp.com/api/todos', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const response = await res.json()

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          response.message || 'Ошибка получения задач'
        )
      }

      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteTask = createAsyncThunk(
  'tasksList/deleteTask',
  async ({ token, id }, thunkAPI) => {
    try {
      const res = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const response = await res.json()
      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          response.message || 'Ошибка удаления задачи'
        )
      }

      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const toggleTaskDone = createAsyncThunk(
  'tasksList/toggleTaskDone',
  async ({ token, id, isCompleted }, thunkAPI) => {
    try {
      const res = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
        {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const response = await res.json({ isCompleted: !isCompleted })

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          response.message || 'Ошибка чекбокса isCompleted'
        )
      }

      return { id, isCompleted: !isCompleted }
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteCompletedTasks = createAsyncThunk(
  'tasksList/deleteCompletedTasks ',
  async ({ token, tasks },thunkAPI) => {
    try {

      const completedTasks = tasks.filter((t) => t.isCompleted)


      await Promise.all(
        completedTasks.map((t) =>
          fetch(`https://todo-redev.herokuapp.com/api/todos/${t.id}`, {
            method: 'DELETE',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
        )
      )

      return completedTasks.map((t) => t.id)
    } catch (error) {
		return thunkAPI.rejectWithValue(error.message)
    }
  }
)
