import * as actionTypes from "./actionTypes";
import axiosInstance from "../../../../config/axiosInstance";
export const setLoadingStatus = value => {
  return {
    type: actionTypes.UPDATE_LOADING_STATUS,
    value: value
  };
};
const getWordsSuccess = words => {
  return {
    type: actionTypes.GET_WORDS_SUCCESS,
    words: words
  };
};
const getWordsError = error => {
  return {
    type: actionTypes.GET_WORDS_ERROR,
    error: error
  };
};
export const getWords = wordNumber => {
  return dispatch => {
    dispatch(setLoadingStatus(true));
    axiosInstance
      .get("/wordFrequency/get", {
        params: {
          number: wordNumber
        }
      })
      .then(result => {
        const words = result.data.words;
        dispatch(getWordsSuccess(words));
        dispatch(setLoadingStatus(false));
      })
      .catch(err => {
        dispatch(getWordsError(err));
        dispatch(setLoadingStatus(false));
      });
  };
};
