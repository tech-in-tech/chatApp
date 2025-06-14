import { TbPasswordUser } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";
const Login = () => {


  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })


  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  console.log(loginData)
  return (

    <div className='flex justify-center flex-col items-center h-[100vh]'>

      <div className='max-w-[30rem] bg-base-300 border flex flex-col gap-5 rounded-lg w-full  p-10'>
        <h1 className='text-4xl transition-all duration-300 hover:translate-y-[-2px]'>Welcome to <span className=' font-extrabold animate-pulse text-yellow-800'>TalkSick</span></h1>
        <h2 className='transition-all duration-300 hover:translate-y-[-2px]'>Please Login...</h2>
        <div className='space-y-5'>
          <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
            <FaUserAstronaut />
            <input type="text" className="grow w-full" name="username" placeholder="Username" onChange={handleInputChange} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full transition-all duration-200 hover:scale-[1.01]">
            <TbPasswordUser />
            <input type="password" className="grow w-full" name="password" placeholder="Password" onChange={handleInputChange} />
          </label>
        </div>
        <button className="btn btn-primary bg-blue-500 transition-all duration-200 hover:scale-105 active:scale-95">Login</button>
        <p className='text-sm flex gap-2 transition-all duration-300 hover:translate-y-[-2px]'>Don't have an account please.
          <Link to={"/signup"}>
            <span className='text-blue-600 font-bold underline decoration-2 transition-all duration-200 hover:text-blue-800'>SignUp</span>
          </Link>
        </p>
      </div>
    </div>

  )
}

export default Login
