import React from 'react'
import BodyCenter from './BodyCenter/BodyCenter'
import HeadCenter from './HeadCenter'
import { useSelector } from 'react-redux';

function Center() {
  const current = useSelector(state => state.counter.currentUser)
  console.log(current)
  if(current == ""){
    return (
      <div className="con">
                <img src="/whats.jpg" alt="" className='image w-ful' />
      </div>
      
    )
  }
  return (
    <div className='h-screen'>
      <HeadCenter/>
      <BodyCenter/> 
      
    </div>
  )
}

export default Center