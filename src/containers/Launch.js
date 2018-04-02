/* @flow */

import React, { Component } from 'react';
import Lines from '@containers/Lines';
import Settings from '@containers/Settings';
import Swiper from '@components/Swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import { BACKGROUND, SCENE_BACKGROUND_COLOR } from '@theme';

class LaunchContainer extends Component<void, void, void> {
  render() {
    const { dispatch, activeSwiperScreen } = this.props;

    const background = activeSwiperScreen == 0 ? undefined : <Background />;

    return (
      <Container>
        {background}
        <Swiper change={index => dispatch(swipe(index))}>
          <Settings />
          <Lines />
        </Swiper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding-top: 40;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

const Background = styled.Image.attrs({
  source: BACKGROUND,
})`
  flex: 1;
  resize-mode: cover;
  position: absolute;
`;

function mapStateToProps(state) {
  return {
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(LaunchContainer);
