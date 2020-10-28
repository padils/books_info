import {isLoading, setImg} from './bookReducer'
import {ImgApi} from './../../api/imgApi'

export const createImg = (img) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    let res2 = await ImgApi.createImg(img)
    dispatch(isLoading(false))
  }
}
export const getImg = () => {
  return async (dispatch) => {
    let res = await ImgApi.getImg()
  }
}
