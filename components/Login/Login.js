import React,{useState} from 'react'
import {useQuery, useMutation} from "react-query"
import {useRouter} from "next/router"
import { axiosFetchWithOutToken } from '../../axios/axios'
import { useDispatch } from 'react-redux';
import { changeltor } from '../../Redux/counterSlice';
function Login() {

  const [log,setlog]=useState({email:"",password:"",img:null})
  const router = useRouter()  
  const dispatch = useDispatch()
const {mutate:Fetches} = useMutation((info)=>{
      return axiosFetchWithOutToken.post("/login",info) },
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
    
       Fetches(log)
  }

const changeto = ()=>{
  dispatch(changeltor())

}

  return (
    <div className=' h-[77vh] w-screen flex justify-center'>
    <div className='w-[50vw] md:w-[40vw] lg:w-[25vw]  mt-[2%] rounded-md h-full overflow-hidden  bg-white  shadow-lg'>
        <img src='/register.jpg'  alt='' className='h-[35%] w-full rounded-md'/> 
        <h2 className='text-center font-semibold text-green-700 my-2'>Login Your  Acount</h2>
        <form className='flex w-full h-[25vh] items-center flex-col ' onSubmit={FetchFromDataBase}>
        <input type='text' className='h-4  outline-none bg-inherit border-b-2 border-green-400 p-3 mt-3' placeholder='Enter Your Email' 
        onChange={(e)=>setlog({...log ,email:e.target.value })}/><br/>
        <input type='text' className='h-4  outline-none bg-inherit border-b-2 border-green-400 p-3 mt-3' placeholder='Enter Your Password' 
        onChange={(e)=>setlog({...log ,password:e.target.value })}/>
        <button className='h-12    bg-green-400 w-52   rounded-lg  relative top-6 text-white'>Login</button><br/>

        </form>
        <div className='text-green-500 font-semibold mb-4 text-center mt-5'>Dont Have an Acount ?  <button className='text-green-700 font-bold'  onClick={changeto}>Register</button></div>
    </div>
</div>
  )
}

export default Login