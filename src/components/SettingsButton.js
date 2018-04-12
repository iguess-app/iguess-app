import React from 'react';
import { TouchableOpacity } from 'react-native';
import gear from '@assets/images/gear.png';
import styled from 'styled-components';

const SettingsButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Gear source={gear} />
    </TouchableOpacity>
  );
};

const Gear = styled.Image`
  width: 24;
  height: 24;
  margin-left: 32;
`;

export default SettingsButton;
