/* @flow */

import React, { Component } from 'react';
import Lines from '@containers/Lines';
import Profiles from '@containers/Profiles';
import Leagues from '@containers/Leagues';
import Navigation from '@containers/Navigation';
import Swiper from '@components/Swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import background from './background.png';

class LaunchContainer extends Component<void, void, void> {
  render() {
    const dispatch = this.props.dispatch;

    return (
      <Container>
        <Background source={background} />
        <Navigation />
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
  resize-mode: cover;
  position: absolute;
`;

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaunchContainer);
