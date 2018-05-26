import React, { Component } from 'react';
import styled from 'styled-components';
import { SELECT_LINE_PRIMARY_TEXT, SELECT_LINE_POINTS_TEXT } from '@theme';
import I18n from '../i18n';
import { TextBaseBold } from '@components/Scene';

export default class SelectedLine extends Component {
  render() {
    const { season, name, points, opacity } = this.props;

    const pointsLabel = I18n.t(points === 1 ? 'point' : 'points');

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

const Season = styled(TextBaseBold)`
  height: 17px;
  font-size: 14;
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
`;

const LineName = styled(TextBaseBold)`
  width: 289;
  font-size: 24;
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

const Points = styled(TextBaseBold)`
  font-size: 22.4;
  color: ${SELECT_LINE_POINTS_TEXT};
  margin-right: 4;
  align-self: center;
`;

const PointsText = styled(TextBaseBold)`
  font-size: 14;
  color: ${SELECT_LINE_POINTS_TEXT};
  align-self: center;
  margin-top: 4;
`;
