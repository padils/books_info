import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { BooksContext } from '../context/booksContext';


const Search =()=>{

    let {addFilter}=useContext(BooksContext)


    return <div class="input-field ">
          <i class="material-icons prefix ">search</i>
          <input  onChange={e=>addFilter(e.target.value)} type="text" className="validate "/>
        </div> 
    
}



export default Search