import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { DarkBorderButton, MainButton } from '@components/Button';
import {
  aboutImage,
  facebookIcon,
  twitterIcon,
  instagramIcon,
} from '@assets/images';
import styled from 'styled-components';
import { WIDTH_REL, HEIGHT_REL, TEXT_SECONDARY_SCENE } from '@theme';

const About = () => {
  return (
    <SceneWrapper>
      <NavBar title="About us" />
      <Scroll>
        <HeaderImage source={aboutImage} />
        <SceneDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SceneDescription>
        <BoldContent>Version: 1.0.1</BoldContent>
        <SectionTitle>Nossa vibe</SectionTitle>
        <Content>
          A iguess chegou focada em você, louco por esportes. Nossa vibe é
          trazer uma parada para você palpitar a vontade em todos as
          modalidades, agora principalmente nas partidas da copa do mundo, e
          competir com a sua galera do trabalho, escola e faculdade, vendo quem
          se saiu melhor em cada rodada.
        </Content>
        <SectionTitle>Nossa Brisa</SectionTitle>
        <Content>
          A gente quer ver todo mundo que gosta muito de esporte usando nosso
          aplicativo, palpitando e curtindo com a galera. Imagina só, apostar
          com seu brother quem vai vencer a Fórmula 1 no domingo valendo uma
          caixa de breja e nosso aplicativo avisar aos dois quem foi o vencedor
          do palpite! Nossa brisa é chegar nesse nível. A caminhada é longa,
          começa com um único campeonato, a copa do mundo, e a gente conta com
          você para chegar onde queremos. Afinal, essa é a forma mais fácil de
          ter seus palpites reunidos num só lugar.
        </Content>
        <SectionTitle>Nosso Rolê</SectionTitle>
        <Content>
          Viemos do mundo da tecnologia e sempre curtimos muito fazer aquele
          bolão maroto e a ideia surgiu de uma necessidade de organizar esses
          bolões. Somos 100% foçados em você e nas suas necessidades, queremos
          sempre ouvir a sua voz e criar soluções que atendam essas necessidades
          para que você use cada vez mais nosso app. Temos um núcleo de
          tecnologia e design que está sempre aberto a ouvir sugestões, tem
          alguma? Então manda pra gente por aqui:
        </Content>
        <RateView>
          <MainButton
            text="Send feedback"
            onPress={() => {
              throw new Error('Not implemented. TODO: Feedback');
            }}
          />
          <DarkBorderButton
            text="Rate this app"
            onPress={() => {
              throw new Error('Not implemented. TODO: Rate app');
            }}
          />
        </RateView>
        <FollowText>Follow us on social media</FollowText>
        <FollowRow>
          <TouchableIcon icon={facebookIcon} url="https://www.facebook.com" />
          <TouchableIcon icon={twitterIcon} url="https://www.twitter.com" />
          <TouchableIcon icon={instagramIcon} url="https://www.instagram.com" />
        </FollowRow>
      </Scroll>
    </SceneWrapper>
  );
};

const TouchableIcon = props => {
  const { icon, url } = props;

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Icon source={icon} />
    </TouchableOpacity>
  );
};

const SectionTitle = styled.Text`
  font-size: 28;
  font-weight: bold;
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${24 * HEIGHT_REL};
  color: ${TEXT_SECONDARY_SCENE};
`;

const RateView = styled.View`
  align-self: center;
  margin-vertical: ${32 * WIDTH_REL};
  margin-horizontal: ${30 * HEIGHT_REL};
`;

const BoldContent = styled(Content)`
  font-weight: bold;
  margin-top: ${16 * HEIGHT_REL};
  margin-bottom: ${8 * HEIGHT_REL};
`;

const Scroll = styled.ScrollView`
  margin-bottom: ${24 * HEIGHT_REL};
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: 160;
  width: 100%;
`;

const FollowText = styled.Text`
  align-self: center;
  font-size: 16;
  font-weight: bold;
  color: black;
  margin-bottom: ${16 * HEIGHT_REL};
`;

const FollowRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${80 * WIDTH_REL};
`;

const Icon = styled.Image`
  width: 56;
  height: 56;
`;

export default About;
