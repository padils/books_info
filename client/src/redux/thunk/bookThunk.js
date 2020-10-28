import {setBooks, isLoading} from '../bookReducer'
import {BooksApi} from '../../api/booksApi'
import {ImgApi} from './../../api/imgApi'

export const getBook = () => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let res = await BooksApi.getBook()
    if (res) {
      dispatch(setBooks(res.data))
    } else {
      dispatch(setBooks(''))
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
    await BooksApi.deleteBook(id)
    dispatch(getBook())
  }
}
export const updateBook = (data, img) => {
  return async (dispatch) => {
    let res = await BooksApi.updateBook(data)
    if (img && res.success) {
      await ImgApi.createImg(img, res.id)
      dispatch(getBook())
    }
    dispatch(getBook())
  }
}
