/* @flow */
import { StyleSheet } from 'react-native'
import { SECONDARY_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10
  },
  itemActive: {
    color: SECONDARY_COLOR,
    padding: 20,
    fontWeight: 'bold'
  },
  item: {
    color: '#FFF',
    padding: 20,
    fontWeight: 'bold'
  }
})

export default styles
