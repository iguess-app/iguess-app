import React, {Component} from 'react';
import { Platform } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import styled from 'styled-components';
import { INPUT_DEFAULT_COLOR, INPUT_FLOAT_LABEL_COLOR, INPUT_SUCCESS_COLOR, INPUT_ERROR_COLOR, INPUT_TINT_COLOR } from '@theme';

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

  _textInputColor() {
    return Platform.select({ios: {color: this._getColor()}, android: undefined});
  }

  setStatus(status) {
    this.setState({status: status});
  }

  render() {

    return <TextField placeholderTextColor={this._getColor()} textInputStyle={this._textInputColor()} 
    autoCorrect={false}
    enablesReturnKeyAutomatically={true}
    onFocus={() => this.setStatus('')}
    ref = {ref => this.textField = ref}
    {...this.props} />
  }

}

const TextField = MKTextField
.textfieldWithFloatingLabel()
.withFloatingLabelFont({
  fontSize: 12,
  fontWeight: 'bold',
  color: INPUT_FLOAT_LABEL_COLOR,
})
.withTintColor(INPUT_TINT_COLOR)
.build();