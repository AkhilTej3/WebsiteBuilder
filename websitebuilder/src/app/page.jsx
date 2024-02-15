import React from 'react'
import axios from "axios"
export default function page() {

  const createApp = ()=>{
    axios.get("http://localhost:3003/").then((res)=>{
      console.log(res)
    })
  }
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <p className='text-3xl font-bold'>Hello User</p>
    </div>
  )
}
