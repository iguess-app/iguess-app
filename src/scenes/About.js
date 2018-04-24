import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import { aboutImage, facebookIcon, twitterIcon } from '@assets/images';
import styled from 'styled-components';
import { FOLLOW_US_COLOR, WIDTH_REL } from '@theme';

const About = () => {
  return (
    <SceneWrapper>
      <NavBar title="About us" />
      <Scroll>
        <HeaderImage source={aboutImage} />
        <SceneDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SceneDescription>
        <BoldContent>Version: 1.0.1</BoldContent>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          eleifend vitae ipsum vehicula malesuada. Ut scelerisque nunc non
          consequat ultricies. Etiam volutpat arcu velit, sed luctus enim
          tincidunt sed. Sed tortor ante, dictum vitae ullamcorper sed,
          facilisis sodales est. Cras id facilisis metus. Ut sed dapibus ante.
          Nullam euismod sapien luctus metus feugiat commodo. Aenean sit amet
          bibendum mi, et tristique nisi. Proin aliquet tellus non magna
          feugiat, ut ultricies magna convallis. Fusce nec sagittis nunc.
        </Content>
        <BoldContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          eleifend vitae
        </BoldContent>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          eleifend vitae ipsum vehicula malesuada. Ut scelerisque nunc non
          consequat ultricies. Etiam volutpat arcu velit, sed luctus enim
          tincidunt sed. Sed tortor ante, dictum vitae ullamcorper sed,
          facilisis sodales est. Cras id facilisis metus. Ut sed dapibus ante.
          Nullam euismod sapien luctus metus feugiat commodo. Aenean sit amet
          bibendum mi, et tristique nisi. Proin aliquet tellus non magna
          feugiat, ut ultricies magna convallis. Fusce nec sagittis nunc.
        </Content>
        <RateView>
          <MainButton
            text="Rate this app"
            onPress={() => console.log('Rate app')}
          />
        </RateView>
        <FollowText>Follow us</FollowText>
        <FollowRow>
          <TouchableIcon icon={facebookIcon} url="https://www.facebook.com" />
          <TouchableIcon icon={twitterIcon} url="https://www.twitter.com" />
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

const RateView = styled.View`
  align-self: center;
  margin-vertical: 32;
  margin-horizontal: 5%;
`;

const BoldContent = styled(Content)`
  font-weight: bold;
  margin-top: 16;
  margin-bottom: 8;
`;

const Scroll = styled.ScrollView`
  margin-bottom: 24;
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
  color: ${FOLLOW_US_COLOR}
  margin-bottom: 16;
`;

const FollowRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8;
  margin-horizontal: ${110*WIDTH_REL};
`;

const Icon = styled.Image`
  width: 56;
  height: 56;
`;

export default About;
