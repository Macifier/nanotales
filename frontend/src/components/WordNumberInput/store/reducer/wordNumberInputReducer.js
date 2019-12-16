import * as actions from "../actions/actionTypes";
const initialState = {
  wordNumber: {
    value: ""
  }
};
const wordNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_WORD_NUMBER:
      return {
        ...state,
        wordNumber: {
          ...state.wordNumber,
          value: action.value
        }
      };
    default:
      return state;
  }
};
export default wordNumberReducer;
