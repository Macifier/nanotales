import * as actions from "../actions/actionTypes";
const initialState = {
  error: null,
  words: [],
  loading: false
};
const frequencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_LOADING_STATUS:
      return {
        ...state,
        loading: action.value
      };
    case actions.GET_WORDS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case actions.GET_WORDS_SUCCESS:
      return {
        ...state,
        words: action.words
      };
    default:
      return state;
  }
};
export default frequencyReducer;
