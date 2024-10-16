import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm, setIsSignInForm]= useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }    

  return (
    <div>
   <Header/>
   <div className='absolute'>
   <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg' alt='bg-image'/>
   </div>
   <form className='absolute  p-12 w-3/12 bg-black bg-opacity-70 my-48 mx-auto left-0 right-0 text-white'>
   <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
   {!isSignInForm && ( <input type='text' placeholder='Enter your name' className='p-3 m-2 w-full bg-transparent border border-white'/>)}
    <input type='email' placeholder='Enter Email Address' className='p-3 m-2 w-full bg-transparent border border-white'/>
    <input type='password' placeholder='Enter password' className='p-3 m-2 w-full bg-transparent border border-white'/>
    <button className='p-4 m-2 bg-red-600 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New To Netfilx? Sign Up Now!" : "Already a User? Sign In Now!"}</p>
   </form>
   </div>
  
  )
}

export default Login
