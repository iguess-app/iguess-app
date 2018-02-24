/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Notification from '@components/Notification'

class LaunchContainer extends Component<void, void, void> {
  render() {
    return (
        <Container>
          <View>
            <Notification onPress={() => console.log('notification clicked')}/>
          </View>
        </Container>
    )
  }
}

export default LaunchContainer
