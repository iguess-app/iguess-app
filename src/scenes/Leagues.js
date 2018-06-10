import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple, plusIcon, leagueBig } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import I18n from 'react-native-i18n';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR, LOADING_SUBTITLE_COLOR } from '@theme';

const Leagues = ({ swipe }) => {
  return (
    <SceneWrapper>
      <Close onPress={swipe} />
      <ButtonsView>
        <Title>MINHAS LIGAS</Title>
        <Subtitle>
          Aqui você pode competir com seus amigos e ver quem acerta mais
          palpites
        </Subtitle>
        <LeagueBig />
        <SubtitleGray>Você ainda não tem nenhuma liga</SubtitleGray>
        <MainButton
          text="Criar uma Liga"
          onPress={() => Actions.push('createleague')}
        />
      </ButtonsView>
    </SceneWrapper>
  );
};

const Close = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

const Subtitle = styled(TextBase)`
  text-align: center;
  align-self: center;
  color: #333;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
  font-size: ${16 * HEIGHT_REL};
`;

const SubtitleGray = styled(Subtitle)`
  color: #c6ccd2;
  margin-bottom: ${24 * HEIGHT_REL};
`;

const Title = styled(TextBaseBold)`
  text-align: center;
  align-self: center;
  color: ${LOADING_TITLE_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${72 * HEIGHT_REL};
  font-size: ${32 * WIDTH_REL};
`;

const LeagueBig = styled.Image.attrs({
  source: leagueBig,
})`
  margin-top: ${60 * HEIGHT_REL};
  width: ${73 * WIDTH_REL};
  height: ${67 * HEIGHT_REL};
`;

const CloseImage = styled.Image.attrs({
  source: chevronLeftPurple,
})`
  width: ${10 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${26 * HEIGHT_REL};
`;

const ButtonsView = styled.View`
  justify-content: center;
  align-items: center;
`;

export default Leagues;
