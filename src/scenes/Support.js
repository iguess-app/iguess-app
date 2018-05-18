import React from 'react';
import { Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription } from '@components/Scene';
import styled from 'styled-components';
import {
  chevronRight,
  mail,
  facebookIcon,
  twitterIcon,
  instagramIcon,
} from '@assets/images';
import { TEXT_SECONDARY_SCENE, HEIGHT_REL, WIDTH_REL } from '@theme';
import I18n from 'react-native-i18n';

const Support = () => {
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('supportTitle')} />
      <SceneDescription>{I18n.t('supportDescription')}</SceneDescription>
      <OptionsWrapper>
        <Option
          icon={mail}
          text="support@iguess.com"
          url="mailto:support@iguess.com"
        />
        <Option
          icon={facebookIcon}
          text={I18n.t('supportFacebook')}
          url="https://www.facebook.com"
        />
        <Option
          icon={twitterIcon}
          text={I18n.t('supportTwitter')}
          url="https://www.twitter.com"
        />
        <Option
          icon={instagramIcon}
          text={I18n.t('supportInstagram')}
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

const OptionText = styled.Text`
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
