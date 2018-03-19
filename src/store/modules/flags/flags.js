/* @flow */

const NOTIFICATION = 'SHOW_NOTIFICATION'
const ACTIVE_SCREEN_SWIPER = 'ACTIVE_SCREEN_SWIPER'

const defaultFlags = {
  notification: false,
  activeSwiperScreen: 1
}

type Action = Object<{ type: string, payload: bool }>
type Flags = Object<{ notification: bool, activeSwiperScreen: number }>

export default function flags(state: Flags = defaultFlags, action: Action): Flags {
  switch (action.type) {
  case NOTIFICATION:
    return Object.assign({}, state, { notification: !state.notification })
  case ACTIVE_SCREEN_SWIPER:
    return Object.assign({}, state, { activeSwiperScreen: action.payload })
  default:
    return state
  }
}

export const changeSwiperChange = (payload): Action => ({
  type: ACTIVE_SCREEN_SWIPER,
  payload
})

export const showNotification = (payload): Action => ({
  type: NOTIFICATION,
  payload
})
