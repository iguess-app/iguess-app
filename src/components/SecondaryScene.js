import React from 'react';
import { SETTINGS_TEXT_COLOR } from '@theme';
import close from '@assets/images/close-settings.png';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';

const SecondaryScene = props => {
  const { title, description } = props;

  const descriptionComponent = description ? (
    <Description>{description}</Description>
  ) : null;

  return (
    <View>
      <SceneHeader title={title} />
      {descriptionComponent}
    </View>
  );
};

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
  <TouchableOpacity onPress={() => Actions.pop()}>
    <CloseImage />
  </TouchableOpacity>
);

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 32;
  padding-right: 32;
`;

const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
`;

const CloseImage = styled.Image.attrs({
  source: close,
})`
  align-content: flex-end;
  width: 16;
  height: 16;
`;

const Description = styled.Text`
  margin-top: 24;
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  padding-left: 32;
  padding-right: 32;
`;

export default SecondaryScene;
