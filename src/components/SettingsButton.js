import React from 'react';
import { TouchableOpacity } from 'react-native';
import { gear } from '@assets/images';
import styled from 'styled-components';
import { RATIO } from '@theme';

const SettingsButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Gear source={gear} />
    </TouchableOpacity>
  );
};

const Gear = styled.Image`
  width: ${24 * RATIO};
  height: ${24 * RATIO};
`;

export default SettingsButton;
