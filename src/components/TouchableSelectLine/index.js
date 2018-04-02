import React, { Component } from 'react';
import styled from 'styled-components';
import chevron from '@assets/images/chevron-down.png';
import { SELECT_LINE_PRIMARY_TEXT, SELECT_LINE_POINTS_TEXT } from '@theme';

export default class TouchableSelectLine extends Component {
  render() {
    return (
      <Touchable onPress={() => console.log('Will display user lines')}>
        <Season>SEASON 2018/19</Season>
        <Row>
          <LineName>English Premier League</LineName>
          <Chevron />
        </Row>
        <PointsView>
          <Points>57</Points>
          <PointsText>POINTS</PointsText>
        </PointsView>
      </Touchable>
    );
  }
}

const Touchable = styled.TouchableOpacity`
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

const Chevron = styled.Image.attrs({
  source: chevron,
})`
  margin-top: 24;
  width: 14;
  height: 9;
  z-index: 1;
`;

const Row = styled.View`
  flex-direction: row;
`;
