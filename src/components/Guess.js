import React from 'react';
import styled from 'styled-components';
import plus from '@assets/images/plus.png';
import minus from '@assets/images/minus.png';
import { TouchableOpacity } from 'react-native';

const Guess = () => {
  return (
    <Wrapper>
      <TouchableImage source={plus} />
      <Value>- - - -</Value>
      <TouchableImage source={minus} />
    </Wrapper>
  );
};

const TouchableImage = props => {
  const { source } = props;

  return (
    <TouchableOpacity>
      <ButtonImage source={source} />
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  margin-horizontal: 8;
  flex-direction: column;
`;

const ButtonImage = styled.Image`
  margin-vertical: 20;
  width: 24;
  height: 24;
`;

const Value = styled.Text`
  font-size: 8;
  font-weight: bold;
  opacity: 0.6;
  color: #043874;
`;
export default Guess;
