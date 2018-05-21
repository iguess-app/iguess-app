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
import { TextBase } from '@components/Scene';

const Support = () => {
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('supportTitle')} />
      <SceneDescription>{I18n.t('supportDescription')}</SceneDescription>
      <OptionsWrapper>
        <Option
          chevron={false}
          icon={mail}
          text="support@iguess.com"
          url="mailto:support@iguess.com"
        />
        <Option
          icon={facebookIcon}
          text={I18n.t('supportFacebook')}
          url="https://www.facebook.com/iguessCompany"
        />
        <Option
          icon={twitterIcon}
          text={I18n.t('supportTwitter')}
          url="https://twitter.com/iguessoficial"
        />
        <Option
          icon={instagramIcon}
          text={I18n.t('supportInstagram')}
          url="https://www.instagram.com/iguessoficial/"
        />
      </OptionsWrapper>
    </SceneWrapper>
  );
};

const Option = ({ icon, text, url, chevron }) => {
  return (
    <TouchableWrapper onPress={() => Linking.openURL(url)}>
      <OptionIcon source={icon} />
      <OptionText>{text}</OptionText>
      {chevron === false ? null : <Chevron />}
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
  width: ${250 * WIDTH_REL};
  color: ${TEXT_SECONDARY_SCENE};
`;

const Chevron = styled.Image.attrs({
  source: chevronRight,
})`
  height: 16;
  width: 9;
`;

export default Support;
