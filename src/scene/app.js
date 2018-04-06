/* @flow */

import React from 'react';
import Lines from '@containers/Lines';
import Settings from '@containers/Settings';
import { Router, Stack, Scene } from 'react-native-router-flux';

const scenes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="lines" component={Lines} hideNavBar={true} />
        <Scene key="settings" component={Settings} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default scenes;
