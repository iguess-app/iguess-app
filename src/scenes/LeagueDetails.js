import React, { Component } from 'react';
import { NavBarWithMenu } from '@components/NavBar';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import { gold, bronze, silver, exit, plusPurple } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR, RATIO, DEFAULT_BACKGROUND } from '@theme';
import { get, apiDelete } from '@helpers';

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: null,
      visibleModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('foi', nextProps);
    if (nextProps.refresh) {
      Actions.refresh();
    }
  }

  componentDidMount() {
    this.loadLeagues();
  }

  loadLeagues() {
    get(
      `https://iguess-666666.appspot.com/guessleague/getGuessLeague?guessLeagueRef=${
        this.props.leagueId
      }`,
    ).then(response => {
      if (response.statusCode !== 404) {
        this.setState({ league: response });
      }
    });
  }

  addFriends() {
    Actions.push('addfriends', { leagueId: this.props.leagueId });
    this.setState({ visibleModal: false });
  }

  quitLeague() {
    const body = {
      guessLeagueRef: this.props.leagueId,
    };
    apiDelete(
      `https://iguess-666666.appspot.com/guessleague/quitGuessLeague`,
      body,
    ).then(response => {
      if (response.statusCode !== 404) {
        Actions.reset('core', { activeSwiperScreen: 2 });
      }
    });
  }

  _renderModalContent = () => (
    <ModalView>
      <Row onPress={() => this.addFriends()}>
        <Icon source={plusPurple} />
        <MenuText>Adicionar um Amigo</MenuText>
      </Row>
      <Row onPress={() => this.quitLeague()}>
        <Icon source={exit} />
        <MenuText>Sair da Liga</MenuText>
      </Row>
    </ModalView>
  );

  _renderCard(item) {
    const podiumImages = {
      1: gold,
      2: silver,
      3: bronze,
    };
    const isPodium = [1, 2, 3].includes(item.rankingPosition);
    return (
      <Card key={item.userRef}>
        {isPodium ? (
          <Podium source={podiumImages[item.rankingPosition]} />
        ) : (
          <RankPosition>
            <RankText>{item.rankingPosition}</RankText>
          </RankPosition>
        )}
        <UserContent>
          <NameText>{item.name}</NameText>
          <UserNameText>{`@${item.userName}`}</UserNameText>
        </UserContent>
        <Points>
          <PointsText>{item.totalPontuation}</PointsText>
        </Points>
      </Card>
    );
  }

  render() {
    const { league } = this.state;

    return (
      league && (
        <SceneWrapper>
          <Content>
            <NavBarWithMenu
              title=""
              back={() => Actions.reset('core', { activeSwiperScreen: 2 })}
              menu={() => this.setState({ visibleModal: true })}
            />
            <HeaderLeague
              season={league.championship.season}
              championship={league.championship.championship}
              guessLeagueName={league.guessLeagueName}
            />
            <ListContent style={cardShadow}>
              <List
                data={league.players.filter(item =>
                  [1, 2, 3].includes(item.rankingPosition),
                )}
                keyExtractor={item => item.userRef}
                renderItem={({ item }) => this._renderCard(item)}
              />
            </ListContent>
            <NormalListContent>
              <List
                data={league.players.filter(
                  item => ![1, 2, 3].includes(item.rankingPosition),
                )}
                keyExtractor={item => item.userRef}
                renderItem={({ item }) => this._renderCard(item)}
              />
            </NormalListContent>
          </Content>
          <Modal
            isVisible={this.state.visibleModal}
            backdropColor={'#553dd1'}
            backdropOpacity={0.8}
            onBackdropPress={() => this.setState({ visibleModal: false })}
            style={bottomModal}
          >
            {this._renderModalContent()}
          </Modal>
        </SceneWrapper>
      )
    );
  }
}

const HeaderLeague = ({ season, championship, guessLeagueName }) => (
  <NavWrapper source={DEFAULT_BACKGROUND}>
    <Year>{season}</Year>
    <Championship>{championship}</Championship>
    <LeagueName>{guessLeagueName}</LeagueName>
  </NavWrapper>
);

const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const MenuText = styled.Text`
  font-weight: bold;
  color: #553dd1;
  font-size: ${12 * HEIGHT_REL};
  margin-top: ${25 * HEIGHT_REL};
  margin-bottom: ${20 * HEIGHT_REL};
`;

const Icon = styled.Image`
  height: ${25 * RATIO};
  width: ${25 * RATIO};
  resize-mode: contain;
  margin-left: ${32 * WIDTH_REL};
  margin-right: ${20 * WIDTH_REL};
`;

const ModalView = styled.View`
  background-color: #fff;
  justify-content: center;
`;

const bottomModal = {
  justifyContent: 'flex-end',
  margin: 0,
};

const NavWrapper = styled.ImageBackground`
  height: ${140 * HEIGHT_REL};
  z-index: 1;
`;
const Year = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${14 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
`;
const Championship = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${14 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
`;
const LeagueName = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${30 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
  margin-top: ${10 * WIDTH_REL};
  margin-bottom: ${20 * WIDTH_REL};
`;

const List = styled.FlatList`
  margin-top: ${8 * HEIGHT_REL};
  width: ${300 * WIDTH_REL};
`;

const UserNameText = styled(TextBase)`
  margin-bottom: ${5 * HEIGHT_REL};
  font-size: ${14 * HEIGHT_REL};
  color: #c4c4c4;
`;

const NameText = styled(TextBaseBold)`
  margin-bottom: ${5 * HEIGHT_REL};
  color: #000;
  font-size: ${16 * HEIGHT_REL};
  font-weight: bold;
`;

const Points = styled.View`
  width: ${50 * WIDTH_REL};
  height: ${30 * HEIGHT_REL};
  background: ${LOADING_TITLE_COLOR};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
`;

const Podium = styled.ImageBackground`
  width: ${23 * WIDTH_REL};
  height: ${40 * HEIGHT_REL};
  align-items: center;
  justify-content: center;
  margin-right: ${20 * WIDTH_REL};
  margin-left: ${18 * WIDTH_REL};
`;

const RankPosition = styled.View`
  width: ${23 * WIDTH_REL};
  height: ${23 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
  background-color: #18ec98;
  margin-right: ${20 * WIDTH_REL};
  margin-left: ${18 * WIDTH_REL};
`;
const RankText = styled(TextBaseBold)`
  font-weight: bold;
  color: #fff;
  font-size: ${12 * HEIGHT_REL};
`;

const PointsText = styled(TextBase)`
  font-size: ${18 * HEIGHT_REL};
  font-weight: bold;
  color: #fff;
`;

const Card = styled.View`
  flex-direction: row;
  width: ${330 * WIDTH_REL};
  height: ${70 * HEIGHT_REL};
  background-color: #fff;
  align-self: center;
  align-items: center;
`;

const Content = styled.View``;

const cardShadow = {
  elevation: 10,
  shadowOpacity: 0.16,
  shadowColor: '#4D6980',
  shadowOffset: {
    width: 8,
    height: 16,
  },
  shadowRadius: 8,
};

const ListContent = styled.View`
  width: ${330 * WIDTH_REL};
  border-radius: ${16 * RATIO};
  margin-top: ${-40 * HEIGHT_REL};
  background: #fff;
  align-self: center;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const NormalListContent = styled.View`
  width: ${330 * WIDTH_REL};
  background: #fff;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const UserContent = styled.View`
  width: ${200 * WIDTH_REL};
`;

export default Leagues;
