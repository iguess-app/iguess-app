import React, {Component} from 'react';
import { MKTextField, MKColor } from 'react-native-material-kit';
import styled from 'styled-components';
import { INPUT_BORDER_COLOR, INPUT_FLOAT_LABEL_COLOR } from '@theme';

export default class Input extends Component {
  
  constructor(props) {
    super(props);
    this.state = {status: ''};
  }

  _getTintColor() {

    if(this.state.status === 'error') {
      return MKColor.Red;
    } else if(this.state.status === 'success') {
      return MKColor.Green;
    } 

    return INPUT_BORDER_COLOR;
  }

  render() {
    const TextField = MKTextField
    .textfieldWithFloatingLabel()
    .withFloatingLabelFont({
      fontSize: 12,
      fontWeight: 'bold',
      color: INPUT_FLOAT_LABEL_COLOR,
    })
    .withTintColor(this._getTintColor())
    .build();

    return <TextField {...this.props} />
  }

}