/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import ball from './ball.png';
import { connect } from 'react-redux';
import { showNotification } from '@redux/flags/actions';
import NavigationButtons from '@components/NavigationButtons';

class Navigation extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { unreadNotification, activeSwiperScreen } = this.props;

    return (
      <Wrapper>
        <NavigationButtons
          unreadNotification={unreadNotification}
          onPressNotification={status => dispatch(showNotification(status))}
        />
        <SceneList>
          <Item active={activeSwiperScreen == 0}>Profile</Item>
          <Item active={activeSwiperScreen == 1}>Lines</Item>
          <Item active={activeSwiperScreen == 2}>Leagues</Item>
        </SceneList>
        <Line />
        <Ball active={this.props.activeSwiperScreen} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  height: 300;
`;

const SceneList = styled.View`
  flex-direction: row;
  margin-left: 32;
  margin-right: 32;
  margin-top: 24;
`;

const Item = styled.Text`
  color: #fff;
  height: 14;
  font-size: 12;
  text-align: left;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-right: 45;
`;

const Line = styled.View`
  width: 326;
  height: 0.5;
  opacity: 0.2;
  border-style: solid;
  border-width: 0.5;
  border-color: #fff;
  margin-left: 49;
  position: absolute;
  margin-top: 80;
`;

const ballPosition = [52, 124, 204];
const Ball = styled.Image.attrs({
  source: ball,
})`
  width: 16;
  height: 16;
  position: absolute;
  margin-top: 74;
  margin-left: ${props => ballPosition[props.active]};
  z-index: 1;
`;

function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification,
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(Navigation);
