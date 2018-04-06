/* @flow */

import React, { Element } from 'react';
import { Router } from 'react-native-router-flux';
import scenes from './app';

export default (): Element => <Router scenes={scenes} />;
