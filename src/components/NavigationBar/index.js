/* @flow */

import React, { Element } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

type NavigationProps = {
  children: Element,
  activeSwiperScreen: number
}

type ItemProps = {
  children: Element,
  currentScreen: number,
  id: number
}

const Item = (props: ItemProps) => {
  const { children, currentScreen, id } = props
  return (
    <Text style={currentScreen === id ? styles.itemActive : styles.item}>
      { children }
    </Text>
  )
}

const NavigationBar = (props: NavigationProps) => {
  const { activeSwiperScreen } = props
  return (
    <View style={{ height: 60 }}>
      <View style={styles.container}>
        <Item id={0} currentScreen={activeSwiperScreen}>
          Profiles
        </Item>
        <Item id={1} currentScreen={activeSwiperScreen}>
          Lines
        </Item>
        <Item id={2} currentScreen={activeSwiperScreen}>
          Leagues
        </Item>
      </View>
    </View>
  )
}

function mapStateToProps (state) {
  return {
    activeSwiperScreen: state.flags.activeSwiperScreen
  }
}

export default connect(
  mapStateToProps
)(NavigationBar)
