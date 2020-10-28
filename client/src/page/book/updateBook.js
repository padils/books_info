import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {updateBook} from '../../redux/thunk/bookThunk'
import NoPhoto from '../../components/noPhoto'

const UpdateBook = ({books, updateBook}) => {
  let {id} = useParams()
  let history = useHistory()

  let [bookState, editBookState] = useState(
    books.find((item) => item._id === id)
  )
  let [img, editImg] = useState()

  return (
    <div className="container">
      <h1> Update book</h1>
      <div className="">
        <img src={bookState.imgUrl || NoPhoto()} className="" />
      </div>
      <input
        type="file"
        onChange={(e) => {
          editImg(e.target.files[0])
        }}
      />
      <div>
        <span>name:</span>
        <textarea
          onChange={(e) => editBookState({...bookState, name: e.target.value})}
          value={bookState.name}
        />
      </div>
      <div>
        <span>sheet:</span>
        <textarea
          onChange={(e) => editBookState({...bookState, sheet: e.target.value})}
          value={bookState.sheet}
        />
      </div>
      <div>
        <span>rating:</span>
        <textarea
          onChange={(e) =>
            editBookState({...bookState, rating: e.target.value})
          }
          value={bookState.rating}
        />
      </div>

      <div className="row">
        <div className="col s6">
          <button
            onClick={() => {
              updateBook(bookState, img)
              history.goBack()
            }}
          >
            send
          </button>
        </div>

        <div className="col s6" style={{textAlign: 'right'}}>
          <button onClick={() => history.goBack()} style={{textAlign: 'right'}}>
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    books: state.books.books,
  }
}

export default compose(connect(mapStateToProps, {updateBook})(UpdateBook))
