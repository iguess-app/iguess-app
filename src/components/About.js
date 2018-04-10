import React from 'react';
import { SceneWrapper } from '@components/Scene';
import SecondaryScene from '@components/SecondaryScene';

const About = () => {
  return (
    <SceneWrapper>
      <SecondaryScene
        title="About us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </SceneWrapper>
  );
};

export default About;
