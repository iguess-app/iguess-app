/* @flow */

import React, { Element } from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components';
import { SECONDARY_COLOR } from '@theme/colors'

type NavigationProps = {
  children: Element,
  activeSwiperScreen: number
}

const NavigationBar = (props: NavigationProps) => {
  const { activeSwiperScreen } = props

  return (
    <Wrapper>
      <SceneList>
        <Item active={activeSwiperScreen == 0}>
          Profile
        </Item>
        <Item active={activeSwiperScreen == 1}>
          Lines
        </Item>
        <Item active={activeSwiperScreen == 2}>
          Leagues
        </Item>
      </SceneList>
      <Line />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 100;
`

const SceneList = styled.View`
  flex: 1;
  flexDirection: row;
  marginLeft: 32;
  marginTop: 24;
`

const Item = styled.Text`
  color: white;
  fontWeight: ${props => props.active ? 'bold' : 'normal' };
  marginRight: 45;
`

const Line = styled.View`
  width: 163;
  height: 1.5;
  opacity: 0.2;
  borderStyle: solid;
  borderWidth: 0.5;
`

export default NavigationBar;
