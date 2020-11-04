import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createBook} from '../../redux/thunk/bookThunk'
import NoPhoto from '../../helpFunc/noPhoto'
import ReadInfoBook from './readInfoook'
import uploadImgNow from '../../helpFunc/uploadImgNow'

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
      uploadImg={uploadImgNow}
    />
  )
}

export default compose(connect('', {createBook})(CreateBookInputs))
