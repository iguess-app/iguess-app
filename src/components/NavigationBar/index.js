/* @flow */

import React, { Element } from 'react';
import styled from 'styled-components';
import ball from './ball.png';
import Notification from '@components/Notification';
import { View } from 'react-native';
import AddGuessline from '../AddGuessline/index';

type NavigationProps = {
  children: Element,
  activeSwiperScreen: number,
};

const NavigationBar = (props: NavigationProps) => {
  const { activeSwiperScreen, onPressNotification, unreadNotification } = props;

  return (
    <Wrapper>
      <View style={{ flexDirection: 'row' }}>
        <Notification
          unread={unreadNotification}
          onPress={onPressNotification}
        />
        <AddGuessline />
      </View>
      <SceneList>
        <Item active={activeSwiperScreen == 0}>Profile</Item>
        <Item active={activeSwiperScreen == 1}>Lines</Item>
        <Item active={activeSwiperScreen == 2}>Leagues</Item>
      </SceneList>
      <Line />
      <Ball active={activeSwiperScreen} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 300;
`;

const SceneList = styled.View`
  flex-direction: row;
  margin-left: 32;
  margin-right: 32;
  margin-top: 24;
`;

const Item = styled.Text`
  color: #fff;
  height: 14;
  font-size: 12;
  text-align: left;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-right: 45;
`;

const Line = styled.View`
  width: 326;
  height: 0.5;
  opacity: 0.2;
  border-style: solid;
  border-width: 0.5;
  border-color: #fff;
  margin-left: 49;
  position: absolute;
  margin-top: 80;
`;

const ballPosition = [52, 124, 204];
const Ball = styled.Image.attrs({
  source: ball,
})`
  width: 16;
  height: 16;
  position: absolute;
  margin-top: 74;
  margin-left: ${props => ballPosition[props.active]};
  z-index: 1;
`;

export default NavigationBar;
