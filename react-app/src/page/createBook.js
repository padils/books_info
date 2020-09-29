import React, { useState } from 'react'


let CreateBookInputs = (props) => {

    let [bookState,editBookState]=useState({name:'',sheet:'',rating:''})

    let creatBook=()=>{
        props.createBook(bookState);

    }

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

    
            <div >
                <button onClick={()=>creatBook()} 
                className="btn waves-effect waves-light">
                <i className='material-icons right'>send</i> send</button>
                
            </div>
            
            
           
    </div>
}

export default CreateBookInputs