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
    } else {
      dispatch(setBooks(''))
      dispatch(isLoading(false))
    }
  }
}

export const createBook = (book, img) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let res = await BooksApi.createBook(book)

    if (img && res.success) {
      await ImgApi.createImg(img, res.id)
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
export const updateBook = (data, img) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let res = await BooksApi.updateBook(data)
    if (img && res.success) {
      await ImgApi.createImg(img, res.id)
      dispatch(getBook())
    }
    dispatch(getBook())
    dispatch(isLoading(false))
  }
}
