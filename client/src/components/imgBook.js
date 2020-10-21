import React, {useState, useEffect} from 'react'
import {createImg, getImg} from '../redux/bookThunk'
import {connect} from 'react-redux'
import {compose} from 'redux'
const ImgBook = ({createImg, imgs, getImg}) => {
  let [bookState, editBookState] = useState({
    img: '',
    src: '',
  })
  let [src2, editSrc2] = useState('')
  let [src3, editSrc3] = useState('')

  // useEffect(()=>{
  //   getImg()
  // },[bookState])
  if (imgs) {
    // let aray = imgs[].data.img.data;
    // let contentType = imgs[12].data.img.contentType;
    let reader = new FileReader()
    if (imgs) {
      reader.readAsDataURL(imgs)
    }
    reader.onload = () => {
      editSrc2(src2)
    }
    // let blob =imgs[0].item[31].path

    // let src4=blob
    // console.log(src4)
    // let base64=window.btoa(imgs[0].data[14].img.data.data)
    // let src3=`date:image/jpeg;base64,${base64}`
    // console.log(typeof(src2))
    // decodeURIComponent()
    //  let src4=`${imgs[0].src}${Buffer.from(imgs[0].base64).toString('base64')}`
    //  let src3=imgs[0].path
    //  console.log(src3)
    // let src=`date:image/jpeg;base64,${imgs[0].item[15].image}`
    // console.log(Buffer.from(src2).toString('base64'))
    return (
      <div>
        <input
          type="file"
          id="image"
          onChange={(e) => {
            editBookState({...bookState, img: e.target.files[0]})
          }}
        />
        <img src={src2} />
        dddsw
      </div>
    )
  }
  console.log(__filename)
  return (
    <div className="container">
      <h1> Create book</h1>
      <input
        type="file"
        id="image"
        onChange={(e) => {
          editBookState({...bookState, img: e.target.files[0]})
        }}
      />
      <img src={`http://localhost:3000/api/img`} />
      <button
        onClick={() => {
          createImg(bookState.img)
        }}
      >
        send
      </button>
      {}
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    imgs: state.books.img,
  }
}

export default compose(connect(mapStateToProps, {createImg, getImg})(ImgBook))
