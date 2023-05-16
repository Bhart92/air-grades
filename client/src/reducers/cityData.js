import { GET_CITY_DATA } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_CITY_DATA:
      return { ...state, data };
    default:
      return state;
  }
}
