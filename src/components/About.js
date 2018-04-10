import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { Header, SceneDescription, Content } from '@components/SecondaryScene';
import aboutImage from '@assets/images/about-image.png';
import styled from 'styled-components';
import { RATE_BUTTON_COLOR, RATE_TEXT_COLOR } from '@theme';

const About = () => {
  return (
    <SceneWrapper>
      <Header title="About us" />
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
        <RateButton />
      </Scroll>
    </SceneWrapper>
  );
};

const RateButton = () => (
  <RateButtonWrapper onPress={() => console.log('Rate app')}>
    <RateText>RATE THIS APP</RateText>
  </RateButtonWrapper>
);

const BoldContent = styled(Content)`
  font-weight: bold;
  margin-top: 16;
  margin-bottom: 8;
`;

const Scroll = styled.ScrollView`
  margin-bottom: 16;
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: 160;
  width: 100%;
  margin-bottom: 32;
`;

const RateButtonWrapper = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: ${RATE_BUTTON_COLOR}
  margin-top: 32;
  margin-left: 32;
  margin-right: 32;
  align-items: center;
`;

const RateText = styled.Text`
  margin-top: 18;
  font-size: 15;
  font-weight: bold;
  color: ${RATE_TEXT_COLOR};
`;

export default About;
