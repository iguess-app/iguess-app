import React from 'react';
import styled from 'styled-components';
import plus from '@assets/images/plus.png';
import { TouchableOpacity } from 'react-native';

const Guess = props => {
  return (
    <TouchableOpacity>
      <ButtonImage source={plus} />
    </TouchableOpacity>
  );
};

const ButtonImage = styled.Image`
  width: 24;
  height: 24;
`;

export default Guess;
