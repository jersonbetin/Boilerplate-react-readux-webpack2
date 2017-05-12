import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../redurers/index'

export default function configureStore(initialState) {
  const logger = createLogger()
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )
}
