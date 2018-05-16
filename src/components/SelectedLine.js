import React, { Component } from 'react';
import styled from 'styled-components';
import { SELECT_LINE_PRIMARY_TEXT, SELECT_LINE_POINTS_TEXT } from '@theme';
import { TextBase } from './wrapper';

export default class TouchableSelectLine extends Component {
  render() {
    const { season, name, points, opacity } = this.props;

    const pointsLabel = points > 1 ? 'POINTS' : 'POINT';

    return (
      <Wrapper>
        <Season opacity={opacity}>{season}</Season>
        <LineName opacity={opacity}>{name}</LineName>
        <PointsView opacity={opacity}>
          <Points>{points}</Points>
          <PointsText>{pointsLabel}</PointsText>
        </PointsView>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 0.8;
  height: 100;
  padding-left: 8%;
  padding-right: 8%;
`;

const Season = styled(TextBase)`
  height: 17px;
  font-size: 14;
  font-weight: bold;
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
`;

const LineName = styled(TextBase)`
  width: 289;
  font-size: 24;
  font-weight: bold;
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-top: 12;
  opacity: ${props => props.opacity};
`;

const PointsView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 104;
  height: 40;
  border-radius: 24;
  background-color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-top: 24;
`;

const Points = styled(TextBase)`
  font-size: 22.4;
  font-weight: bold;
  color: ${SELECT_LINE_POINTS_TEXT};
  margin: auto;
  margin-right: 4;
`;

const PointsText = styled(TextBase)`
  font-size: 14;
  font-weight: bold;
  color: ${SELECT_LINE_POINTS_TEXT};
  margin: auto;
  margin-left: 0;
`;
