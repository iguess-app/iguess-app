import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  leagueName: 'Minha Ligas',
  addedFriends: [],
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LEAGUE_NAME:
      return state.merge({ leagueName: action.payload.name });
    case types.UPDATE_ADDED_FRIENDS:
      return state.merge({
        addedFriends: action.payload.addedFriends,
      });
    default:
      return state;
  }
}
