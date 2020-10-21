import React from 'react'
import Book from './Book'

const ListBook = ({books, deleteBook}) => {
  let list = books?.map((i) => (
    <div className="border rounded-lg my-2 mx-1 p-3" key={i._id}>
      <Book
        key={i._id}
        id={i._id}
        name={i.name}
        sheet={i.sheet}
        rating={i.rating}
        src={i.imgUrl}
        deleteBook={deleteBook}
      />
    </div>
  ))
  return (
    <div className="container ">
      <div className="col"> {list}</div>
    </div>
  )
}
export default ListBook
