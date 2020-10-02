import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { BooksContext } from '../context/booksContext';
import { SearchIcon } from '../icons/search';


const Search =()=>{

    let {addFilter,filterWord}=useContext(BooksContext)
    let location = useLocation()
    let [value,editValue]=useState(filterWord)
    
    let disable=location.pathname !==`/` 

    useEffect(()=>{
      if(disable){ 
        addFilter('')
        editValue(filterWord)}
    },[filterWord,disable])
    

    return <div className="input-group mb-3 ">
          <div className='input-group-prepend'><span className='input-group-text'><SearchIcon/></span></div>
          <input 
          disabled={disable} 
          onChange={e=>{
            addFilter(e.target.value);
            editValue(e.target.value)
            }} 
          value={value}
          type="text" 
          className="validate "/>
        </div> 
    
}



export default Search