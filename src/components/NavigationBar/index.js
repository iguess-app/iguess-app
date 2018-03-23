/* @flow */

import React, { Element } from 'react';
import styled from 'styled-components';

type NavigationProps = {
  children: Element,
  activeSwiperScreen: number,
};

const NavigationBar = (props: NavigationProps) => {
  const { activeSwiperScreen } = props;

  return (
    <Wrapper>
      <SceneList>
        <Item active={activeSwiperScreen == 0}>Profile</Item>
        <Item active={activeSwiperScreen == 1}>Lines</Item>
        <Item active={activeSwiperScreen == 2}>Leagues</Item>
      </SceneList>
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100;
`;

const SceneList = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 32;
  margin-top: 24;
`;

const Item = styled.Text`
  color: white;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-right: 45;
`;

const Line = styled.View`
  width: 163;
  height: 1.5;
  opacity: 0.2;
  border-style: solid;
  border-width: 0.5;
`;

export default NavigationBar;
