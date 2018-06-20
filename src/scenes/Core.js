import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import UXCam from 'react-native-ux-cam';
import Lines from '@scenes/Lines';
import Settings from '@scenes/Settings';
import { setStatusBarStyle } from '@helpers';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

class Core extends Component<void, void, void> {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (Actions.currentScene === 'core') {
        BackHandler.exitApp();
        return true;
      }
    });
  }

  render() {
    UXCam.startWithKey('20f7d8b48c2c0c0');
    UXCam.tagScreenName('Core');

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
          {/* <Settings swipe={() => this.swiper.scrollBy(-2)} /> */}
        </Swiper>
      </BackgroundContainer>
    );
  }
}

const BackgroundContainer = styled.View`
  flex: 1;
`;

const mapStateToProps = state => {
  return {
    activeSwiperScreen: state.flags.activeSwiperScreen,
    authenticationToken: state.authentication.token,
  };
};

export default connect(mapStateToProps)(Core);
