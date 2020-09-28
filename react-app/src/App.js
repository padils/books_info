import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ListBookContainer from './page/listBookContainer';
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import { Route, useRoute } from './routes';



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
            {route}
        </Router>

    </BooksContext.Provider>




}

export default App