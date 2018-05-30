import React, { Component } from 'react';
import styled from 'styled-components';
import {
  SELECT_LINE_PRIMARY_TEXT,
  SELECT_LINE_POINTS_TEXT,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
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
  margin-top: ${24 * HEIGHT_REL};
  padding-left: ${32 * WIDTH_REL};
  padding-right: ${32 * WIDTH_REL};
`;

const Season = styled(TextBaseBold)`
  height: ${17 * HEIGHT_REL};
  font-size: ${14 * HEIGHT_REL};
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
`;

const LineName = styled(TextBaseBold)`
  width: ${289 * WIDTH_REL};
  font-size: ${24 * HEIGHT_REL};
  text-align: left;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-top: ${12 * HEIGHT_REL};
  opacity: ${props => props.opacity};
`;

const PointsView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: ${104 * WIDTH_REL};
  height: ${40 * HEIGHT_REL};
  border-radius: ${24 * HEIGHT_REL};
  background-color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-top: ${16 * HEIGHT_REL};
`;

const Points = styled(TextBaseBold)`
  font-size: ${20 * HEIGHT_REL};
  color: ${SELECT_LINE_POINTS_TEXT};
  margin-right: ${4 * WIDTH_REL};
  align-self: center;
`;

const PointsText = styled(TextBaseBold)`
  font-size: ${14 * HEIGHT_REL};
  color: ${SELECT_LINE_POINTS_TEXT};
  align-self: center;
  margin-top: ${4 * HEIGHT_REL};
`;
