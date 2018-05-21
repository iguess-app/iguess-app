import React, { Component } from 'react';
import styled from 'styled-components';
import { SELECT_LINE_PRIMARY_TEXT, SELECT_LINE_POINTS_TEXT } from '@theme';
import I18n from '../i18n';

export default class TouchableSelectLine extends Component {
  render() {
    const { season, name, points, opacity } = this.props;

    const pointsLabel = I18n.t(points === 1 ? 'points' : 'point');

    return (
      <Wrapper>
        <Season opacity={opacity}>{season}</Season>
        <LineName opacity={opacity}>{name}</LineName>
        <PointsView opacity={opacity}>
          <Points>{points}</Points>
          <PointsText>{pointsLabel.toUpperCase()}</PointsText>
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
