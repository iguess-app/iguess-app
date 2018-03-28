/* @flow */

import React from 'react';
import Wrapper from '@components/Wrapper';
import { View, Name } from '@components/Scene';
import GameList from '@components/GameList';

const Lines = props => {
  const { children } = props;

  return (
    <Wrapper>
      {children}
      <View>
        <GameList />
      </View>
    </Wrapper>
  );
};

export default Lines;
