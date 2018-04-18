import React, {Component} from 'react';
import { MKTextField } from 'react-native-material-kit';
import styled from 'styled-components';
import { INPUT_DEFAULT_COLOR, INPUT_FLOAT_LABEL_COLOR, INPUT_SUCCESS_COLOR, INPUT_ERROR_COLOR } from '@theme';

export default class Input extends Component {
  
  constructor(props) {
    super(props);
    this.state = {status: ''};
  }

  _getColor() {

    if(this.state.status === 'error') {
      return INPUT_ERROR_COLOR;
    } else if(this.state.status === 'success') {
      return INPUT_SUCCESS_COLOR;
    } 
    
    return INPUT_DEFAULT_COLOR;
  }

  render() {
    return <TextField {...this.props} tintColor={this._getColor()} />
  }

}

const TextField = MKTextField
.textfieldWithFloatingLabel()
.withFloatingLabelFont({
  fontSize: 12,
  fontWeight: 'bold',
  color: INPUT_FLOAT_LABEL_COLOR,
})
.build();

