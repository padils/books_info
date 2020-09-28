import React, { useState } from 'react'


const Book=(props)=>{
let {name,rating,sheet}=props
   

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
        <hr/>
    </div>
}
export default Book