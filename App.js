import React from 'react'
import Kernel from './src'
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render () {
      return <Kernel />
  }
}
