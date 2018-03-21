/* @flow */

import React, { Element } from 'react'
import { View, Text } from 'react-native'
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
      <NavBar>
        <Item active={activeSwiperScreen == 0}>
          Profiles
        </Item>
        <Item active={activeSwiperScreen == 1}>
          Lines
        </Item>
        <Item active={activeSwiperScreen == 2}>
          Leagues
        </Item>
      </NavBar>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 26.7%;
`

const NavBar = styled.View`
  flex: 1;
  flexDirection: row;
  paddingLeft: 10;
`

const Item = styled.Text`
  color: ${props => props.active ? SECONDARY_COLOR : '#FFF' };
  paddingHorizontal: 20;
  paddingVertical: 20;
  fontWeight: bold;
`


export default NavigationBar;
