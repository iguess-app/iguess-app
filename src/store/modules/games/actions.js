import * as types from './actionTypes';

export function fetchGames() {
  return dispatch => {
    const mockedGames = [
      { key: 'Brazil', HomeGuess: 1, AwayGuess: 4 },
      { key: 'Germany', HomeGuess: 2, AwayGuess: 1 },
      { key: 'Italy', HomeGuess: 5, AwayGuess: 0 },
    ];
    dispatch({ type: types.GAMES_FETCHED, gamesByKey: mockedGames });
  };
}
