/* @flow */

import React from 'react';
import Lines from '@containers/Lines';
import Settings from '@containers/Settings';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LaunchContainer from '@containers/Launch';

const scenes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="launch" component={LaunchContainer} hideNavBar={true} />
        <Scene key="lines" component={Lines} hideNavBar={true} />
        <Scene key="settings" component={Settings} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default scenes;
