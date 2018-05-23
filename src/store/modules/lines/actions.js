import * as types from './actionTypes';
import { get } from '@helpers';

export function fetchLine() {
  const mockedGames = [
    { key: 'Brazil', homeGuess: 1, awayGuess: 2 },
    { key: 'Germany', homeGuess: 2, awayGuess: 1 },
    { key: 'Italy', homeGuess: 5, awayGuess: 0 },
  ];

  return dispatch => {
    // Inform to reducer that fetch beginned
    dispatch(fetchLineBegin());

    get('https://iguess-666666.appspot.com/guessline/getGuessLine')
      .then(line => {
        dispatch(fetchLineSuccess(line));
      })
      .catch(() => fetchLineError('Error fetching data'));
  };
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
