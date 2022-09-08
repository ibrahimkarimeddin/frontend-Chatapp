import React,{useState} from 'react'
import {useQuery, useMutation} from "react-query"
import {useRouter} from "next/router"
import { useDispatch} from "react-redux"
import { axiosFetchWithOutToken } from '../../axios/axios'
import { changeltor } from '../../Redux/counterSlice'
function Register() {
  const dispatch = useDispatch()
  const [reg,setreg]=useState({username:"",email:"",password:"",img:null})
  const router = useRouter()  
const {mutate:Fetches} = useMutation((info)=>{
      return axiosFetchWithOutToken.post("/register",info) },
      {
        refetchOnWindowFocus: false,
        onSuccess:(data)=>{
  
         localStorage.setItem("token", data.data.token)
         localStorage.setItem("username",data.data.user.username)
       
         router.replace("/")
        },
        onError:()=>{
          alert("error")
        }
      });
  const FetchFromDataBase=function(e){
    e.preventDefault()
    
       Fetches(reg)
  }

const change =()=>{
  console.log("helo")
  dispatch(changeltor())
}



  return (
    <div className=' h-[83vh] w-screen flex justify-center'>
        <div className='w-[50vw] md:w-[35vw] lg:w-[25vw]  mt-[2%] rounded-md h-full overflow-hidden  bg-white  shadow-lg'>
            <img src='/register.jpg'  alt='' className='h-[35%] w-full rounded-md'/> 
            <h2 className='text-center font-semibold text-green-700 my-2'>Create an Acount</h2>
            <form className='flex w-full h-[40vh] items-center flex-col ' onSubmit={FetchFromDataBase}>
            <input type='text' className='h-4  outline-none bg-inherit border-b-2 border-green-400 p-3 mt-3' placeholder='Enter Your Name'
             onChange={(e)=>setreg({...reg ,username:e.target.value})}/><br/>
            <input type='text' className='h-4  outline-none bg-inherit border-b-2 border-green-400 p-3 mt-3' placeholder='Enter Your Email'
             onChange={(e)=>setreg({...reg ,email : e.target.value})}/><br/>
            <input type='text' className='h-4  outline-none bg-inherit border-b-2 border-green-400 p-3 mt-3' placeholder='Enter Your Password'
             onChange={(e)=>setreg({...reg ,password : e.target.value})}/>
            <button className='h-12    bg-green-400 w-52   rounded-lg  relative top-6 text-white'>Register</button><br/>
            </form>
            <div className='   text-green-500 font-semibold  text-center '>Already Have an Acount ?  <button className='text-green-700 font-bold'  onClick={change}>Login</button></div>


        </div>

    </div>
  )
}

export default Register