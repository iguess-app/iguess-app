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

export function makeGuess(key) {
  return (dispatch, getState) => {
    const game = getState().games.gamesByKey.find(game => game.key === key);
    console.log(game.AwayGuess);
    dispatch({ type: types.MAKE_GUESS });
  };
}
