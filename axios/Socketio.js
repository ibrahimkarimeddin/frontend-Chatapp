import { useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

 export const socket = io.connect("https://backend-whatsapp.vercel.app/");

  function Socketio() {
const room = useSelector(state => state.counter.room_name)
useEffect(()=>{
    joinRoom()

  },[room])

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
    return (
      <>
      </>
    )
  }
  
  export default Socketio
