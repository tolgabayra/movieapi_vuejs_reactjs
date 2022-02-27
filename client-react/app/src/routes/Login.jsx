import React from 'react'
import { useState } from 'react'
import {appAxios} from "../utils/appAxios.js"
import {useNavigate} from "react-router-dom"


export default function Login() {
 const [email, setEmail] = useState("")

 const [password, setPassword] = useState("")
 let navigate = useNavigate()


 const Login = () => {
    appAxios.post("/api/auth/login", {email,password} )
    .then((res) => {
      console.log(res.data);
      if(res.status === 200){
        localStorage.setItem("user", JSON.stringify(res.data.user))

        navigate("/")
      }
    })
    

  //  Axios.post("localhost:5000/api/auth/login",userData).then((res) => {
  //    console.log(res);
   }
 

  return (
    <>
    <div className='h-screen flex bg-gray-400'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center text-red-600'>
                    Log in to your account 🔐
                </h1>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            onChange={(e)=>{
                              setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-red-600 py-2 px-4 text-sm text-white rounded-3xl  border border-green active:bg-red-400`}
                            onClick={Login}
                        >
                            Login
                        </button>
                    </div>
            </div>
        </div>
        </>
  )
}
