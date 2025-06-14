import React from 'react'

const Message = () => {
  return (
    <>

      <div class="chat chat-start pb-3 ">
        <div class="chat-image avatar ">
          <div class="w-10 rounded-full ">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div class="chat-header ">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble chat-bubble-primary">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>

      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble chat-bubble-secondary">I hate you!</div>
        <div class="chat-footer opacity-50">Seen at 12:46</div>
      </div>

    </>
  )
}

export default Message
