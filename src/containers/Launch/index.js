/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
import Notification from '@components/Notification'
import Lines from '@containers/Lines'
import Profiles from '@containers/Profiles'
import Leagues from '@containers/Leagues'
import ScenesLine from '@components/ScenesLine'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import Swiper from '@components/Swiper'
import { connect } from 'react-redux';
import { showNotification, swipe } from '@redux/flags/actions';
import styled from 'styled-components';

class LaunchContainer extends Component<void, void, void> {
  
  render() {

    const dispatch = this.props.dispatch;
    const { unreadNotification, activeSwiperScreen } = this.props

    return (
      <Container>
        <Notification unread={unreadNotification} onPress={(status) => dispatch(showNotification(status))}/>
        <ScenesLine activeSwiperScreen={activeSwiperScreen}/>
        <Swiper change={(index) => dispatch(swipe(index))}>
          <Profiles/>
          <Lines />
          <Leagues />
        </Swiper>
      </Container>
    )
  }
}

const Container = styled.View`
    flex: 1;
    paddingTop: 40;
    backgroundColor: ${DEFAULT_BACKGROUND_COLOR};
`

function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification,
    activeSwiperScreen: state.flags.activeSwiperScreen
  }
}

export default connect(mapStateToProps)(LaunchContainer);
