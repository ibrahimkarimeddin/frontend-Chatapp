import React ,{useEffect,useState}from 'react'
import { Avatar,Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { EnterUsertoChat } from '../../../../Redux/counterSlice'
function ChatList({data , secondData}) {
const dispatch = useDispatch()

if(secondData.length == 1 && secondData[0]==-1 ){
   return(
    <div className="w-full text-center font-bold text-red-600 mt-4">
        No User Have this Name      
    </div>
   )
}


const pushtoChat = (Chat)=>{
let a = typeof Chat.second_user === 'object' ? Chat.second_user.username: Chat.second_user
let username = localStorage.getItem("username")
let room_name=""
if(a> username ){
     room_name =a+username

}else{
    room_name= username+a
}


dispatch(EnterUsertoChat({a,room_name}))

}

  return (
   <div className="h-[580px] border-r-2 overflow-y-auto">
     <div className="h-16 flex justify-between  border-b-2 cursor-pointer "
               onClick={()=> dispatch(EnterUsertoChat({a:"group",room_name:"group"}))}>
                   <div className="flex mt-3 ml-3 ">
                        <Avatar className="mt-1">
                            <img src="/1.jpg" alt="" />
                        </Avatar>
                        <div className="ml-3">
                            <p>Group</p>
                            <p className="truncate w-[17vw]">all people</p>
                        </div>
                         
                   </div>
                   <div className="mt-3 mr-3">
                        
                   </div>
                </div>
    {
        ( secondData.length!== 0 ?secondData :data )
        
        .map(function(Chat){
            return (
                <div className="h-16 flex justify-between  border-b-2 cursor-pointer "
                 key={Chat.room_name} onClick={()=> pushtoChat(Chat)}>
                   <div className="flex mt-3 ml-3 ">
                        <Avatar className="mt-1"/>
                        <div className="ml-3">
                            <p>{typeof Chat.second_user === 'object' ? Chat.second_user.username: Chat.second_user}</p>
                            <p className="truncate w-[17vw]">{Chat.last_message=== null ? "Enter Chat for start Conversation": Chat.last_message}</p>
                        </div>
                         
                   </div>
                   <div className="mt-3 mr-3">
                        {Chat.date}
                   </div>
                </div>
            )
        })
    }
   </div>
  )
}

export default ChatList