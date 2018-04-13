import { handleActions } from 'redux-actions'

const defaultState = {
  isAuthenticated: Boolean(localStorage.getItem('id_token')),
  roles: []
}

export const user = handleActions({
  USER_LOGGED_SUCCESS: (state, action) => {
    return {
      ...state,
      roles: action.payload.roles,
      isAuthenticated: true,
      user: action.payload.user_name,
      email: action.payload.email
    }
  },
  USER_LOGGED_OUT_SUCCESS: (state, action) => {
    return {
      ...state,
      isAuthenticated: false
    }
  },
  USER_LOGGED_FAIL: (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: false
  })
}, defaultState)
