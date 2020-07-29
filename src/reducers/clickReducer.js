
import { CLICK_UPDATE_VALUE, CREATE, DELETE } from '../actions/actionTypes';

const initialState = {
  newValue: []
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    case CREATE:
      return state.newValue.concat(action.newValue)
    case 'COMANDA':
      if(state['newValue']) return state['newValue'].concat([action.newValue])
      return state
    case DELETE:
      return state.filter((post)=>post.id !== action.id);
    default:
      return state;
  }
};