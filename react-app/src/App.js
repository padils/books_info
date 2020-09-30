import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import {  useRoute } from './routes';
import Navbar from './components/navBar';



const App = () => {
    const { addData, removeData, ready, books, success,filterWorld,addFilter,
        getBook,deleteBook,createBook,updateBook } = useBooksData()
    const route = useRoute()
        
    if (!ready) {
        return <div>Loading..</div>
    }

    return <BooksContext.Provider value={{
        addData, removeData, ready,books,filterWorld, success,addFilter,
        getBook,deleteBook,createBook,updateBook
    }}>

        <Router>
       <div>
            <Navbar/>
             <div className="container">   {route}</div>
            
       </div>
</Router>
    </BooksContext.Provider>

}

export default App