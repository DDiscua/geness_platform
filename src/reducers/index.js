import { combineReducers } from 'redux'

import { user } from './user'
import { reducer as toastrReducer } from 'react-redux-toastr';

const appReducer = combineReducers({
  user,
  toastr: toastrReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
