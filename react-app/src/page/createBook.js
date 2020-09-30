import React, { useContext, useState } from 'react'
import { BooksContext } from '../context/booksContext'
import { useHistory } from 'react-router-dom';


let CreateBookInputs = (props) => {

    let [bookState,editBookState]=useState({name:'',sheet:'',rating:''})

    let {createBook}=useContext(BooksContext)
    let history=useHistory()

    return <div>
            <h1> Create book</h1>
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

    
            <div >
                <button onClick={()=>{
                createBook(bookState)
                history.goBack()}
                }  >
                <i className='material-icons right postfix'>send</i> 
                 send</button>
                
            </div>
            
            
           
    </div>
}

export default CreateBookInputs