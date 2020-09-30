import React, { useState,useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { BooksContext } from '../context/booksContext'


const UpdateBook= () => {

    let {books,updateBook} = useContext(BooksContext);
    let {id}=useParams()
    let history=useHistory()

    let [bookState,editBookState]=useState(books.find(item=>item._id===id))
    

    return <div>
    <h1> Update book</h1>
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

        <div className='row'>
            <div className='col s6'>
                <button  onClick={()=>{
                    updateBook(bookState);
                    history.goBack();
                }}> 
                <i className='material-icons right postfix'>send</i> 
                    send
                </button>
            </div>
            
            <div className='col s6' style={{textAlign:'right'}}>
                <button
                 onClick={()=> history.goBack()} 
                  style={{textAlign:'right'}}>
                    cancel 
                </button>
            </div>
        </div>
    </div>
}

export default UpdateBook