/* @flow */

import * as types from './actionTypes';

type Action = Object<{ type: string, payload: boolean }>;
type Flags = Object<{ notification: boolean, activeSwiperScreen: number }>;

export const swipe = (payload): Action => ({
  type: types.ACTIVE_SCREEN_SWIPER,
  payload,
});

export const showNotification = (payload): Action => ({
  type: types.NOTIFICATION,
  payload,
});
