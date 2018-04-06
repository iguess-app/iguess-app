import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '../theme/index';

export const Name = styled.Text`
  color: black;
  font-size: 300;
  font-weight: bold;
`;

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const SceneWrapper = styled.ImageBackground`
  padding-top: 40;
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;
