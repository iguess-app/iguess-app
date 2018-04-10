import React from 'react';
import { SceneWrapper } from '@components/Scene';
import SecondaryScene from '@components/SecondaryScene';
import styled from 'styled-components';
import { SUBTEXT_SECONDARY_SCENE } from '../theme';

const Support = () => {
  return (
    <SceneWrapper>
      <SecondaryScene
        title="Support"
        description="Fale com alguém do nosso time ou contate-nos nas redes sociais."
      />
      <SubText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend
        vitae ipsum vehicula malesuada. Ut scelerisque nunc non consequat
        ultricies.
      </SubText>
    </SceneWrapper>
  );
};

const SubText = styled.Text`
  font-size: 14;
  color: ${SUBTEXT_SECONDARY_SCENE}
  margin-top: 10;
  padding-right: 32;
  padding-left: 32;
`;
export default Support;
