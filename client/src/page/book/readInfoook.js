import React from 'react'

const ReadInfoBook = ({
  editImg,
  title,
  bookState,
  editBookState,
  send,
  img,
  history,
  NoPhoto,
}) => {
  return (
    <div className="container">
      <h1> {title} book</h1>
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

      <div>
        <button
          onClick={() => {
            send(bookState, img)
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

export default ReadInfoBook
