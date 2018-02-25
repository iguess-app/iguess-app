/* @flow */

import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { showNotification } from '@store/modules/flags'
import bellIcon from './bell.png'
import styles from './styles'

type Props = {
  onPress: Function
}

const Notification = (props: Props) => {
  const { onPress, showNotification, isShowNotification } = props
  return (
    <TouchableOpacity onPress={() => showNotification(!isShowNotification)}>
      <Image source={bellIcon} style={styles.icon}/>
    </TouchableOpacity>
  )
}

Notification.defaultProps = {
  onPress: () => true
}

function mapStateToProps (state) {
  return {
    isShowNotification: state.flags.notification
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showNotification: (flag) => dispatch(showNotification(flag))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
