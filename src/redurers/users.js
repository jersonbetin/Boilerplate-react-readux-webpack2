import { FETCH_USERS } from '../actions/users'

const initialState = {
  users: { list: [], error: null, loading: false}
}

const users = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS:
      return { ...state, users: { list: [], error: null, loading: true } }
    default:
      return state
  }
}

export default users
