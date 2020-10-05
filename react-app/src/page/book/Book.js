import React  from 'react'
import { useHistory } from 'react-router-dom'


const Book=({name,rating,sheet,id,deleteBook})=>{
    const history = useHistory()

   

    return <div >
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
           <button  onClick={()=>{deleteBook(id)}}> delete</button>
       </div>
       <div>
           <button onClick={()=>{history.push(`/update/${id}`)}}> update</button>
       </div>
        <hr/>
    </div>
}
export default Book