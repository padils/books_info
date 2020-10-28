import {setError} from '../redux/errorReducer'
import store from '../redux/redux-store'

const tostMessage = (toast) => {
  store.dispatch(setError(toast))
}
export default tostMessage
