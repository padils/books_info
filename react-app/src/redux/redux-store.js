import { createStore, applyMiddleware, combineReducers ,compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import AuthReducer from './AuthReducer';
import bookReducer from './bookReducer';



let reducers = combineReducers({
    books:bookReducer,
    auth:AuthReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))


export default store