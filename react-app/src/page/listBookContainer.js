import React, { useContext, useEffect, useCallback, useState } from 'react';
import CreateBookInputs from './createBook';
import ListBook from './listBook';
import { BooksContext } from '../context/booksContext';
import Search from '../components/search';


const ListBookContainer = (props) => {

    const {getBook,deleteBook,books,filterWorld} = useContext(BooksContext)
    

    useEffect(() => {

        getBook()
    }, [getBook])

    console.log(books)
    if (!books) {
        return <div>
            No Books
       </div>
    }
    let booksReverse=books.reverse()
    let filterBooks=booksReverse.filter(item=>(~item.name.indexOf(filterWorld)))

    return <div>
  
        <ListBook books={filterBooks} deleteBook={deleteBook} /> 

    </div>

}


export default ListBookContainer

