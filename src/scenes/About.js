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
import {
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
  ABOUT_SECTION_TITLE,
  VERSION_COLOR,
} from '@theme';
import I18n from 'react-native-i18n';
import { TextBaseBold } from '@components/Scene';
import DeviceInfo from 'react-native-device-info';

const About = () => {
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('aboutTitle')} />
      <Scroll>
        <HeaderImage source={aboutImage} />
        <SceneDescription>{I18n.t('aboutDescription')}</SceneDescription>
        <BoldContent>
          {I18n.t('aboutVersion')}: {DeviceInfo.getVersion()}
        </BoldContent>
        <SectionTitle>{I18n.t('aboutSectionATitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionAContent')}</Content>
        <SectionTitle>{I18n.t('aboutSectionBTitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionBContent')}</Content>
        <SectionTitle>{I18n.t('aboutSectionCTitle')}</SectionTitle>
        <Content>{I18n.t('aboutSectionCContent')}</Content>
        <RateView>
          <MainButton
            text={I18n.t('aboutFeedback')}
            onPress={() => Linking.openURL('mailto:support@iguessteam.com')}
          />
        </RateView>
        <FollowText>{I18n.t('aboutFollow')}</FollowText>
        <FollowRow>
          <TouchableIcon
            icon={facebookIcon}
            url="https://www.facebook.com/iguessCompany"
          />
          <TouchableIcon
            icon={twitterIcon}
            url="https://twitter.com/iguessoficial"
          />
          <TouchableIcon
            icon={instagramIcon}
            url="https://www.instagram.com/iguessoficial/"
          />
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

const SectionTitle = styled(TextBaseBold)`
  font-size: ${28 * RATIO};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${24 * HEIGHT_REL};
  color: ${ABOUT_SECTION_TITLE};
`;

const RateView = styled.View`
  align-self: center;
  margin-vertical: ${32 * WIDTH_REL};
  margin-horizontal: ${30 * HEIGHT_REL};
`;

const BoldContent = styled(Content)`
  font-family: 'KievitOffc-Bold';
  margin-top: ${16 * HEIGHT_REL};
  color: ${VERSION_COLOR};
`;

const Scroll = styled.ScrollView`
  margin-bottom: ${4 * HEIGHT_REL};
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: ${160 * HEIGHT_REL};
  width: 100%;
`;

const FollowText = styled(TextBaseBold)`
  align-self: center;
  font-size: ${16 * RATIO};
  color: black;
  margin-bottom: ${16 * HEIGHT_REL};
`;

const FollowRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${80 * WIDTH_REL};
  margin-bottom: ${30 * HEIGHT_REL};
`;

const Icon = styled.Image`
  width: ${56 * RATIO};
  height: ${56 * RATIO};
`;

export default About;
