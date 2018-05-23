import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  activeLine: undefined,
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.LINE_FETCHED:
      return state.merge({ activeLine: action.payload });
    default:
      return state;
  }
}
