/* @flow */

import React from 'react'
import LaunchContainer from '@containers/Launch'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container} hideNavBar={true}>
    <Scene key="home" component={LaunchContainer}/>
  </Scene>
)

export default scenes
