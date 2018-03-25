/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showNotification } from '@redux/flags/actions';
import LineNavigationButtons from '@components/LineNavigationButtons';
import SceneList from '@components/SceneList/index';

class Navigation extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { unreadNotification, activeSwiperScreen } = this.props;

    return (
      <Wrapper>
        <LineNavigationButtons
          unreadNotification={unreadNotification}
          onPressNotification={status => dispatch(showNotification(status))}
        />
        <SceneList activeSwiperScreen={activeSwiperScreen} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  height: 300;
`;

function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification,
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(Navigation);