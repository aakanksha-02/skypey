import React from 'react';
import './styles/User.css'

export default function User({ user }) {
  const { name, profile_pic, status } = user;
  return (
    <div>
      <img 
        src={profile_pic}
        alt={name}
        className='User__pic'
      />
      <div className='User__details'>
        <p className='User__details-name'>{name}</p>
        <p className='User__details-status'>{status}</p>
      </div>
    </div>
  )
}
