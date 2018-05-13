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

export function makeGuess(key) {
  return (dispatch, getState) => {
    const game = getState().games.gamesByKey.find(game => game.key === key);
    dispatch({ type: types.MAKE_GUESS });
  };
}
