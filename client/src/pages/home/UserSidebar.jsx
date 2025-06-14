import React from 'react'
import { BsSearchHeart } from "react-icons/bs";
import User from './User';
const UserSidebar = () => {
  return (
    <div className='max-w-[20rem] w-full h-screen flex flex-col gap-5 bg-black'>
      <h1 className='font-extrabold text-4xl text-center text-yellow-700 underline'>TalkSick</h1>



      <div className='p-3'>
        <label class="input input-bordered flex items-center gap-4 rounded-lg">
          <BsSearchHeart className='w-5 h-5' />
          <input type="text" class="grow" placeholder="Search" />
        </label>
      </div>




      <div className='h-full overflow-y-scroll px-3 space-y-4 '>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>




      <div className='h-[3rem] bg-black mb-2 flex justify-between items-center'>

        
        <div class="avatar m-3">
          <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button class="btn btn-active m-3 px-4 sm:px-6 md:px-8 lg:px-10 btn-primary  border-none font-bold">Logout</button>
      </div>

    </div>
  )
}

export default UserSidebar
