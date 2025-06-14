import React, { useState } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { TbShieldLockFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaUserNinja } from "react-icons/fa";
const Signup = () => {

  const[signupData,setSignupData] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
  })

  const handleInputChange = (e)=>{
    setSignupData({
      ...signupData,
      [e.target.name] : e.target.value,
    })
  }
  console.log(signupData)

  return (
    <div>
      <div className='flex justify-center flex-col items-center h-[100vh]'>
      
            <div className='max-w-[30rem] bg-base-300 border flex flex-col gap-5 rounded-lg w-full  p-10'>
              <h1 className='text-4xl transition-all duration-300 hover:translate-y-[-2px]'>Welcome to <span className=' font-extrabold animate-pulse transition-all text-yellow-800'>TalkSick</span></h1>
              <h2 className='transition-all duration-300 hover:translate-y-[-2px]'>Please create your account...</h2>
              <div className='space-y-5'>

                <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
                  <FaUserNinja />
                  <input type="text" className="grow w-full" placeholder="Full name" name='fullName' onChange={handleInputChange} />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
                  <FaUserSecret/>
                  <input type="text" className="grow w-full" placeholder="Username" name='username' onChange={handleInputChange}/>
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
                  <TbShieldLockFilled />
                  <input type="password" className="grow w-full" placeholder="Password" name='password' onChange={handleInputChange}/>
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
                  <RiLockPasswordFill />
                  <input type="password" className="grow w-full" placeholder="Cirform password" name='confirmPassword' onChange={handleInputChange}/>
                </label>

              </div>
              <button className="btn btn-primary bg-blue-500 transition-all duration-200 hover:scale-105 active:scale-95">Signup</button>
              <p className='text-sm flex gap-2 transition-all duration-300 hover:translate-y-[-2px]'>Already have an account please.
                <Link to={"/login"}>
                  <span className='text-blue-600 font-bold underline decoration-2 transition-all duration-200 hover:text-blue-800'>Login</span>
                </Link>
              </p>
            </div>
          </div>
    </div>
  )
}

export default Signup
