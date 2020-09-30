import React from 'react'
import { useHistory } from 'react-router-dom';
import Search from './search';


const Navbar =()=>{
    let history=useHistory()

    return <div className=' navBar container '>
    
   
          <div className="row card-panel allColor ">
           
               <div className='col s8' >
                    <a  style={{cursor:'pointer'}} 
                    onClick={()=>history.push(`/`)}>Books info</a>

               </div>   
                
                  <div className='col s4'>
                        <div className='col s2'><a onClick={()=>history.push(`/create`)}>Create </a></div>
                        <div className='col s2'><a onClick={()=>history.push(`/`)} >Books</a></div>
                        <div className='col s8' ><Search/></div>
                    
                  </div>

            </div>
        </div>
}



export default Navbar