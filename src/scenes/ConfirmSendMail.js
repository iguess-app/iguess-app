import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import styled from 'styled-components';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { confirmMail } from '@assets/images';
import I18n from '../i18n';

const ConfirmSendMail = ({ email }) => {
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('forgotMyPasswordTitle')} />
      <ConfirmIcon />
      <Title>{I18n.t('verifyYourMail')}</Title>
      <Content>{I18n.t('sendedMailText', { text: email })}</Content>
      <Content>{I18n.t('mailTip')}</Content>
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
