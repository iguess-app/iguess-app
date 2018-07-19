import React, { Component } from 'react';
import styled from 'styled-components';
import { thumbsDown } from '@assets/images';
import { INPUT_ERROR_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBase } from '@components/Scene';

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ opacity: this.state.opacity - 0.03 });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.state.opacity > 0) {
      return (
        <Wrapper behavior="position" input>
          <ErrorView opacity={this.state.opacity}>
            <Icon />
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
  background-color: ${INPUT_ERROR_COLOR};
  align-items: center;
`;

const Icon = styled.Image.attrs({
  source: thumbsDown,
})`
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
