import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  activeLine: [],
  loading: false,
  error: null,
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LINE_BEGIN:
      return state.merge({ loading: true });
    case types.FETCH_LINE_SUCCESS:
      return state.merge({ loading: false, activeLine: action.payload.line });
    case types.FETCH_LINE_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload.error,
        activeLine: [],
      });
    default:
      return state;
  }
}
