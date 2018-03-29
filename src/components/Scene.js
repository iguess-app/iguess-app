import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '../theme';

export const Name = styled.Text`
  color: black;
  font-size: 300;
  font-weight: bold;
`;

export const View = styled.ScrollView`
  margin-top: 60;
  width: 100%;
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;
