import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { SceneDescription } from '@components/SecondaryScene';
import { HOME_BACKGROUND } from '@theme';

const Terms = () => {
  return (
    <SceneWrapper background={HOME_BACKGROUND}>
      <SceneDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend
        vitae ipsum.
      </SceneDescription>
    </SceneWrapper>
  );
};

export default Terms;
