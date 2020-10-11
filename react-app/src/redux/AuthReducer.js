const IS_AUTH = `IS_AUTH`;
const SET_USER_ID = `SET_USER_ID`;
const SET_READY = `SET_READY`;

let initialState = {
  isAuth: false,
  ready: false,
  userId: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setUserId = (userId) => ({ type: SET_USER_ID, userId });
export const setReady = (ready) => ({ type: SET_READY, ready });
export const isAuth = (isAuth) => ({ type: IS_AUTH, isAuth });

export default AuthReducer;
