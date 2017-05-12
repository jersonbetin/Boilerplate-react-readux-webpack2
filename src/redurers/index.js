import { routerReducer as routing } from 'react-router-redux' 
import { combineReducers } from 'redux'
import users from './users'


const reducers = combineReducers({
  users,
  routing
})

export default reducers
