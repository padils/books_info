import React  from 'react'
import Book from './Book'


const ListBook=({books,deleteBook})=>{


    let list = books
    ?.map(i=><div className='col' key={i._id} ><Book 
                key={i._id} 
                id={i._id}
                name={i.name} 
                sheet={i.sheet} 
                rating={i.rating}
                deleteBook={deleteBook}
                
                /></div>)
    return <div className='row'>
        {list}
    </div>
}
export default ListBook