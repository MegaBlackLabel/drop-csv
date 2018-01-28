import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import rootReducer from './reducers'

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
  )
}