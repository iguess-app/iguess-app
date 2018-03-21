/* @flow */

import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import whiteBell from './bell.png'
import redBell from './red-bell.png'
import styled from 'styled-components';

type Props = {
  onPress: Function
}

const Notification = (props: Props) => {

  return (
    <TouchableOpacity onPress={() => props.onPress(props.unread)}>
      <Bell source={ props.unread ? redBell : whiteBell }/>
    </TouchableOpacity>
  )
}

Bell = styled.Image`
  width: 27;
  height: 30;
  marginLeft: 30;
`

export default Notification;
