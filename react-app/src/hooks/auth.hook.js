import {useState, useCallback, useEffect} from 'react'
import { useHttp } from './http.hook';



export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)

  const storageName = 'userData'
  const { request } = useHttp()
    const url = 'http://localhost:3000/api/'

  const login = useCallback(async(data) => {
    let {isAuth,userId}=   await request(`${url}login`, 'POST', data, {})
    setIsAuth(isAuth)
    setUserId(userId)

    localStorage.setItem(storageName, JSON.stringify({
      userId,isAuth
    }))
   
  }, [])
  const register = useCallback(async(data) => {
    let {isAuth,userId}=await request(`${url}register`, 'POST', data, {})
    setIsAuth(isAuth)
    setUserId(userId)

    localStorage.setItem(storageName, JSON.stringify({
      userId,isAuth
    }))

 
  }, [])
  const userIsAuth = useCallback(async(data) => {
    let {isAuth,userId}=await request(`${url}isAuth`, 'POST', data, {})
    setIsAuth(isAuth)
    setUserId(userId)

    localStorage.setItem(storageName, JSON.stringify({
      userId,isAuth
    }))

 
  }, [])


  const logout = useCallback(async(data) => {

    await request(`${url}logout`, 'POST', data, {})
          
    setIsAuth(null)
    setUserId(null)
    localStorage.removeItem(storageName)
    
  }, [])

  useEffect(() => {
    
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data?.userId && data.isAuth) {
      userIsAuth({id:data.userId})
    }
    setReady(true)
  }, [login])


  return { login, logout,register,userIsAuth, isAuth, userId, ready }
}
