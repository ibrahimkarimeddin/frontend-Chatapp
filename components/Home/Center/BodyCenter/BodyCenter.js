import React from 'react'
import BottomBodyCenter from './BottomBodyCenter'
import HeadBodyCenter from './HeadBodyCenter'

function BodyCenter() {
  return (
    <div className="h-full  relative  bg-gray-100">
        <HeadBodyCenter/>
        <BottomBodyCenter/>
    </div>
  )
}

export default BodyCenter