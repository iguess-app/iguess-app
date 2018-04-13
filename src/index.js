import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import Settings from '@scenes/Settings';
import Core from '@scenes/Core';
import Support from '@scenes/Support';
import Terms from '@scenes/Terms';
import About from '@scenes/About';
import Home from '@scenes/Home';
import SignUp from '@scenes/SignUp';
import SignIn from '@scenes/SignIn';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="signup" component={SignUp} hideNavBar={true} />
        <Scene key="signin" component={SignIn} hideNavBar={true} />
        <Scene key="core" component={Core} hideNavBar={true} />
        <Scene key="settings" component={Settings} hideNavBar={true} />
        <Scene key="support" component={Support} hideNavBar={true} />
        <Scene key="terms" component={Terms} hideNavBar={true} />
        <Scene key="about" component={About} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default () => (
  <Provider store={createStore()}>
    <Routes />
  </Provider>
);
