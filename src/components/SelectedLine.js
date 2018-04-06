import React, { Component } from 'react';
import styled from 'styled-components';
import { SELECT_LINE_PRIMARY_TEXT, SELECT_LINE_POINTS_TEXT } from '@theme';

export default class TouchableSelectLine extends Component {
  render() {
    const { season, selectedLine, points, opacity } = this.props;

    return (
      <Wrapper>
        <Season opacity={opacity}>{season}</Season>
        <Row opacity={opacity}>
          <LineName>{selectedLine}</LineName>
        </Row>
        <PointsView opacity={opacity}>
          <Points>{points}</Points>
          <PointsText>{points > 1 ? 'POINTS' : 'POINT'}</PointsText>
        </PointsView>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 0.8;
  height: 100;
  padding-left: 32;
  padding-right: 32;
`;

const Season = styled.Text`
  height: 17px;
  font-size: 14;
  font-weight: bold;
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
`;

const LineName = styled.Text`
  width: 289;
  font-size: 24;
  font-weight: bold;
  text-align: left;
  margin-top: 12;
  color: ${SELECT_LINE_PRIMARY_TEXT};
`;

const PointsView = styled.View`
  flex-direction: row;
  margin-top: 24;
  width: 104;
  height: 40;
  border-radius: 24;
  background-color: ${SELECT_LINE_PRIMARY_TEXT};
  justify-content: center;
`;

const Points = styled.Text`
  font-size: 22.4;
  font-weight: bold;
  color: ${SELECT_LINE_POINTS_TEXT};
  margin: auto;
  margin-right: 4;
`;

const PointsText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SELECT_LINE_POINTS_TEXT};
  margin: auto;
  margin-left: 0;
`;

const Row = styled.View`
  flex-direction: row;
`;
