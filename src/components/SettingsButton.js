import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import gear from '@assets/images/gear.png';
import styled from 'styled-components';

const SettingsButton = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log('Will display settings page')}
      >
        <Gear source={gear} />
      </TouchableOpacity>
    </View>
  );
};

const Gear = styled.Image`
  width: 24;
  height: 24;
  margin-left: 32;
`;

export default SettingsButton;
