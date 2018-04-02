/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showNotification } from '@redux/flags/actions';
import LineNavigationButtons from '@components/LineNavigationButtons';
import SelectedLine from '@components/SelectedLine';

class Navigation extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { unreadNotification } = this.props;

    return (
      <Wrapper>
        <LineNavigationButtons
          unreadNotification={unreadNotification}
          onPressNotification={status => dispatch(showNotification(status))}
        />
        <SelectedLine
          season="2018"
          selectedLine="Russian World Cup"
          points="57"
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 0.8;
`;

function mapStateToProps(state) {
  return {
    unreadNotification: state.flags.notification,
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(Navigation);
