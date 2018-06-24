import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { TextBaseBold } from '@components/Scene';
import styled from 'styled-components';

const ConfirmSendMail = ({ email }) => {
  return (
    <SceneWrapper>
      <NavBar title="Esqueci minha senha" />
      <SceneDescription>Verifique seu e-mail.</SceneDescription>
      <Content>
        {`Enviamos um e-mail para ${email}, copie o número do token enviado.`}
      </Content>
      <Content>
        Caso não consiga ver o e-mail, verifique outros lugares onde ele possa
        estar, como sua pasta de lixo eletrônico, spam, social ou outras.
      </Content>

      <TextLink>Não recebi o e-mail</TextLink>
    </SceneWrapper>
  );
};

const TextLink = styled(TextBaseBold)`
  color: #553dd1;
  align-self: center;
  text-decoration: underline;
`;

export default ConfirmSendMail;
