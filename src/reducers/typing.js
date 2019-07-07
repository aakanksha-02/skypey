import SET_TYPING_VALUE from '../constants/SET_TYPING_VALUE';
import SEND_MESSAGE from '../constants/SEND_MESSAGE';

export default function typing(state='', action){
  switch(action.type){
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return '';
    default:
      return state;
  }
}