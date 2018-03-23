/* @flow */

import React, { Component } from 'react';
import Notification from '@components/Notification';
import AddGuessline from '@components/AddGuessline';
import Lines from '@containers/Lines';
import Profiles from '@containers/Profiles';
import Leagues from '@containers/Leagues';
import NavigationBar from '@components/NavigationBar';
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors';
import Swiper from '@components/Swiper';
import { connect } from 'react-redux';
import { showNotification, swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import { View } from 'react-native';
import background from './background.png';

class LaunchContainer extends Component<void, void, void> {
  render() {
    const dispatch = this.props.dispatch;
    const { unreadNotification, activeSwiperScreen } = this.props;

    return (
      <Container>
        <View style={{ position: 'absolute' }}>
          <Background source={background} />
        </View>
        <NavigationBar
          activeSwiperScreen={activeSwiperScreen}
          onPressNotification={status => dispatch(showNotification(status))}
          unreadNotification={unreadNotification}
        />
        <Swiper change={index => dispatch(swipe(index))}>
          <Profiles />
          <Lines />
          <Leagues />
        </Swiper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding-top: 40;
`;

const Background = styled.Image`
  flex: 1;
  resizemode: cover;
`;

function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification,
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(LaunchContainer);
