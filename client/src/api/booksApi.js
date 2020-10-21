import Axios from 'axios'

const url = Axios.create({
  baseURL: ' http://localhost:3000/api/',
})

export const BooksApi = {
  getBook() {
    return url.get(`/books`).then(
      (response) => response.data,
      (error) => alert(error.response.data.message)
    )
  },
  deleteBook(id) {
    return url.delete(`book/${id}`).then(
      (response) => response.data,
      (error) => {
        alert(error.response.data.message)
        console.log(error)
      }
    )
  },
  createBook(book) {
    console.log(book)
    return url.post(`book`, book).then(
      (response) => response.data,
      (error) => alert(error.response.data.message)
    )
  },
  createImg(img, id) {
    let formData = new FormData()
    formData.append('image', img)
    return url
      .post(`img/create/${id}`, formData, {
        headers: {'content-type': 'multipart/form-data'},
      })
      .then((response) => {
        return response.data
      })
  },
  getImg(id) {
    return url.get(`img/${id}`).then((response) => {
      return response.data
    })
  },
  deleteImg(id) {
    return url.delete(`img/${id}`).then(
      (response) => response.data,
      (error) => {
        alert(error.response.data.message)
        console.log(error)
      }
    )
  },
  updateBook(data) {
    return url
      .put(`book/${data._id}`, {
        data,
      })
      .then(
        (response) => response.data,
        (error) => alert(error.response.data.message)
      )
  },
}
