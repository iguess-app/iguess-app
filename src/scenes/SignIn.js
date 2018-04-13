import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription } from '@components/SecondaryScene';
import { SECONDARY_SCENE_NAVBAR_COLOR } from '@theme';

const SignUp = () => {
  return (
    <SceneWrapper statusColor={SECONDARY_SCENE_NAVBAR_COLOR}>
      <NavBar title="Sign in" />
      <SceneDescription>Sign in here</SceneDescription>
    </SceneWrapper>
  );
};

export default SignUp;
