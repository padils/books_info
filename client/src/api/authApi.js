import Axios from 'axios'

const url = Axios.create({
  baseURL: ' http://localhost:3000/api/',
})

export const AuthApi = {
  login(data) {
    return url.post(`login`, {data}).then(
      (response) => response.data,
      (error) => alert(error.response.data.message)
    )
  },
  logout(data) {
    return url.post(`logout`, {data}).then(
      (response) => response.data,
      (error) => alert(error.response.data.message)
    )
  },
  register(data) {
    return url.post(`register`, {data}).then(
      (response) => response.data,
      (error) => alert(error.response.data.message)
    )
  },
  userIsAuth(id) {
    return url.post(`isAuth`, {id}).then(
      (response) => response.data,
      (error) => console.log('no id')
    )
  },
}
