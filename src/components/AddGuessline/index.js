/* @flow */

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import add from './add-guessline.png';
import styled from 'styled-components';

const AddGuessline = () => {
  return (
    <View>
      <TouchableOpacity>
        <Add source={add} />
      </TouchableOpacity>
    </View>
  );
};

const Add = styled.Image`
  width: 24;
  height: 24;
  margin-left: 266;
`;

export default AddGuessline;
