import React, {Component} from 'react';
import { Platform, View } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import styled from 'styled-components';
import { info } from '@assets/images';
import { INPUT_DEFAULT_COLOR, INPUT_FLOAT_LABEL_COLOR, INPUT_SUCCESS_COLOR, INPUT_ERROR_COLOR, INPUT_TINT_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

export default class Input extends Component {
  
  constructor(props) {
    super(props);

    // default: undefined
    // success: true
    // error: false
    this.state = {status: undefined, errorMsg: ''};
  }

  _getColor() {

    if(this.state.status === false) {
      return INPUT_ERROR_COLOR;
    } else if(this.state.status === true) {
      return INPUT_SUCCESS_COLOR;
    } 
    
    return INPUT_DEFAULT_COLOR;
  }

  _getTintColor() {
    const tintColor = this.state.status === undefined ? INPUT_TINT_COLOR : this._getColor();
    return tintColor;
  }

  _textInputColor() {
    return Platform.select({ios: {color: this._getColor()}, android: undefined});
  }

  getStatus() {
    return this.state.status;
  }

  error(msg = undefined) {
    this.setState({status: false, errorMsg: msg});
  }

  reset() {
    this.setState({status: undefined, errorMsg: ''});
  }

  success() {
    this.setState({status: true, errorMsg: ''});
  }

  render() {

    return (
      <View>
        <TextField tintColor={this._getTintColor()} placeholderTextColor={this._getColor()} textInputStyle={this._textInputColor()} 
          autoCorrect={false}
          onFocus={() => this.reset()}
          ref = {ref => this.textField = ref}
          {...this.props} />
        <ErrorMessage>{this.state.errorMsg}</ErrorMessage>
      </View>
    );
  }

}

const ErrorMessage = (props) => {
  const { children } = props;

  if(children === '' || children === undefined) {
    return null;
  }

  return (
    <ErrorView>
      <InfoIcon />
      <ErrorText>{children}</ErrorText>
    </ErrorView>
  )
}

const ErrorText = styled.Text`
  font-size: 14;
  margin-left: ${8*WIDTH_REL};
  color: ${INPUT_ERROR_COLOR};
`

const ErrorView = styled.View`
  flex-direction: row;
  margin-top: ${8*HEIGHT_REL};
`

const InfoIcon = styled.Image.attrs({
  source: info,
})`
  width: ${16*WIDTH_REL};
  height: ${16*HEIGHT_REL};
  resize-mode: contain;
`

const TextField = MKTextField
.textfieldWithFloatingLabel()
.withFloatingLabelFont({
  fontSize: 12,
  fontWeight: 'bold',
  color: INPUT_FLOAT_LABEL_COLOR,
})
.build();