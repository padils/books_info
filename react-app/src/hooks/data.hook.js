
import { useState, useCallback, useEffect } from 'react';
import { useHttp } from './http.hook';

const storageName = 'BooksData';

export const useBooksData = ()=>{
    let [books,setBooks]=useState(null);
    let [success,setSuccess]=useState(null);
    const [ready, setReady] = useState(false)

    const { request } = useHttp()
    const url = 'http://localhost:3000/api/'


    const addData = useCallback((books,success)=>{

        setBooks(books);
        setSuccess(success)
        console.log('addData')
        localStorage.setItem(storageName,JSON.stringify({
            books,success
        }))
        
    },[])

    const removeData = useCallback(()=>{
        setBooks(null)
        setSuccess(null)
        localStorage.removeItem(storageName)
    },[])


    const getBook = useCallback(async () => {
        try {

            let data = await request(`${url}books`, 'GET', null, {})
            
            addData(data.data,data.success)
            
            console.log('getBook')
            
        }
        catch (e) { }
    }, []) 
    const deleteBook = useCallback(async(id)=>{
        try{
          let data= await request(`${url}book/${id}`, 'DELETE', null, {})
          getBook()
          console.log('delete')
        }
        catch(e){}
    })
    const createBook = useCallback(async(data)=>{
        try{
             await request(`${url}book`, 'POST', data, {})
            getBook()
            console.log('create')
        }
        catch(e){}
    })
    const updateBook = useCallback(async(data)=>{
        try{
              await request(`${url}book/${data._id}`, 'PUT', data, {})
              getBook()
              console.log('create')
            
        }
        catch(e){}
    })
   
    useEffect(()=>{
        setReady(false)
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data){
            addData(data.books,data.success)
        }
       
        setReady(true);
    },[addData])

    return {addData,removeData,ready,books,success,
        getBook,deleteBook,createBook,updateBook}
}