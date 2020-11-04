import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {updateBook} from '../../redux/thunk/bookThunk'
import NoPhoto from '../../helpFunc/noPhoto'
import ReadInfoBook from './readInfoook'
import uploadImgNow from '../../helpFunc/uploadImgNow'

const UpdateBook = ({books, updateBook}) => {
  let {id} = useParams()
  let history = useHistory()
  const send = (bookState, img) => {
    updateBook(bookState, img)
  }

  let [bookState, editBookState] = useState(
    books.find((item) => item._id === id)
  )
  let [img, editImg] = useState()

  return (
    <ReadInfoBook
      send={send}
      bookState={bookState}
      editBookState={editBookState}
      img={img}
      editImg={editImg}
      history={history}
      title={`Update`}
      NoPhoto={NoPhoto}
      uploadImg={uploadImgNow}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    books: state.books.books,
  }
}

export default compose(connect(mapStateToProps, {updateBook})(UpdateBook))
