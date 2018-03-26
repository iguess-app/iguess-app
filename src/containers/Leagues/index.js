/* @flow */

import React from 'react';
import Wrapper from '@components/Wrapper';
import { View, Name } from '@components/Scene';

const Leagues = props => {
  const { children } = props;

  return (
    <Wrapper>
      {children}
      <View>
        <Name>Leagues</Name>
      </View>
    </Wrapper>
  );
};

export default Leagues;
