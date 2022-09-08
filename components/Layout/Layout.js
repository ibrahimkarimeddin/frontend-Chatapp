import React from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Layout() {
    const router = useRouter();
    useEffect(()=>{
        let Token = localStorage.getItem("token")
        if(Token){
            router.replace("/Home")
        }else{
           router.replace("/Login")
        }
    },[])  
  return (
    <div className='flex h-screen w-screen Layout-image '>
        

    </div>
  )
}

export default Layout