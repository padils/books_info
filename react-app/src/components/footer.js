import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { BooksContext } from '../context/booksContext';


const Footer =()=>{


  return <div className='page-footer'>
<div className="page-footer footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
  </div>
    
}



export default Footer