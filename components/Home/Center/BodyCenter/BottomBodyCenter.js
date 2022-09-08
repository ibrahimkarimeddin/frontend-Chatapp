import React, { useState,useRef } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { Avatar,Button } from '@mui/material'
import {socket} from "../../../../axios/Socketio"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pushmymessage } from '../../../../Redux/counterSlice';
import NearMeIcon from '@mui/icons-material/NearMe';
function BottomBodyCenter() {
  const dispatch= useDispatch()
  const room = useSelector(state => state.counter.room_name)
  useEffect(()=>{

  },[room])
  const InputMessage=useRef(null)
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    dispatch(pushmymessage(message))
    socket.emit("send_message", { message, room });
    InputMessage.current.value=""
    setMessage("")

  };
  const sendMessage2 = (e) => {
    if(e.key == "Enter"){
      dispatch(pushmymessage(message))
      socket.emit("send_message", { message, room });
    InputMessage.current.value=""
    setMessage("")

    }
    


  };
  return (
    <div className=" w-full  h-16 z-100 flex justify-around bg-gray-100 items-center ">
        <Avatar sx={{background:"none" , color:"gray"}}><Button><EmojiEmotionsOutlinedIcon style={{color:"gray"}} className="text-[45px]"/></Button></Avatar>
        <input className="w-[80%] outline-none h-[80%] rounded-lg p-2 " 
        type="text" placeholder='Enter Message'
        onChange={(e)=> setMessage(e.target.value)} ref={InputMessage}
        onKeyDown={sendMessage2}/>
        <Avatar sx={{background:"none" , color:"gray"}}><Button><NearMeIcon style={{color:"gray"}} 
         className="text-[35px] rotate-45 mr-5 " onClick={()=> sendMessage()}/></Button></Avatar>

    </div>
  )
}

export default BottomBodyCenter