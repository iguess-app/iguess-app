/* @flow */

import React from 'react'
import { TouchableOpacity, Image, View, Dimensions } from 'react-native'
import whiteBell from './bell.png'
import redBell from './red-bell.png'
import styled from 'styled-components';

screen = Dimensions.get('window');
console.log(Math.round(screen.width*0.058))
console.log(Math.round(screen.height*0.018))
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
  width: ${Math.round(screen.width*0.058)};
  height: ${Math.round(screen.height*0.036)};
  marginLeft: ${Math.round(screen.width*0.085)};
`

export default Notification;
