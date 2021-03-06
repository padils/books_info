const IS_LOADING = `IS_LOADING`
const SET_BOOKS = `SET_BOOKS`
const SET_FILTER = `SET_FILTER`
const SET_IMG = `SET_IMG`

let initialState = {
  books: '',
  isLoading: false,
  filterWord: '',
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: [...action.books],
      }
    case SET_IMG:
      console.log(`img`)

      return {
        ...state,
        books: state.books.map((i) => ({...i, imgUrl: ``})),
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SET_FILTER:
      return {
        ...state,
        filterWord: action.filterWord,
      }
    default:
      return state
  }
}

export const setFilter = (filterWord) => ({type: SET_FILTER, filterWord})
export const setBooks = (books) => ({type: SET_BOOKS, books})
export const setImg = () => ({type: SET_IMG})
export const isLoading = (isLoading) => ({type: IS_LOADING, isLoading})

export default bookReducer
