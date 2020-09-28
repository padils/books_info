
import { useState, useCallback, useEffect } from 'react';

const storageName = 'BooksData';

export const useBooksData = ()=>{
    let [books,setBooks]=useState(null);
    let [success,setSuccess]=useState(null);
    const [ready, setReady] = useState(false)

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

    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem(storageName))
        if(data){
            addData(data.books,data.success)
        }
       
        setReady(true);
    },[addData])

    return {addData,removeData,ready,books,success}
}