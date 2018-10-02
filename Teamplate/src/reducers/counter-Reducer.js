import { INCREASE, DECREASE, GET_DATA_SUCCEED, GET_DATA_FAILED } from '../actions/action-type';


const initialState = {
  counter: 0,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };

    case DECREASE:
      return { ...state, counter: state.counter - 1 };

    case GET_DATA_SUCCEED:
      return { ...state, data: action.data };
    case GET_DATA_FAILED:
      return state;
    default:
      return state;
  }
}