/* @flow */

import React, { Component } from 'react';
import Lines from '@containers/Lines';
import Profiles from '@containers/Profiles';
import Leagues from '@containers/Leagues';
import Swiper from '@components/Swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import background from '@assets/images/background.png';
import Navigation from '@containers/Navigation';

class LaunchContainer extends Component<void, void, void> {
  render() {
    const dispatch = this.props.dispatch;
    let navigation = <Navigation />;
    return (
      <Container>
        <Background source={background} />
        <Swiper change={index => dispatch(swipe(index))}>
          <Profiles>{navigation}</Profiles>
          <Lines>{navigation}</Lines>
          <Leagues>{navigation}</Leagues>
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
