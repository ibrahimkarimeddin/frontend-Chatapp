import React,{useEffect,useState} from 'react'
import { axiosFetchWithToken } from '../../../../axios/axios'
import SearchBar from './SearchBar'
import {useQuery, useMutation} from "react-query"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function BodySideBar({friend}) {
const [ChatList , setChatList] = useState([])
useEffect(()=>{
  console.log(friend)
  setChatList([friend , ...ChatList])
},[friend])
  const {isLoading , data} = useQuery("chat/room/get" , ()=>{
    return axiosFetchWithToken.get("/chat/room/get/").then(data => setChatList(data.data))
  },
  {
    cacheTime:0,
   retryDelay:30000,
   refetchOnWindowFocus: false,
   retry:10,
    enabled:true, 
    onSuccess:()=>{
      console.log("seccessful")
    },
  })
  if(isLoading){
    return (
      <div className='absolute h-[100vh] w-[100vw] top-0 -left-0  flex justify-center items-center bg-white z-[999]'>
        <div className="flex flex-col">
          <img src="/whatsapp.webp" alt="" className=" animate-bounce h-52 w-52 rounded-full"/>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />

         </Box>
         <h1 className="font-semibold text-md mt-2 text-blue-300">Waiting for Get Your Data .....</h1>
        </div>
       
      </div>
      
    )
  }
  return (
    <div className="h-screen">
      <SearchBar  data={ChatList}/>
    </div>
  )
}

export default BodySideBar