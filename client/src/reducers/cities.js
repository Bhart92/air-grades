import { GET_SUPPORTED_CITIES, CLEAR_FILTERS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_SUPPORTED_CITIES:
      return [...data];
    case CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
}