import React, { Component } from 'react';
import Lines from '@scenes/Lines';
import Settings from '@scenes/Settings';
import { setStatusBarStyle } from '@helpers';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';

class Core extends Component<void, void, void> {
  render() {
    console.log('Auth token:', this.props.authenticationToken);

    const { dispatch, activeSwiperScreen } = this.props;

    setStatusBarStyle(activeSwiperScreen == 0 ? 'black' : 'white');

    return (
      <BackgroundContainer>
        <Swiper
          loop={false}
          index={1}
          showsPagination={false}
          onIndexChanged={index => dispatch(swipe(index))}
          ref={ref => (this.swiper = ref)}
        >
          <Settings swipe={() => this.swiper.scrollBy(1)} />
          <Lines swipe={() => this.swiper.scrollBy(-1)} />
        </Swiper>
      </BackgroundContainer>
    );
  }
}

const BackgroundContainer = styled.View`
  flex: 1;
`;

function mapStateToProps(state) {
  return {
    activeSwiperScreen: state.flags.activeSwiperScreen,
    authenticationToken: state.authentication.token,
  };
}

export default connect(mapStateToProps)(Core);
