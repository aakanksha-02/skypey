import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions'
import './styles/MessageInput.css'

const MessageInput = ({ value }) => {

  const handleChange = e => {
    console.log('e.target.value',e.target.value);
    store.dispatch(setTypingValue(e.target.value));
  };

  const state = store.getState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  }
  

  return (
    <form 
      className="Message"
      onSubmit={handleSubmit}
    >
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
