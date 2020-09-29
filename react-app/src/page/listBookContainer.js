import React, { useContext, useEffect, useCallback, useState } from 'react';
import CreateBookInputs from './createBook';
import ListBook from './listBook';
import { BooksContext } from '../context/booksContext';





const ListBookContainer = (props) => {

    const {getBook,deleteBook,createBook,updateBook,books,ready} = useContext(BooksContext)
    

    useEffect(() => {

        getBook()
    }, [getBook])

    console.log(books)
    if (!books) {
        return <div>
            
            <CreateBookInputs createBook={createBook} updateBook={updateBook}/>
       </div>
    }
    return <div>
        <ListBook books={books} deleteBook={deleteBook} />
        <CreateBookInputs createBook={createBook} updateBook={updateBook}/>

    </div>

}


export default ListBookContainer

