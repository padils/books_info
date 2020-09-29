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

        <div className='row'>
            <div className='col s6'>
                <button className="btn waves-effect waves-light" onClick={()=>{
                    updateBook(bookState);
                    history.goBack()
                
                }}> 
                <i className='material-icons right'>send</i> 
                    send
                </button>
            </div>
            
            <div className='col s6' style={{textAlign:'right'}}>
                <button
                 onClick={()=> history.goBack()} 
                 className="btn waves-effect waves-light"
                  style={{textAlign:'right'}}>
                    cancel 
                </button>
            </div>
        </div>
    </div>
}

export default UpdateBook