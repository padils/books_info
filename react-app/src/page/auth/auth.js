import React, {  useState} from 'react'
import { register } from '../../redux/authThunk';
import { login } from './../../redux/authThunk';
import { connect } from 'react-redux';
import { compose } from 'redux';



const Auth =({login,register})=>{

   
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




export default  compose(connect('',{login,register})(Auth))