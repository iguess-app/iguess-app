import React from 'react';
import { MKTextField } from 'react-native-material-kit';
import styled from 'styled-components';

const TextField = MKTextField.textfieldWithFloatingLabel()
  .withFloatingLabelFont({
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D6980',
  })
  .build();

const Input = styled(TextField)`
  margin-top: 44;
`;

export default Input;