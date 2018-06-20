import { AppRegistry } from 'react-native';
import App from './App';

const Appsee = require('react-native-appsee');
Appsee.start('6b58eecec86d413d892dc3766e6f98cf');

AppRegistry.registerComponent('iGuess', () => App);
