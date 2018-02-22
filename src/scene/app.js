/* @flow */

import React from 'react'
import LaunchContainer from '@containers/LaunchContainer'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="home" component={LaunchContainer} title="Home" />
  </Scene>
)

export default scenes
