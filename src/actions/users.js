import axios from 'axios'
import { API } from '../constants/index'

export const FETCH_USERS = 'FETCH_USERS'

export function fetch_users(){
  const request = axios({
    method: 'GET',
    url: `${API}/users`,
    headers: {
      Authorization: ''
    }
  })

  return {
    type: FETCH_USERS,
    payload: request    
  }
}