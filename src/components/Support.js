import React from 'react';
import { Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { Header, Content, SceneDescription } from '@components/SecondaryScene';
import styled from 'styled-components';
import { TEXT_SECONDARY_SCENE } from '@theme';
import chevronRight from '@assets/images/chevron-right.png';
import mail from '@assets/images/mail.png';
import facebookIcon from '@assets/images/facebook-icon.png';
import twitterIcon from '@assets/images/twitter-icon.png';

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
      <OptionsWrapper>
        <Option
          icon={mail}
          text="support@iguess.com"
          url="mailto:support@iguess.com"
        />
        <Option
          icon={facebookIcon}
          text="Talk with us on facebook"
          url="https://www.facebook.com"
        />
        <Option
          icon={twitterIcon}
          text="Talk with us on twitter"
          url="https://www.twitter.com"
        />
      </OptionsWrapper>
    </SceneWrapper>
  );
};

const Option = props => {
  const { icon, text, url } = props;

  return (
    <TouchableWrapper onPress={() => Linking.openURL(url)}>
      <OptionIcon source={icon} />
      <OptionText>{text}</OptionText>
      <Chevron />
    </TouchableWrapper>
  );
};

const OptionsWrapper = styled.View`
  margin-top: 32;
`;

const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 32;
  margin-right: 32;
  margin-bottom: 32;
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
