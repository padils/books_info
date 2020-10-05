import { isAuth, setReady, setUserId } from "./AuthReducer"
import { AuthApi } from './../api/authApi';



export  const login=(data)=>{

    return async (dispatch)=>{
        dispatch(setReady(false))
        let res = await AuthApi.login(data);
        dispatch(setReady(true))
        dispatch(setUserId(res.userId))
        dispatch(isAuth(res.isAuth))
        

        
    }
}
export  const register=(data)=>{

    return async (dispatch)=>{
        dispatch(setReady(false))
        let res = await AuthApi.register(data);
        dispatch(isAuth(res.isAuth))
        dispatch(setUserId(res.userId))
        dispatch(setReady(true))
    }
}
export  const isAuthUser=(data)=>{
    return async (dispatch)=>{
        dispatch(setReady(false))
        let res = await AuthApi.isAuth(data);
        dispatch(setReady(true))
        dispatch(setUserId(res.userId))
        dispatch(isAuth(res.isAuth))//trable isAuth
        
        
    }
}
export  const logout=(data)=>{
    return async (dispatch)=>{
        dispatch(setReady(false))
        await AuthApi.logout(data);
        dispatch(setReady(true))
        dispatch(setUserId(``))
        dispatch(isAuth(false))
        
        
    }
}