/* @flow */

const NOTIFICATION = 'SHOW_NOTIFICATION'

const defaultFlags = {
  notification: false
}

type Action = Object<{ type: string, value: bool }>
type Flags = Object<{ notification: bool }>

export default function flags(state: Flags = defaultFlags, action: Action): Flags {
  switch (action.type) {
  case NOTIFICATION:
    return Object.assign(state, { notification: !state.notification })
  default:
    return state
  }
}

export const showNotification = (value): Action => ({
  type: NOTIFICATION,
  value
})
