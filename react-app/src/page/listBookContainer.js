import React, { useContext, useEffect, useCallback, useState } from 'react'
import Book from './Book'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { creatBook, deleteBook } from './../redux/thunk';
import CreateBookInputs from './createBook';
import ListBook from './listBook';
import { BooksContext } from '../context/booksContext';
import { useHttp } from '../hooks/http.hook';
import { getBookApi } from './../api/api';



const ListBookContainer = (props) => {

    const books = useContext(BooksContext)

    const { request, loading } = useHttp()
    const [booksData, setBookData] = useState()

    const url = 'http://localhost:3000/api/'


    const getBook = useCallback(async () => {
        try {

            let data = await request(`${url}books`, 'GET', null, {})
            setBookData(data.data)
            books.addData(data.data,data.success)
            

            console.log('getBook')
            
        }
        catch (e) { }
    }, [])
  
    const deleteBook=useCallback(async(id)=>{
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
              await request(`${url}book`, 'PUT', data, {})
            getBook()
            console.log('create')
        }
        catch(e){}
    })

    useEffect(() => {

        getBook()
    }, [getBook])
    console.log(books.books)
    if (!booksData) {
        return <div>
            loading..
       </div>
    }
    return <div>
        <ListBook books={booksData} deleteBook={deleteBook} />
        <CreateBookInputs createBook={createBook} updateBook={updateBook}/>

    </div>

}


export default ListBookContainer

