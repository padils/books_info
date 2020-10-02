import { createContext }  from "react";

function noop() {}

export const BooksContext = createContext({
    books:[],
    success:true,
    addData:noop,
    removeData:noop,
    getBook:noop,
    deleteBook:noop,
    createBook:noop,
    updateBook:noop,
    addFilter:noop,
    filterWord:''
})