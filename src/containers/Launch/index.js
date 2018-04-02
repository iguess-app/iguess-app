/* @flow */

import React, { Component } from 'react';
import Lines from '@containers/Lines';
import Profiles from '@containers/Profiles';
import Swiper from '@components/Swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';
import Navigation from '@containers/Navigation';
import { BACKGROUND } from '@theme';

class LaunchContainer extends Component<void, void, void> {
  render() {
    const dispatch = this.props.dispatch;
    let navigation = <Navigation />;
    return (
      <Container>
        <Background />
        <Swiper change={index => dispatch(swipe(index))}>
          <Profiles>{navigation}</Profiles>
          <Lines>{navigation}</Lines>
        </Swiper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding-top: 40;
`;

const Background = styled.Image.attrs({
  source: BACKGROUND,
})`
  flex: 1;
  resize-mode: cover;
  position: absolute;
`;

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaunchContainer);
