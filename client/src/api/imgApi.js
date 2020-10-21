import apiMethod from './apiMethod'

export const ImgApi = {
  createImg: (img, id) => apiMethod('post', `img/create/${id}`, img),
  getImg: (id) => apiMethod('get', `img/${id}`),
  deleteImg: (id) => apiMethod('delete', `img/${id}`),
}
