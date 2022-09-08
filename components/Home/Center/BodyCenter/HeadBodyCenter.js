import Message from './Message'
import { useEffect, useState,useRef } from "react";
import Socketio, {socket} from "../../../../axios/Socketio"
import { useDispatch, useSelector } from 'react-redux';
import { pushmymessage } from '../../../../Redux/counterSlice';

function HeadBodyCenter() {
  const room = useSelector(state => state.counter.room_name)
  const boo= useRef(true)
  const dispatch = useDispatch()
  const element= useRef()
 var mymes = useSelector(state => state.counter.mymessage)
    const [arr, setarr]= useState([])
    const [mess ,setmess]= useState("")
  useEffect(() => {
    if(boo.current){
      boo.current= false
      socket.on("receive_message",
       (data) => {
        console.log(data)
        setmess(data.message)
    })
    }
  }, [socket])
useEffect(()=>{
  if(mess != ""){
  setarr([...arr , {id:arr.length+1 ,messageLeader:2 , message: mess,time:33 }]) 
setmess("")
}
},[mess])
useEffect(()=>{
  if(mymes != ""){
  setarr([...arr , {id:arr.length+1 ,messageLeader:1, message:mymes,time:33 }])
     dispatch(pushmymessage(""))


}
},[mymes])
useEffect(()=>{
      element.current.scrollTop = element.current.scrollHeight
},[arr])
useEffect(()=>{
  setarr([])
},[room])
  return (
   <>
    <div className="h-[80%] bg-[#f0ebe3] takeimagewhatsapp overflow-y-scroll p-3" ref={element}>
      {
       arr.length>=1 &&  arr.map(
          function(mess){
            return(
              <Message mes={mess.message} user={mess.messageLeader} time={mess.time} key={mess.id}/>
            )
          }
        )
      }
    </div>
    <Socketio/>

   </>
  )
}

export default HeadBodyCenter