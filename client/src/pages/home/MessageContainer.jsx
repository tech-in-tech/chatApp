import React from 'react'
import User from './User'
import { IoSend } from "react-icons/io5";
import Message from './Message'

const MessageContainer = () => {
  return (
    <div className='bg-slate-900 flex flex-col w-full h-screen'>
      <div className='p-4'>
        <User />
      </div>

      <div className='flex-grow overflow-y-auto p-4'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className='w-auto flex p-4 gap-3 '>
        <input
          type="text"
          placeholder="Type here.`..."
          className="input input-bordered input-primary w-full" />


        <button class="btn btn-square btn-primary w-[3rem] btn-outline">
          <IoSend/>
        </button>
      </div>
    </div>
  )
}

export default MessageContainer
