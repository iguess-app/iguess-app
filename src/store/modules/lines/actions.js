import * as types from './actionTypes';
import { get } from '@helpers';
import DeviceInfo from 'react-native-device-info';

export function fetchLine() {
  return dispatch => {
    // Inform to reducer that fetch beginned
    dispatch(fetchLineBegin());

    get(
      `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}`,
    )
      .then(line => {
        dispatch(fetchLineSuccess(line));
      })
      .catch(() => fetchLineError('Error fetching data'));
  };
}

export function resetLine() {
  return { type: types.RESET_LINE };
}

export const fetchLineBegin = () => ({ type: types.FETCH_LINE_BEGIN });

export const fetchLineSuccess = line => ({
  type: types.FETCH_LINE_SUCCESS,
  payload: { line },
});

export const fetchLineError = error => ({
  type: types.FETCH_LINE_FAILURE,
  payload: { error },
});
