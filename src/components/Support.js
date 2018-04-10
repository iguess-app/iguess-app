import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { Header, Content, SceneDescription } from '@components/SecondaryScene';
import styled from 'styled-components';
import { TEXT_SECONDARY_SCENE } from '@theme';
import chevronRight from '@assets/images/chevron-right.png';
import mail from '@assets/images/mail.png';

const Support = () => {
  return (
    <SceneWrapper>
      <Header title="Support" />
      <SceneDescription>
        Fale com alguém do nosso time ou contate-nos nas redes sociais.
      </SceneDescription>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend
        vitae ipsum vehicula malesuada. Ut scelerisque nunc non consequat
        ultricies.
      </Content>
      <Option icon={mail} text="support@iguess.com" />
    </SceneWrapper>
  );
};

const Option = props => {
  const { icon, text } = props;

  return (
    <TouchableWrapper>
      <OptionIcon source={icon} />
      <OptionText>{text}</OptionText>
      <Chevron />
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 32;
  margin-right: 32;
  margin-bottom: 40;
`;

const OptionIcon = styled.Image`
  width: 32;
  margin-right: 20;
  resize-mode: contain;
`;

const OptionText = styled.Text`
  font-size: 16;
  width: 240;
  color: ${TEXT_SECONDARY_SCENE};
`;

const Chevron = styled.Image.attrs({
  source: chevronRight,
})`
  align-content: flex-end;
  height: 16;
  width: 10;
`;

export default Support;
