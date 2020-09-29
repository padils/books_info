import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import {  useRoute } from './routes';
import 'materialize-css'


const App = () => {
    const { addData, removeData, ready, books, success,
        getBook,deleteBook,createBook,updateBook } = useBooksData()
    const route = useRoute()

    if (!ready) {
        return <div>Loading..</div>
    }

    return <BooksContext.Provider value={{
        addData, removeData, ready, books, success,
        getBook,deleteBook,createBook,updateBook
    }}>

        <Router>
         <div className="container">   {route}</div>
        </Router>

    </BooksContext.Provider>




}

export default App