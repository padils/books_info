import { isAuth, setReady, setUserId } from "./AuthReducer";
import { AuthApi } from "./../api/authApi";

export const login = (data) => {
  return async (dispatch) => {
    dispatch(setReady(false));
    try {
      let res = await AuthApi.login(data);
      dispatch(setReady(true));
      localStorage.setItem("userId", res.userId);
      dispatch(setUserId(res.userId));
      dispatch(isAuth(res.isAuth));
    } catch (error) {
      console.log(error);
    }
  };
};
export const register = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setReady(false));
      let res = await AuthApi.register(data);
      dispatch(isAuth(res.isAuth));
      dispatch(setUserId(res.userId));
      dispatch(setReady(true));
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const isAuthUser = () => {
  return async (dispatch) => {
    try {
      dispatch(setReady(false));
      let userId = localStorage.getItem("userId");
      if (userId) {
        let res = await AuthApi.userIsAuth(userId);
        dispatch(setUserId(res.userId));
        dispatch(isAuth(res.isAuth));
      }
      dispatch(setReady(true));

    } catch (e) {
      console.log(e);
    }
  };
};
export const logout = (data) => {
  return async (dispatch) => {
    dispatch(setReady(false));
    await AuthApi.logout(data);
    dispatch(setReady(true));
    dispatch(setUserId(``));
    localStorage.removeItem("userId");
    dispatch(isAuth(false));
  };
};
