import React from 'react'
import { Provider } from 'react-redux'
import createStore from '@store/create'
import Router from '@scenes'

export default () => (
    <Provider store={createStore()}>
      <Router />
    </Provider>
)
