/* @flow */

import React, { Element } from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components';
import { SECONDARY_COLOR } from '@theme/colors'

type NavigationProps = {
  children: Element,
  activeSwiperScreen: number
}

screen = Dimensions.get('window');

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
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: ${screen.height*0.267};
`

const SceneList = styled.View`
  flex: 1;
  flexDirection: row;
  marginLeft: ${props => screen.width*0.085};
  marginTop: ${screen.height*0.036};
`

const Item = styled.Text`
  color: white;
  fontWeight: ${props => props.active ? 'bold' : 'normal' };
  marginRight: ${screen.width * 0.12};
`

0.021

export default NavigationBar;
