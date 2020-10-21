import apiMethod from './apiMethod'

export const BooksApi = {
  getBook: () => apiMethod('get', 'books'),
  deleteBook: (id) => apiMethod('delete', `book/${id}`),
  createBook: (book) => apiMethod('post', 'book', book),
  updateBook: (data) => apiMethod('put', `book/${data._id}`, data),
}
