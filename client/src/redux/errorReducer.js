const SET_ERROR = `SET_ERROR`

let initialState = {
  error: '',
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

export const setError = (error) => ({type: SET_ERROR, error})

export default errorReducer
