import React  from 'react'
import Book from './Book'


const ListBook=({books,deleteBook})=>{

// alert(books)
    let list = books
    ?.map(i=><Book 
                key={i._id} 
                id={i._id}
                name={i.name} 
                sheet={i.sheet} 
                rating={i.rating}
                deleteBook={deleteBook}
                
                />)
    return <div>
        {list}
    </div>
}
export default ListBook