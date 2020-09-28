import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Book=(props)=>{
    const history = useHistory()
let {name,rating,sheet,id}=props
   

    return <div>
        <div>
            <span>name:{name}</span>
              </div>
        <div>
            <span>sheet:{sheet}</span>
               </div>
        <div>
            <span>rating:{rating}</span>
       </div>
       <div>
           <button onClick={()=>{props.deleteBook(props.id)}}> delete</button>
       </div>
       <div>
           <button onClick={()=>{history.push(`/update/${id}`)}}> update</button>
       </div>
        <hr/>
    </div>
}
export default Book