import React from 'react';
import { SceneWrapper, TextBaseBold } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { howItWorksImage } from '@assets/images';
import styled from 'styled-components';
import {
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
  BOARD_BORDER_COLOR,
  SEPARATOR_COLOR,
  BOARD_TITLE_COLOR,
  HIGHLITENED_CONTENT,
} from '@theme';
import I18n from 'react-native-i18n';

const HowItWorks = () => {
  return (
    <SceneWrapper>
      <NavBar title="Como o app funciona" />
      <Scroll>
        <HeaderImage source={howItWorksImage} />
        <SceneDescription>Ficou em dúvida sobre a pontuação?</SceneDescription>
        <Content>
          Então vamos lá, agora vamos te explicar como chegamos na pontuação do
          seu palpite.
        </Content>
        <Content>
          Para pontuar é necessário acertar o vencedor da partida, a pontuação
          de um jogo é a subtração entre a pontuação máxima e a diferença de
          gols.
        </Content>
        <Content>
          A pontuação para quem acertar o placar exato é de 10 pontos.
        </Content>
        <Board />
        <SceneDescription>Ficou em dúvida sobre a pontuação?</SceneDescription>
        <Content>
          {
            'Palpite: Inglaterra 1 x 2 Argentina\nResultado: Inglaterra 1 x 4 Argentina\nPontuação = 10 - | (1 + 2) - (1 + 4) | = 8'
          }
        </Content>
        <Content>
          A pontuação mínima para quem acertou o vencedor é de 2 pontos.
        </Content>
        <Separator />
        <HighlightenedContent>Em caso de empate:</HighlightenedContent>
        <CustomContent>
          {
            'Palpite: Brasil 0 x 0 Holanda\nResultado: Brasil 2 x 2 Holanda\nPontuação = 10 - | (0 + 0) - (2 + 2) | = 6'
          }
        </CustomContent>
        <HighlightenedContent>Em caso de erro:</HighlightenedContent>
        <CustomContent>
          {
            'Palpite: Uruguai 0 x 2 Portugal\nResultado: Uruguai 2 x 1 Portugal\nPontuação = 0'
          }
        </CustomContent>
        <Separator />
        <Content>
          1h antes do jogo a permissão de palpite para partida é bloqueada.
        </Content>
        <BottomSpacing />
      </Scroll>
    </SceneWrapper>
  );
};

const Scroll = styled.ScrollView`
  margin-bottom: ${4 * HEIGHT_REL};
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: ${160 * HEIGHT_REL};
  width: 100%;
`;

const Separator = styled.View`
  height: ${2 * HEIGHT_REL};
  background-color: ${SEPARATOR_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-vertical: ${16 * HEIGHT_REL};
`;

const Board = () => (
  <BoardBorder>
    <BoardHeader>
      <BoardTitle>PP = PM - | (SGP) - (SGR) |</BoardTitle>
    </BoardHeader>
    <BoardContent>
      {
        'PP - Pontuação da Partida\nPM - Pontuação Máxima\nSGP - Soma de gols do palpite\nSGR - Soma de gols do resultado'
      }
    </BoardContent>
  </BoardBorder>
);

const BoardBorder = styled.View`
  height: ${180 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-vertical: ${32 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  border-width: 1;
  border-color: ${BOARD_BORDER_COLOR};
`;

const BoardHeader = styled.View`
  width: 100%;
  height: ${56 * HEIGHT_REL};
  background-color: ${HIGHLITENED_CONTENT};
  border-top-left-radius: ${16 * RATIO};
  border-top-right-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
`;

const BoardTitle = styled(TextBaseBold)`
  font-size: ${24 * HEIGHT_REL};
  color: ${BOARD_TITLE_COLOR};
`;

const BoardContent = styled(Content)`
  font-size: ${14 * WIDTH_REL};
  text-align: center;
  justify-content: center;
`;

const HighlightenedContent = styled(TextBaseBold)`
  color: ${HIGHLITENED_CONTENT};
  font-size: ${16 * RATIO};
  padding-horizontal: ${32 * WIDTH_REL};
`;

const CustomContent = styled(Content)`
  margin-top: ${2 * HEIGHT_REL};
  margin-bottom: ${16 * HEIGHT_REL};
`;

const BottomSpacing = styled.View`
  margin-bottom: ${24 * HEIGHT_REL};
`;

export default HowItWorks;
