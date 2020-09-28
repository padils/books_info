import Axios from 'axios'
import React,{ useCallback, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { BooksContext } from './../context/booksContext';


// export const getBookApi =()=>{

// const {request,loading}=useHttp()
// const books=useContext(BooksContext) 

// const url ='http://localhost:3000/api/'
// return useCallback(async () => {
//     try {

//         let data = await request(`${url}books`, 'GET', null, {})
//         books.addData(data.data,data.success)
        

//         console.log('getBook')
//         console.log(books.books)
//         return(data.data)
//     }
//     catch (e) { }
// }, [])
// }
