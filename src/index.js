import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import Settings from '@scenes/Settings';
import Core from '@scenes/Core';
import Support from '@scenes/Support';
import Terms from '@scenes/Terms';
import About from '@scenes/About';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
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
