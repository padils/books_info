import {isAuth, setReady, setUserId} from '../AuthReducer'
import {AuthApi} from '../../api/authApi'

export const login = (data) => {
  return async (dispatch) => {
    let res = await AuthApi.login(data)
    if (res) {
      localStorage.setItem('userId', res.userId)
      dispatch(setUserId(localStorage.getItem('userId')))
      dispatch(isAuth(res.isAuth))
    }
  }
}
export const register = (data) => {
  return async (dispatch) => {
    let res = await AuthApi.register(data)
    if (res) {
      localStorage.setItem('userId', res.userId)
      dispatch(isAuth(res.isAuth))
      dispatch(setUserId(localStorage.getItem('userId')))
    }
  }
}
export const isAuthUser = () => {
  return async (dispatch) => {
    let userId = localStorage.getItem('userId')
    if (userId) {
      let res = await AuthApi.userIsAuth(userId)
      dispatch(setUserId(localStorage.getItem('userId')))
      dispatch(isAuth(res.isAuth))
    }
  }
}
export const logout = (data) => {
  return async (dispatch) => {
    await AuthApi.logout(data)
    localStorage.removeItem('userId')
    dispatch(setUserId(``))
    dispatch(isAuth(false))
  }
}
