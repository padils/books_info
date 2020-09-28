
// import { bookAPI } from './../api/api';
// const IS_LOADING = `IS_LOADING`
// const SET_BOOK=`SET_BOOK`
// const SET_BOOKS=`SET_BOOKS`

// let initialState ={
//     books:'',
//     isLoading:false
    
// }

// const bookReducer= (state=initialState,action)=>{

//     switch(action.type){

//         case SET_BOOK:
//             return{
//                 ...state,
//                 books:[...state.books,action.book]//приходит объект
//             }
//         case SET_BOOKS:
//             return{
//                 ...state,
//                 books:[...action.books]//приходит объект
//             }
//         case IS_LOADING:
            
//             return{
//                 ...state,
//                 isLoading:action.isLoading
                
//             }
//         default :
//         return state
//     }
// }

// export const setBook=(book)=>({type:SET_BOOK,book})
// export const setBooks=(books)=>({type:SET_BOOKS,books})
// export const isLoading=(isLoading)=>({type:IS_LOADING,isLoading})


// export const getBook = () => {
//     return async (dispatch) => {
//         dispatch(isLoading(true))
//         let data = await bookAPI.getBook()
        

//         if (data.success){

//             dispatch(setBooks(data.data))
//             dispatch(isLoading(false))
//             console.log('запрос')
//         } 
//        }
// }

// export default bookReducer
