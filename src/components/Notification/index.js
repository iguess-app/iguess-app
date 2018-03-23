/* @flow */

import React from 'react'
import { TouchableOpacity, Image, View, Dimensions } from 'react-native'
import whiteBell from './bell.png'
import redBell from './red-bell.png'
import styled from 'styled-components';

type Props = {
  onPress: Function
}

const Notification = (props: Props) => {

  return (
    <View>
      <TouchableOpacity onPress={() => props.onPress(props.unread)}>
        <Bell source={ props.unread ? redBell : whiteBell }/>
      </TouchableOpacity>
    </View>
  )
}

Bell = styled.Image`
  width: 22;
  height: 24;
  margin-left: 32;
`

export default Notification;
