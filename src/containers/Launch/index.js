/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import Container from '@components/Container'
import Notification from '@components/Notification'
import Lines from '@containers/Lines'
import Profiles from '@containers/Profiles'
import Leagues from '@containers/Leagues'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'

class LaunchContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <View>
          <Notification onPress={() => console.log('notification clicked')}/>
        </View>
        <Swiper loop={false} index={1} showsPagination={false}>
          <Profiles/>
          <Lines />
          <Leagues />
        </Swiper>
      </Container>
    )
  }
}

export default LaunchContainer
