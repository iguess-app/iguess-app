/* @flow */

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'

const Leagues = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Leagues</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND_COLOR
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})


export default Leagues
