import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { DarkBorderButton, MainButton } from '@components/Button';
import {
  aboutImage,
  facebookIcon,
  twitterIcon,
  instagramIcon,
} from '@assets/images';
import styled from 'styled-components';
import { WIDTH_REL, HEIGHT_REL, TEXT_SECONDARY_SCENE } from '@theme';
import I18n from 'react-native-i18n';

const About = () => {
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('aboutTitle')} />
      <Scroll>
        <HeaderImage source={aboutImage} />
        <SceneDescription>{I18n.t('aboutDescription')}</SceneDescription>
        <BoldContent>{I18n.t('aboutVersion')}: 1.0.1</BoldContent>
        <SectionTitle>{I18n.t('aboutSectionATitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionAContent')}</Content>
        <SectionTitle>{I18n.t('aboutSectionBTitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionBContent')}</Content>
        <SectionTitle>{I18n.t('aboutSectionCTitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionCContent')}</Content>
        <RateView>
          <MainButton
            text={I18n.t('aboutFeedback')}
            onPress={() => {
              throw new Error('Not implemented. TODO: Feedback');
            }}
          />
          <DarkBorderButton
            text={I18n.t('aboutRate')}
            onPress={() => {
              throw new Error('Not implemented. TODO: Rate app');
            }}
          />
        </RateView>
        <FollowText>{I18n.t('aboutFollow')}</FollowText>
        <FollowRow>
          <TouchableIcon icon={facebookIcon} url="https://www.facebook.com" />
          <TouchableIcon icon={twitterIcon} url="https://www.twitter.com" />
          <TouchableIcon icon={instagramIcon} url="https://www.instagram.com" />
        </FollowRow>
      </Scroll>
    </SceneWrapper>
  );
};

const TouchableIcon = props => {
  const { icon, url } = props;

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Icon source={icon} />
    </TouchableOpacity>
  );
};

const SectionTitle = styled.Text`
  font-size: 28;
  font-weight: bold;
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${24 * HEIGHT_REL};
  color: ${TEXT_SECONDARY_SCENE};
`;

const RateView = styled.View`
  align-self: center;
  margin-vertical: ${32 * WIDTH_REL};
  margin-horizontal: ${30 * HEIGHT_REL};
`;

const BoldContent = styled(Content)`
  font-weight: bold;
  margin-top: ${16 * HEIGHT_REL};
  margin-bottom: ${8 * HEIGHT_REL};
`;

const Scroll = styled.ScrollView`
  margin-bottom: ${24 * HEIGHT_REL};
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: 160;
  width: 100%;
`;

const FollowText = styled.Text`
  align-self: center;
  font-size: 16;
  font-weight: bold;
  color: black;
  margin-bottom: ${16 * HEIGHT_REL};
`;

const FollowRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${80 * WIDTH_REL};
`;

const Icon = styled.Image`
  width: 56;
  height: 56;
`;

export default About;
