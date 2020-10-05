import React, { useContext, useState } from 'react'
import { BooksContext } from '../../context/booksContext';



const Auth =()=>{

    let {register,login}=useContext(BooksContext)
    let [form,setForm]=useState({email:'',password:''})
    

    return <div>
        <div>
           <span>email:</span> <input 
           onChange={e=>setForm({...form,email:e.target.value})}
           value={form.email}
            placeholder='email'/>
        </div>
        <div>
        <span>password:</span> <input
        onChange={e=>setForm({...form,password:e.target.value})}
        value={form.password}
        type='password'
         placeholder='password'   
         />
        </div>
        <div>
            <div>
                <button
                onClick={()=>register(form)}>register</button>
            </div>
            <div>
                <button
                onClick={()=>login(form)}>sign in</button>
            </div>
        </div>
    </div>
}


export default Auth