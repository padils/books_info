import Axios from 'axios';


const url =Axios.create({
    baseURL:' http://localhost:3000/api/'
})

export const AuthApi={

    login(data){
       
        return url.post(`login`,{data})
        .then(response=>response.data)
    },
    logout(data){
        return url.post(`logout`,{data})
        
    },
    register(data){
      
        return url.post(`register`,{data})
        .then(response=>response.data)
    },
    userIsAuth(data){
        return url.post(`isAuth`,{data})
        .then(response=>response.data)
    }
}