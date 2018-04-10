import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { Header, SceneDescription, Content } from '@components/SecondaryScene';
import aboutImage from '@assets/images/about-image.png';
import styled from 'styled-components';

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
      </Scroll>
    </SceneWrapper>
  );
};

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
`;

export default About;
