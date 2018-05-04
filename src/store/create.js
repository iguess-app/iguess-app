import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import logging from './middlewares/logging'
import * as reducers from './reducers'

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    logging
  )
)

export default configureStore = initialState => {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    enhancer
  )
  return store
}
