import React from 'react'
import { useHistory } from 'react-router-dom';
import Search from './search';


const Navbar =()=>{
    let history=useHistory()

    return <nav className='navbar navbar-expand-lg navbar-light bg-light navBar  '>
    
   
          <div >
           
               <div className=' navbar-brand ' >
                    <a  style={{cursor:'pointer'}} 
                    onClick={()=>history.push(`/`)}>Books info</a>

               </div>   
                
                  </div>
                  <ul className="navbar-nav mr-auto">
                              <li className='nav-item active'> <div ><a className='nav-link' onClick={()=>history.push(`/`)} >Books</a></div></li>

                              <li className='nav-item'> <div ><a className='nav-link' onClick={()=>history.push(`/create`)}>Create </a></div></li>
                  </ul>
                  <div className='my-2 my-lg-0' style={{textAlign:'right'}} ><Search/></div>
              

            </nav>

            
      //       return (<nav class="navbar navbar-expand-lg navbar-light bg-light navBar">
      //       <a class="navbar-brand" href="#">Navbar</a>
      //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //         <span class="navbar-toggler-icon"></span>
      //       </button>
      //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      //         <div class="navbar-nav">
      //           <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      //           <a class="nav-link" href="#">Features</a>
      //           <a class="nav-link" href="#">Pricing</a>
      //           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      //         </div>
      //       </div>
      //     </nav>  )
        
}



export default Navbar