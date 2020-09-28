import { createContext }  from "react";

function noop() {}

export const BooksContext = createContext({
    books:[],
    success:true,
    addData:noop,
    removeData:noop

})