import React, { Component } from 'react';
import styled from 'styled-components';
import { thumbsDown, thumbsUp } from '@assets/images';
import {
  INPUT_ERROR_COLOR,
  INPUT_SUCCESS_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';
import { TextBase } from '@components/Scene';

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1 };
  }

  componentDidMount() {
    setTimeout(
      () =>
        (this.timer = setInterval(() => {
          this.setState({ opacity: this.state.opacity - 0.05 });
        }, 100)),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const iconSource = this.props.success ? thumbsUp : thumbsDown;

    if (this.state.opacity > 0) {
      return (
        <Wrapper behavior="position" input>
          <ErrorView success={this.props.success} opacity={this.state.opacity}>
            <Icon source={iconSource} />
            <ErrorText>{this.props.children}</ErrorText>
          </ErrorView>
        </Wrapper>
      );
    } else {
      return null;
    }
  }
}

const Wrapper = styled.KeyboardAvoidingView`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const ErrorView = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${80 * HEIGHT_REL};
  background-color: ${props =>
    props.success ? INPUT_SUCCESS_COLOR : INPUT_ERROR_COLOR};
  align-items: center;
`;

const Icon = styled.Image`
  width: ${24 * WIDTH_REL};
  height: ${24 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-right: ${16 * WIDTH_REL};
`;

const ErrorText = styled(TextBase)`
  width: ${272 * WIDTH_REL};
  font-size: ${16 * HEIGHT_REL};
  color: white;
`;
