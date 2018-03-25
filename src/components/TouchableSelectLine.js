import React, { Component } from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TouchableSelectLine extends Component {
  render() {
    return (
      <Touchable onPress={console.log('Will display user leagues')}>
        <Season>SEASON 2018/19</Season>
        <LeagueName>English Premier League</LeagueName>
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
  color: #fff;
`;

const LeagueName = styled.Text`
  width: 289;
  font-size: 24;
  margin-top: 8;
  font-weight: bold;
  text-align: left;
  color: #fff;
`;
