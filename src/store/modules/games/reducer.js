import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  gamesByKey: undefined,
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.GAMES_FETCHED:
      return state.merge({ gamesByKey: action.gamesByKey });
    case types.MAKE_GUESS:
      return state;
    default:
      return state;
  }
}

// selectors

export function getGames(state) {
  return state.games.gamesByKey;
}
