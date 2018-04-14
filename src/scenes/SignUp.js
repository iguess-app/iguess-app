import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription } from '@components/Scene';
import { SECONDARY_SCENE_NAVBAR_COLOR } from '@theme';

const SignUp = () => {
  return (
    <SceneWrapper>
      <NavBar title="Sign up" />
      <SceneDescription>Sign up here</SceneDescription>
    </SceneWrapper>
  );
};

export default SignUp;
