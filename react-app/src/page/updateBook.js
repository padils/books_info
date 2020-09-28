import React, { useState,useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { BooksContext } from '../context/booksContext'


const UpdateBook= (props) => {

    let {books,updateBook} = useContext(BooksContext);
    let {id}=useParams()
    let history=useHistory()

    let [bookState,editBookState]=useState(books.find(item=>item._id===id))
    

    return <div>
        <div>
            <span>name:</span>
            <input onChange={e=>editBookState({...bookState,name:e.target.value})} value={bookState.name}/>
        </div>
        <div>
            <span>sheet:</span>
            <input onChange={e=>editBookState({...bookState,sheet:e.target.value})} value={bookState.sheet}/>
        </div>
        <div>
            <span>rating:</span>
            <input onChange={e=>editBookState({...bookState,rating:e.target.value})} value={bookState.rating} />
        </div>

        <div>
            <button onClick={()=>{
                updateBook(bookState);
                history.goBack()
            
            }}>
                send
            </button>
        </div>
        
        <div>

        </div>
        <div>
            <button onClick={()=> history.goBack()}>
                cancel 
            </button>
        </div>
    </div>
}

export default UpdateBook