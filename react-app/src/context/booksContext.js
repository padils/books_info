import { createContext }  from "react";

function noop() {}

export const BooksContext = createContext({
    books:[],
    success:true,
    userId:'',
    isAuth:false,
    addData:noop,
    removeData:noop,
    getBook:noop,
    deleteBook:noop,
    createBook:noop,
    updateBook:noop,
    addFilter:noop,
    login:noop,
    logout:noop,
    register:noop,
   
    filterWord:''
})