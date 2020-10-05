const IS_LOADING = `IS_LOADING`
const SET_BOOKS=`SET_BOOKS`
const SET_FILTER=`SET_FILTER`

let initialState ={
    books:'',
    isLoading:false,
    filterWord:''
}

const bookReducer= (state=initialState,action)=>{

    switch(action.type){

       
        case SET_BOOKS:
            return{
                ...state,
                books:[...action.books]
            }
        case IS_LOADING:
            
            return{
                ...state,
                isLoading:action.isLoading
                
            }
        case SET_FILTER:
            
            return{
                ...state,
                filterWord:action.filterWord
                
            }
        default :
        return state
    }
}

export const setFilter=(filterWord)=>({type:SET_FILTER,filterWord})
export const setBooks=(books)=>({type:SET_BOOKS,books})
export const isLoading=(isLoading)=>({type:IS_LOADING,isLoading})



export default bookReducer
