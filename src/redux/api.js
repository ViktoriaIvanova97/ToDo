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
