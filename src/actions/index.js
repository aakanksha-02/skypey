import SET_ACTIVE_USER_ID from '../constants/SET_ACTIVE_USER_ID';
import SET_TYPING_VALUE from '../constants/SET_TYPING_VALUE';
import SEND_MESSAGE from '../constants/SEND_MESSAGE'

//Action Creator
export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
})

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})

