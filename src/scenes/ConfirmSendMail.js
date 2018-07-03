import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import styled from 'styled-components';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { confirmMail } from '@assets/images';

const ConfirmSendMail = ({ email }) => {
  return (
    <SceneWrapper>
      <NavBar title="Esqueci minha senha" />
      <ConfirmIcon />
      <Title>Verifique seu e-mail.</Title>
      <Content>
        {`Enviamos um e-mail para ${email}, copie o número do token enviado.`}
      </Content>
      <Content>
        Caso não consiga ver o e-mail, verifique outros lugares onde ele possa
        estar, como sua pasta de lixo eletrônico, spam, social ou outras.
      </Content>
    </SceneWrapper>
  );
};

const Title = styled(SceneDescription)`
  align-self: center;
`;

const ConfirmIcon = styled.Image.attrs({
  source: confirmMail,
})`
  margin-top: ${60 * HEIGHT_REL};
  width: ${106 * WIDTH_REL};
  height: ${100 * HEIGHT_REL};
  align-self: center;
  resize-mode: contain;
`;

export default ConfirmSendMail;
