/* @flow */

import React from 'react'
import LaunchContainer from '@containers/Launch'
import { Actions, Scene } from 'react-native-router-flux'

const scenes = Actions.create(
  <Scene key="app" hideNavBar={true}>
    <Scene key="home" component={LaunchContainer}/>
  </Scene>
)

export default scenes
