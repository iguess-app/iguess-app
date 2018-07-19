import * as types from './actionTypes';
import { get, setStoredToken } from '@helpers';
import Appsee from 'react-native-appsee';
import DeviceInfo from 'react-native-device-info';
import { Actions } from 'react-native-router-flux';

export function fetchLine() {
  return dispatch => {
    Appsee.addEvent('fetchLine');
    // Inform to reducer that fetch beginned
    dispatch(fetchLineBegin());

    get(
      `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}`,
    )
      .then(line => {
        if (line.statusCode === 401) {
          setStoredToken('');
          Actions.reset('home');
        } else {
          dispatch(fetchLineSuccess(line));
        }
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
