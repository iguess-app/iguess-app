/* @flow */

import * as types from './actionTypes'

type Action = Object<{ type: string, payload: bool }>
type Flags = Object<{ notification: bool, activeSwiperScreen: number }>

export const changeSwiperChange = (payload): Action => ({
    type: types.ACTIVE_SCREEN_SWIPER,
    payload
})
  
export const showNotification = (payload): Action => ({
    type: types.NOTIFICATION,
    payload
})

