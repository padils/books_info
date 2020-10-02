import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import {  useRoute } from './routes';
import Navbar from './components/navBar';
import Footer from './components/footer';



const App = () => {
    const store = useBooksData()
    const route = useRoute()
        
    if (!store.ready) {
        return <div>Loading..</div>
    }

    return <BooksContext.Provider value={store}>
        <Router>
       <div className='container ' >
            <div className='row'><Navbar/></div>
             <div className="row"> {route}</div>
            <div className='row'><Footer/></div>
       </div>
</Router>
    </BooksContext.Provider>

}

export default App