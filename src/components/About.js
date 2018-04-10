import React from 'react';
import { SceneWrapper } from '@components/Scene';
import SecondaryScene from '@components/SecondaryScene';
import aboutImage from '@assets/images/about-image.png';

const About = () => {
  return (
    <SceneWrapper>
      <SecondaryScene
        title="About us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={aboutImage}
      />
    </SceneWrapper>
  );
};

export default About;
