import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { Header, Content } from '@components/SecondaryScene';
import styled from 'styled-components';

const Support = () => {
  return (
    <SceneWrapper>
      <Header
        title="Support"
        description="Fale com alguém do nosso time ou contate-nos nas redes sociais."
      />
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend
        vitae ipsum vehicula malesuada. Ut scelerisque nunc non consequat
        ultricies.
      </Content>
    </SceneWrapper>
  );
};

export default Support;
