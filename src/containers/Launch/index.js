/* @flow */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Container from '@components/Container'
import Notification from '@components/Notification'
import Lines from '@containers/Lines'
import Profiles from '@containers/Profiles'
import Leagues from '@containers/Leagues'
import NavigationBar from '@components/NavigationBar'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import Swiper from '@components/Swiper'

class LaunchContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <View>
          <Notification unread={true} onPress={() => console.log('Will show notification')}/>
        </View>
        <NavigationBar/>
        <Swiper>
          <Profiles/>
          <Lines />
          <Leagues />
        </Swiper>
      </Container>
    )
  }
}

export default LaunchContainer
