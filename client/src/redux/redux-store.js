import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import AuthReducer from './AuthReducer'
import bookReducer from './bookReducer'
import errorReducer from './errorReducer'

let reducers = combineReducers({
  books: bookReducer,
  auth: AuthReducer,
  errorServer: errorReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
