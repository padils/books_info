import Axios from 'axios'
import TostMessage from '../helpFunc/errorMessage'

const instanse = Axios.create({
  baseURL: ' http://localhost:3000/api/',
})

const apiMethod = async (method = 'get', url, body = null) => {
  try {
    if (body instanceof File) {
      let file = body
      body = new FormData()
      body.append('image', file)
      instanse.headers = {'content-type': 'multipart/form-data'}
    }
    let response = await instanse[method](url, body)
    let data = response.data
    return data
  } catch (error) {
    TostMessage(error.response.data.message || 'Что-то пошло не так')
  }
}
export default apiMethod
