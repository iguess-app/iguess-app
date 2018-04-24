import React from 'react';
import { Linking, Dimensions } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, Content, SceneDescription } from '@components/Scene';
import styled from 'styled-components';
import { chevronRight, mail, facebookIcon, twitterIcon, instagramIcom } from '@assets/images';
import { TEXT_SECONDARY_SCENE } from '@theme';

const {
  width,
  height
} = Dimensions.get('window');

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
  margin-top: ${0.025*height};
`;

const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-horizontal: ${0.0853*width};
  margin-bottom: ${0.015*height};
`;

const OptionIcon = styled.Image`
  width: ${0.0853*width};
  margin-right: ${0.0533*width};
  resize-mode: contain;
`;

const OptionText = styled.Text`
  font-size: 16;
  width: ${0.64*width};
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
