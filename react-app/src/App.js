import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useBooksData } from './hooks/data.hook';
import { BooksContext } from './context/booksContext';
import {  useRoute } from './routes';
import Navbar from './components/navBar';
import Footer from './components/footer';
import { useAuth } from './hooks/auth.hook';



const App = () => {
    const storeData = useBooksData()
    const storeUser=useAuth()
    const route = useRoute(storeUser.isAuth)
        
    if (!storeData.ready) {
        return <div>Loading..</div>
    }


    return <div className=''>
        
        <BooksContext.Provider value={{...storeData,...storeUser}}>
            <Router>
           <div className='container' >
                {storeUser.isAuth && <div className='row'><Navbar/></div>}
                 <div className="row"> {route}</div>
                <div className='row'><Footer/></div>
           </div>
    </Router>
        </BooksContext.Provider>
    </div>
}

export default App