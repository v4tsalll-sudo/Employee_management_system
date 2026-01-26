import React, { useState } from 'react'


const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = () => {
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div id='bg'  className='h-screen w-screen bg-[url(/Screenshot_2026-01-22-15-37-10-68_99c04817c0de5652397fc8b56c3b3817.jpg)] bg-no-repeat bg-cover flex items-center justify-center'>
      <div id='container' className='  h-[400px] w-[540px] flex flex-col '>
        
          <div id='upper' className=' h-[40%]  w-full flex flex-col justify-center items-center'>
            <img className='border border-gray-200 h-[75px] w-[75px] rounded-full ' src="/IMG_20260122_175251.png" alt="" />
            <p className='text-[28px] font-bold'>Login to continue</p>
          </div>
          <form onSubmit={function(e){
              e.preventDefault()
              submitHandler()
            }}
          id='lower' className=' h-[60%]  w-full flex flex-col items-center justify-between pb-5'>
            <div id='inner' className='w-[65%] h-[60%] flex flex-col gap-5'>
            <input value={email} onChange={function(e){
                  setEmail(e.target.value)
                }}
            id='int' className='h-[40px] w-full bg-gray-200 rounded-[7px] px-5' type="text" placeholder='Enter your email' />
            <input value={password} onChange={function(e){
                      setPassword(e.target.value)
                }}
            id='int' className='h-[40px] w-full bg-gray-200 rounded-[7px] px-5' type="text" placeholder='Enter your password' />
            </div>
            <button id='btn' className='h-[40px] w-[65%] bg-blue-400 text-white text-[23px] font-semibold rounded-[7px]'>Login</button>
          </form>
          
        
      </div>
        
    </div>
  )
}

export default Login