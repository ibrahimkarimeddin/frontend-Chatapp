import React from 'react'
import Center from '../components/Home/Center/Center'
import Sidebar from '../components/Home/Sidebar/Sidebar'

function Home() {
  return (
    <div className='h-screen w-screen flex  overflow-hidden'>
        <div className='h-full w-[28%] '>
          <Sidebar/>
        </div>
        <div className='h-full w-[72%]'>
          <Center/>
        </div>
    </div>
  )
}

export default Home