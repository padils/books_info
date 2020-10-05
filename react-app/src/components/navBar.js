import React from 'react'
import { useHistory } from 'react-router-dom';
import Search from './search';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../redux/authThunk';


const Navbar =({logout,userId})=>{
    let history=useHistory()


    return <nav className='navbar navbar-expand-lg navbar-light bg-light navBar '>
    
   
          <div >
               <div className=' navbar-brand ' >
                    <a  style={{cursor:'pointer'}} 
                    onClick={()=>history.push(`/`)}>Books info</a>
               </div>   
                
                  </div>
                  <ul className="navbar-nav mr-auto">
                              <li className='nav-item active'>
                               <div ><a className='nav-link' onClick={()=>history.push(`/`)} >Books</a></div>
                              </li>
                              <li className='nav-item'> 
                               <div ><a className='nav-link' onClick={()=>history.push(`/create`)}>Create </a></div>
                              </li>
                             {userId && <li className='nav-item'> 
                               <div ><a className='nav-link' onClick={()=>logout({userId})}>logout </a></div>
                              </li>}
                  </ul>
                  <div className='my-2 my-lg-0' style={{textAlign:'right'}} ><Search/></div>
              

            </nav>

            
        
}

let mapStateToProps=(state)=>{
     return {
         
         userId:state.auth.userId
     }
   }
   
   
   export default  compose(connect(mapStateToProps,{logout})(Navbar))

