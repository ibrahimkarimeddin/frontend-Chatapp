import { Avatar,Button } from '@mui/material'
import React from 'react'
import ChatIcon from "@mui/icons-material/Chat"
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { chagechose } from '../../../Redux/counterSlice';
function HeadSideBar() {
  const dispatch = useDispatch()
  const ss  = ()=>{
    dispatch(chagechose(2))
  }
  return (
    <div className='bg-gray-100 h-16 flex justify-between p-2 border-b-2 pb-5 border-r-2'>
        <div>
            <Avatar className="relative top-1 left-2">
              <img src="/me.jpg" alt="" />
              </Avatar> 
         </div>
        <div className='flex justify-around w-[40%]'>
            <Avatar sx={{background:"none" , color:"gray"}}><Button><ChatIcon 
             onClick={ss} style={{color:"gray"}}/></Button></Avatar>
            <Avatar sx={{background:"none"}}><Button><AutorenewOutlinedIcon style={{color:"gray"}}/></Button></Avatar>    
        </div>
    </div>
  )
}

export default HeadSideBar