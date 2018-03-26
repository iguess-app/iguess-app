/* @flow */

import React from 'react';
import Wrapper from '@components/Wrapper';
import { View, Name } from '@components/Scene';

const Profiles = props => {
  const { children } = props;

  return (
    <Wrapper>
      {children}
      <View>
        <Name>Profiles</Name>
      </View>
    </Wrapper>
  );
};

export default Profiles;
