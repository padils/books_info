const uploadImgNow = (img, bookState, editBookState) => {
  let fr = new FileReader()
  fr.onload = () => {
    editBookState({...bookState, imgUrl: fr.result})
  }
  fr.readAsDataURL(img)
}
export default uploadImgNow
