import * as types from './actionTypes';

export const swipe = (payload): Action => ({
  type: types.ACTIVE_SCREEN_SWIPER,
  payload,
});