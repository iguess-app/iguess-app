/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LineNavigationButtons from '@components/LineNavigationButtons';
import SelectedLine from '@components/SelectedLine';

class LineNavigation extends Component {
  render() {
    return (
      <Wrapper>
        <LineNavigationButtons />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 0.05;
`;

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LineNavigation);
