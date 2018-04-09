import React from 'react';
import { SETTINGS_TEXT_COLOR } from '@theme';
import close from '@assets/images/close-settings.png';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';

const SceneHeader = props => {
  const { title } = props;

  return (
    <HeaderWrapper>
      <Title>{title.toUpperCase()}</Title>
      <Close />
    </HeaderWrapper>
  );
};

const Close = () => (
  <Touchable onPress={() => Actions.pop()}>
    <CloseImage />
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  margin-right: 32;
`;
const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: 32;
`;

const CloseImage = styled.Image.attrs({
  source: close,
})`
  align-content: flex-end;
  width: 16;
  height: 16;
`;

export default SceneHeader;
