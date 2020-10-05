import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createBook } from '../../redux/bookThunk';


let CreateBookInputs = ({createBook}) => {

    let [bookState,editBookState]=useState({name:'',sheet:'',rating:''})

   
    
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
                }>
                 send</button>
                
            </div>
            
            
           
    </div>
}



export default  compose(connect('',{createBook})(CreateBookInputs))