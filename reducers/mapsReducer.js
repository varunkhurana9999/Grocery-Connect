import {GRABPLACES} from '../acttypes/types'

const initialState = {
  groceryCoordinates: {},
  isLoading: true,
};


export default function(state = initialState, action) {
  switch(action.type) {
    case GRABPLACES:
      return {
        ...state,
        groceryCoordinates: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
