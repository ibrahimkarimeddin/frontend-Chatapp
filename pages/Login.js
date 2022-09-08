import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import Login from './../components/Login/Login';
import Register from './../components/Login/Register';
import {useSelector } from "react-redux"
function login() {
    const router = useRouter()
    
    const registerOrLogin = useSelector(state => state.counter.change)
  return (
    <span className='take-image h-screen w-screen  absolute'>
    {
        registerOrLogin == true ? 
        <>
        <Register/>
        </>:
        <>
        <Login/>
        
        </>
    }
    </span>
  )
}

export default login