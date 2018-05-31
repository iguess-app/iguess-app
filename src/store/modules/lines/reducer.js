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
      return state.merge({
        activeLine: action.payload.line,
        loading: false,
        error: null,
      });
    case types.FETCH_LINE_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload.error,
        activeLine: [],
      });
    case types.RESET_LINE:
      return state.merge({
        activeLine: [],
        loading: false,
        error: null,
      });
    default:
      return state;
  }
}
