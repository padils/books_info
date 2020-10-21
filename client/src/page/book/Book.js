import React from 'react'
import {useHistory} from 'react-router-dom'

const Book = ({src, name, rating, sheet, id, deleteBook}) => {
  const history = useHistory()

  return (
    <div className="row">
      <div className="col-6">
        <div>
          <span>
            <strong>name:</strong>
            <p>{name}</p>
          </span>
        </div>
        <div>
          <span>
            <strong>sheet:</strong>
            <p>{sheet}</p>
          </span>
        </div>
        <div>
          <span>
            <strong>rating:</strong>
            <p>{rating}</p>
          </span>
        </div>
      </div>
      <div className="col-6">
        <img src={src} className="img-thumbnail" />
      </div>
      <div>
        <div className="d-flex ">
          <div className="">
            <button
              onClick={() => {
                deleteBook(id)
              }}
            >
              delete
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                history.push(`/update/${id}`)
              }}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Book
