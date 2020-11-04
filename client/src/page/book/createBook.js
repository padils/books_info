import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createBook} from '../../redux/thunk/bookThunk'
import NoPhoto from '../../components/noPhoto'
import ReadInfoBook from './readInfoook'

let CreateBookInputs = ({createBook}) => {
  let [bookState, editBookState] = useState({
    name: '',
    sheet: '',
    rating: '',
  })
  let [img, editImg] = useState()
  const send = (bookState, img) => {
    createBook(bookState, img)
  }

  let history = useHistory()
  return (
    <ReadInfoBook
      send={send}
      bookState={bookState}
      editBookState={editBookState}
      img={img}
      editImg={editImg}
      history={history}
      title={`Create`}
      NoPhoto={NoPhoto}
    />
  )
}

export default compose(connect('', {createBook})(CreateBookInputs))
