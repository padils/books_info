import Axios from 'axios'

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
    throw new Error(error.response.data.message || 'Что-то пошло не так') //обработка ошибок
  }

  // return instanse[metod](url).then(
  //   (response) => response.data,
  //   (error) => alert(error.response.data.message)
  // )
}
export default apiMethod
