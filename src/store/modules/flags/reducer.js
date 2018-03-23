/* @flow */

import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  notification: false,
  activeSwiperScreen: 1,
});

type Action = Object<{ type: string, payload: boolean }>;
type Flags = Object<{ notification: boolean, activeSwiperScreen: number }>;

export default function reduce(
  state: Flags = initialState,
  action: Action = {},
): Flags {
  switch (action.type) {
    case types.NOTIFICATION:
      return Object.assign({}, state, { notification: !state.notification });
    case types.ACTIVE_SCREEN_SWIPER:
      return Object.assign({}, state, { activeSwiperScreen: action.payload });
    default:
      return state;
  }
}
