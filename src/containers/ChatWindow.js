import React from 'react'
import './styles/ChatWindow.css'

const ChatWindow = ({ actieUserId }) => {
  return (
    <div className='ChatWindow'>
      Conversation for user id: {actieUserId} 
    </div>
  )
}

export default ChatWindow;
