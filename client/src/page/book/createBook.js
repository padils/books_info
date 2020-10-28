import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createBook} from '../../redux/thunk/bookThunk'

let CreateBookInputs = ({createBook}) => {
  let [bookState, editBookState] = useState({
    name: '',
    sheet: '',
    rating: '',
  })
  let [img, editImg] = useState()

  let history = useHistory()
  return (
    <div className="container">
      <h1> Create book</h1>
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

      <div>
        <button
          onClick={() => {
            createBook(bookState, img)
            history.goBack()
          }}
        >
          send
        </button>
        <button onClick={() => history.goBack()}>cancel</button>
      </div>
    </div>
  )
}

export default compose(connect('', {createBook})(CreateBookInputs))
