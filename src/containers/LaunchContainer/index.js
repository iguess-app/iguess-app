/* @flow */

import React, { Component } from 'react'
import { Platform, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'

class LaunchContainer extends Component<void, void, void> {
  render() {
    return (
        <Container>
          <Text>iGuess is working!</Text>
        </Container>
    )
  }
}

export default LaunchContainer
