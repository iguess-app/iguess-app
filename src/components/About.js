import React from 'react';
import { SceneWrapper } from '@components/Scene';
import {
  Header,
  SceneDescription,
  HeaderImage,
} from '@components/SecondaryScene';
import aboutImage from '@assets/images/about-image.png';

const About = () => {
  return (
    <SceneWrapper>
      <Header title="About us" />
      <SceneDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SceneDescription>
      <HeaderImage source={aboutImage} />
    </SceneWrapper>
  );
};

export default About;
