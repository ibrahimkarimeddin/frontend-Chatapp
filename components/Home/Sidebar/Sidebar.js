import React, {useRef , useEffect,useState} from 'react'
import HeadSideBar from './HeadSideBar'
import BodySideBar from './Bodysidebar/BodySideBar';
import styled from 'styled-components';
import {Avatar , IconButton} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { chagechose } from '../../../Redux/counterSlice';
import {axiosFetchWithToken} from "../../../axios/axios"
import { useQuery } from 'react-query';
function Sidebar() {
  const dispatch = useDispatch()
  const [friend , setfriend ]= useState([])
const first = useRef()
const second = useRef()
const input = useRef()

 const chose = useSelector(state => state.counter.chose)
 const returnchat =()=>{
  dispatch(chagechose(1))
 }

  useEffect(()=>{
    if(chose == true){
      first.current.style.display = "none"
      first.current.style.display = "block"

    }
    else{
      first.current.style.display = "block"
      first.current.style.display = "none"

    }
  },[chose])
  const {isLoading , data , refetch} = useQuery("/friend" , ()=>{
    return axiosFetchWithToken.get(`/friend?search=${input.current.value}`).then(data => setfriend(data.data))
  },
  {
    cacheTime:0,
   retryDelay:30000,
   refetchOnWindowFocus: false,
   retry:10,
    enabled:false, 
    onSuccess:()=>{
      console.log("seccessful")
    },
  })
  const search =  ()=>{
   refetch()
  }
const [addperson , setaddperson ] = useState({})
  return (
    <div className='h-full flex flex-col'>
      <div ref={first}>
        <HeadSideBar/>
        <BodySideBar friend={addperson} />
      </div> 
        <div className="h-full w-full z-999" ref={second}>
          <div className="bg-[#008069] h-[120px]">
                <div className='relative top-16 left-3 text-white text-xl'>
                    <IconButton className='' onClick={returnchat}>
                     <ArrowForwardIosOutlinedIcon className="rotate-[180deg] mr-2  text-white" />
                   </IconButton>
                   <span className=' text-[22px] top-1 relative'>
                        New Conversations
                   </span>
                   
                </div>
          </div>
          <div className='p-[16px] bg-[#f6f6f6] border-2 flex items-center'>
            <div className="Searchbar">
                <input className="w-full border-none outline-none" ref={input} placeholder='Search for Friend' id="search" />
          </div>
          <SearchOutlinedIcon   className="cursor-pointer animate-bounce text-gray-500 " onClick={search} />

       </div>
       <div className='flex hover:bg-gray-50 h-[50px] items-center cursor-pointer border-b-2 border-gray-50'>
            <span className='ml-5 text-green-600'>
                 All User
            </span>
       </div>
       <divv className="h-[58vh] overflow-y-scroll">
          {isLoading ? <div className="text-center font-bold text-green-600 text-xl">Wait For Searching </div>
          :friend.length ==0 ? <div className="text-center text-md font-semibold">No Search for user </div> :friend.map(function(per){
                return(
                   <div  key={per.id} 
                   className='flex hover:bg-gray-50 h-[60px] items-center cursor
                   -pointer border-b-2 border-gray-100'
                   onClick={()=> setaddperson(per)}>

                        <Avatar src={per.img} className="ml-5  h-10 w-10 " />
                        <span className='ml-3'>
                              {per.username} 
                        </span>
                  </div>
                )
          })}
       </divv>
       
    </div>
    </div>
  )
}

export default Sidebar





