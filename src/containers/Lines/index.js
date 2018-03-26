/* @flow */

import React from 'react';
import Wrapper from '@components/Wrapper';
import { View, Name } from '@components/Scene';

const Lines = props => {
  const { children } = props;

  return (
    <Wrapper>
      {children}
      <View>
        <Name>Lines</Name>
      </View>
    </Wrapper>
  );
};

export default Lines;
