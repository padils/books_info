import React, { useContext, useEffect } from 'react';
import ListBook from './listBook';
import { BooksContext } from '../../context/booksContext';



const ListBookContainer = (props) => {

    const {getBook,deleteBook,books,filterWord} = useContext(BooksContext)
    

    useEffect(() => {
        getBook()
       
    }, [getBook])

    let filterBooks=books?.filter(item=>(~item.name.indexOf(filterWord)))


    
    if (!books) {
        return <div>
            No Books
       </div>
    }

    return <div >
        <ListBook books={filterBooks} deleteBook={deleteBook} /> 

    </div>

}


export default ListBookContainer

