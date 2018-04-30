import React, { Component } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import styled from 'styled-components';
import { thumbsDown } from '@assets/images';
import { INPUT_ERROR_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';

class ServerError extends Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 1}
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({opacity: this.state.opacity - 0.01})
    }, 25);
  }

  render() {

    if(this.state.opacity > 0){
      return (
        <KeyboardAvoiding behavior="position" enabled>
        <ErrorView opacity={this.state.opacity}>
          <Icon />
          <ErrorText>
            Houve algum problema no servidor. 
            Tente novamente mais tarde.
          </ErrorText>
        </ErrorView>
        </KeyboardAvoiding>
      );
    } else {
      clearInterval(this.timer)
      return null;
    }
  }
}

const KeyboardAvoiding = styled.KeyboardAvoidingView`
  width: 100%;
  position: absolute;
  margin-top: ${587*HEIGHT_REL};
`

const ErrorView = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${80*HEIGHT_REL};
  background-color: ${INPUT_ERROR_COLOR};
  align-items: center;
`

const Icon = styled.Image.attrs({
  source: thumbsDown,
})`
  width: ${24*WIDTH_REL};
  height: ${24*HEIGHT_REL};
  margin-left: ${32*WIDTH_REL};
  margin-right: ${16*WIDTH_REL};
`

const ErrorText = styled.Text`
  width: ${272*WIDTH_REL};
  height: ${40*HEIGHT_REL};
  font-size: 16;
  color: white;
`

export default ServerError;