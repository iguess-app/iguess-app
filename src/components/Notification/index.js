/* @flow */

import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
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
  width: 27;
  height: 30;
  marginLeft: 30;
`

export default Notification;
