import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  Home,
  Core,
  Support,
  Terms,
  About,
  SignUp,
  SignIn,
} from '@scenes';
import { Provider } from 'react-redux';
import createStore from '@store/create';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="core" component={Core} hideNavBar={true} />
        <Scene key="signup" component={SignUp} hideNavBar={true} />
        <Scene key="signin" component={SignIn} hideNavBar={true} />
        <Scene key="support" component={Support} hideNavBar={true} />
        <Scene key="terms" component={Terms} hideNavBar={true} />
        <Scene key="about" component={About} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export const store = createStore();

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
