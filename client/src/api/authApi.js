import apiMethod from './apiMethod'

export const AuthApi = {
  login: (data) => apiMethod('post', 'login', data),
  logout: (data) => apiMethod('post', 'logout', data),
  register: (data) => apiMethod('post', 'register', data),
  userIsAuth: (id) => apiMethod('post', 'isAuth', {id}),
}
