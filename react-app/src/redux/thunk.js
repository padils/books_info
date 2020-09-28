// import { bookAPI } from './../api/api';
// import { setBooks, success, isLoading ,getBook} from './bookReducer';


// export const creatBook = (book) => {
//     return async (dispatch) => {
//         dispatch(isLoading(true))
//         await bookAPI.creatBook(book)
//         alert('create book')
//         dispatch(isLoading(false))

//     }
// }
// export const deleteBook = (id) => {
//     return async (dispatch) => {   
//      dispatch(isLoading(true))
//      await bookAPI.deleteBook(id)
//      dispatch(getBook())
//      dispatch(isLoading(false))
//      alert(`delete`)
//     }
// }