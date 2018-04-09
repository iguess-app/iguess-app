import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import Settings from '@containers/Settings';
import LaunchContainer from '@containers/Launch';
import Support from '@components/Support';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="launch" component={LaunchContainer} hideNavBar={true} />
        <Scene key="settings" component={Settings} hideNavBar={true} />
        <Scene key="support" component={Support} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default () => (
  <Provider store={createStore()}>
    <Routes />
  </Provider>
);
