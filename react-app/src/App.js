import React from 'react'
import { Provider } from 'react-redux';
import ListBookContainer from './page/listBookContainer';
import store from './redux/redux-store';
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import { Route, useRoute } from './routes';
import { Router } from 'react-router-dom';

const App = () => {
    const { addData, removeData, ready, books, success } = useBooksData()
    const route =useRoute()

    if (!ready) {
        return <div>Loading..</div>
    }
    
    return <BooksContext.Provider value={{
        addData, removeData, ready, books, success
    }}>
  
    <ListBookContainer/>
        
            </BooksContext.Provider>




}

export default App