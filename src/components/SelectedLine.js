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
  margin-top: 32;
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
  margin-top: 12;
  font-weight: bold;
  text-align: left;
  color: #fff;
`;

const PointsView = styled.View`
  margin-top: 24;
  flex-direction: row;
  width: 104;
  height: 40;
  border-radius: 26;
  background-color: ${SELECT_LINE_PRIMARY_TEXT};
  justify-content: center;
`;

const Points = styled.Text`
  margin: auto;
  margin-right: 4;
  color: ${SELECT_LINE_POINTS_TEXT};
  font-size: 22.4;
  font-weight: bold;
`;

const PointsText = styled.Text`
  margin: auto;
  margin-left: 0;
  font-size: 14;
  font-weight: bold;
  color: ${SELECT_LINE_POINTS_TEXT};
`;

const Row = styled.View`
  flex-direction: row;
`;
