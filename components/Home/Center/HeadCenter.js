import React ,{useState}from 'react'
import { Avatar,Button } from '@mui/material'
import { useSelector } from 'react-redux'

function HeadCenter() {
  const a = (useSelector(state => state.counter.currentUser))

  return (
    <div className='h-[64px] bg-gray-100 border-b-2 border-l-   '>
      <div className="flex items-center h-full  ml-6">
        <Avatar>
          <img src="/conva.jpg" alt="" /> 
        </Avatar>
        <h1 className="font-simebold ml-3">{a}</h1>
      </div>

    </div>
  )
}

export default HeadCenter