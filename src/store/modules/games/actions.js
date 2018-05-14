import * as types from './actionTypes';

export function fetchGames() {
  return dispatch => {
    const mockedGames = [
      { key: 'Brazil', homeGuess: 1, awayGuess: 4 },
      { key: 'Germany', homeGuess: 2, awayGuess: 1 },
      { key: 'Italy', homeGuess: 5, awayGuess: 0 },
    ];
    dispatch({ type: types.GAMES_FETCHED, gamesByKey: mockedGames });
  };
}
