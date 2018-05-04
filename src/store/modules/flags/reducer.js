import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  activeSwiperScreen: 1,
});

export default function reduce(state = initialState, action = {}){
  switch (action.type) {
    case types.ACTIVE_SCREEN_SWIPER:
      return Object.assign({}, state, { activeSwiperScreen: action.payload });
    default:
      return state;
  }
}
