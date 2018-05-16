import React from 'react';
import { Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, Content, SceneDescription } from '@components/Scene';
import styled from 'styled-components';
import {
  chevronRight,
  mail,
  facebookIcon,
  twitterIcon,
  instagramIcom,
} from '@assets/images';
import { TEXT_SECONDARY_SCENE, HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBase } from '../components/wrapper';

const Support = () => {
  return (
    <SceneWrapper>
      <NavBar title="Support" />
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
        <Option
          icon={instagramIcom}
          text="Follow us on instagram"
          url="https://www.instagram.com"
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
  margin-top: ${32 * HEIGHT_REL};
`;

const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-horizontal: ${32 * WIDTH_REL};
  margin-bottom: ${32 * HEIGHT_REL};
`;

const OptionIcon = styled.Image`
  width: ${32 * WIDTH_REL};
  margin-right: ${20 * WIDTH_REL};
  resize-mode: contain;
`;

const OptionText = styled(TextBase)`
  font-size: 16;
  width: ${240 * WIDTH_REL};
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
