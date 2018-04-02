/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LineNavigationButtons from '@components/LineNavigationButtons';
import SelectedLine from '@components/SelectedLine';

class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <LineNavigationButtons />
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
  return {};
}

export default connect(mapStateToProps)(Navigation);
