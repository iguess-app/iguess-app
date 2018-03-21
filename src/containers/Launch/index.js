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
import { connect } from 'react-redux';
import { showNotification } from '@redux/flags/actions';

class LaunchContainer extends Component<void, void, void> {
  
  render() {

    const dispatch = this.props.dispatch;

    return (
      <Container>
        <View>
          <Notification unread={this.props.unreadNotification} onPress={(status) => dispatch(showNotification(status))}/>
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



function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification
  }
}

export default connect(mapStateToProps)(LaunchContainer);