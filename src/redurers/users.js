import { FETCH_USERS } from '../actions/users'

const initialState = {
  users: { list: [], error: null, loading: false}
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS:
      return { ...state, users: { list: [], error: null, loading: true } }
  }
}

export default userReducer