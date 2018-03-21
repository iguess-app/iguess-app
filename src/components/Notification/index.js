/* @flow */

import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import whiteBell from './bell.png'
import redBell from './red-bell.png'
import styles from './styles'

type Props = {
  onPress: Function
}

const Notification = (props: Props) => {

  return (
    <TouchableOpacity onPress={() => props.onPress(props.unread)}>
      <Image source={ props.unread ? redBell : whiteBell } style={styles.icon}/>
    </TouchableOpacity>
  )
}

Notification.defaultProps = {
  onPress: () => true
}

export default Notification;
