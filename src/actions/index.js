import SET_ACTIVE_USER_ID from '../constants/action-types';

//Action Creator
export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: {
    id
  }
})