import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import Appsee from 'react-native-appsee';
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
    Appsee.startScreen('Core');

    const { dispatch, activeSwiperScreen } = this.props;

    setStatusBarStyle(activeSwiperScreen == 0 ? 'black' : 'white');

    return (
      <BackgroundContainer>
        <Swiper
          loop={false}
          index={activeSwiperScreen ? activeSwiperScreen : 1}
          showsPagination={false}
          onIndexChanged={index => dispatch(swipe(index))}
          ref={ref => (this.swiper = ref)}
        >
          <Settings swipe={() => this.swiper.scrollBy(1)} />
          <Lines
            swipe={() => this.swiper.scrollBy(-1)}
            swipeLeagues={() => this.swiper.scrollBy(1)}
          />
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
