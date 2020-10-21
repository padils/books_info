import {setBooks, isLoading} from '../bookReducer'
import {BooksApi} from '../../api/booksApi'
import {ImgApi} from './../../api/imgApi'

export const getBook = () => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let data = await BooksApi.getBook()
    if (data.success && data.data) {
      dispatch(setBooks(data.data))
      dispatch(isLoading(false))
      console.log('запрос')
    } else {
      dispatch(setBooks(''))
      dispatch(isLoading(false))
      console.log('empty')
    }
  }
}

export const createBook = (book, img) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let res = await BooksApi.createBook(book)

    if (img && res && res.id) {
      let res2 = await ImgApi.createImg(img, res.id)
      console.log(res2)
      dispatch(getBook())
    }
    dispatch(isLoading(false))
  }
}
export const deleteBook = (id) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    await BooksApi.deleteBook(id)
    dispatch(getBook())
    dispatch(isLoading(false))
  }
}
export const updateBook = (data) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    await BooksApi.updateBook(data)
    dispatch(getBook())
    dispatch(isLoading(false))
  }
}