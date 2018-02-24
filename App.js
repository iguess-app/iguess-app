import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo';
import Kernel from './src'


export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Arial': require('./src/assets/fonts/Arial.ttf')
    });
  }

  render () {
      return <Kernel />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
