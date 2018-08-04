import React, { Component } from 'react';
import { Alert } from 'react-native';
import { NavBarWithMenu } from '@components/NavBar';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import Loading from '@scenes/Loading';
import {
  gold,
  bronze,
  silver,
  exit,
  plusPurple,
  captain,
  trophyGray,
} from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR, RATIO, DEFAULT_BACKGROUND } from '@theme';
import { get, apiDelete } from '@helpers';
import I18n from 'react-native-i18n';

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: null,
      visibleModal: false,
      loading: true,
    };
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
        this.setState({ league: response }, () =>
          this.setState({ loading: false }),
        );
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
        Actions.reset('leagues');
      }
    });
  }

  confirmQuitLeague() {
    Alert.alert(
      I18n.t('exitLeagueTitle'),
      I18n.t('confirmExitLeagueText', {
        text: this.state.league.guessLeagueName,
      }),
      [
        {
          text: I18n.t('exitText'),
          onPress: () => {
            this.quitLeague();
          },
        },
        { text: I18n.t('cancelText') },
      ],
      { cancelable: false },
    );
  }

  _renderModalContent = () => (
    <ModalView>
      {this.state.league.isCaptain && (
        <Row
          onPress={() => {
            return this.addFriends();
          }}
        >
          <Icon source={plusPurple} />
          <MenuText>{I18n.t('addFriendText')}</MenuText>
        </Row>
      )}
      <Row
        onPress={() => {
          return this.confirmQuitLeague();
        }}
      >
        <Icon source={exit} />
        <MenuText>{I18n.t('exitLeagueText')}</MenuText>
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
          <NameText>{item.loggedUser ? I18n.t('youText') : item.name}</NameText>
          <UserNameText>{`@${item.userName}`}</UserNameText>
        </UserContent>
        <IconContent>
          {item.captain && <IconCap source={captain} />}
        </IconContent>
        <Points>
          <PointsText>{item.totalPontuation}</PointsText>
        </Points>
      </Card>
    );
  }

  render() {
    const { league } = this.state;

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      league && (
        <SceneWrapper>
          <Content>
            <NavBarWithMenu
              title=""
              back={() => Actions.pop()}
              menu={() => this.setState({ visibleModal: true })}
            />
            <HeaderLeague
              season={league.championship.season}
              championship={league.championship.championship}
              guessLeagueName={league.guessLeagueName}
            />
            <NormalListContent>
              <List
                data={league.players}
                keyExtractor={item => item.userRef}
                renderItem={({ item }) => this._renderCard(item)}
              />
            </NormalListContent>
          </Content>
          <Modal
            isVisible={this.state.visibleModal}
            backdropColor={'#553dd1'}
            backdropOpacity={0.8}
            onBackdropPress={() => {
              return this.setState({ visibleModal: false });
            }}
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
    <ContentIcon>
      <LeagueName>{guessLeagueName}</LeagueName>
      <TrophyIcon />
    </ContentIcon>
  </NavWrapper>
);

const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: ${80 * HEIGHT_REL};
`;

const ModalView = styled.View`
  background-color: #fff;
  justify-content: center;
`;

const MenuText = styled.Text`
  font-weight: bold;
  color: #553dd1;
  font-size: ${12 * HEIGHT_REL};
  margin-top: ${25 * HEIGHT_REL};
  margin-bottom: ${30 * HEIGHT_REL};
`;

const IconCap = styled.Image`
  height: ${25 * RATIO};
  width: ${25 * RATIO};
  resize-mode: contain;
`;

const Icon = styled.Image`
  height: ${25 * RATIO};
  width: ${25 * RATIO};
  resize-mode: contain;
  margin-left: ${32 * WIDTH_REL};
  margin-right: ${20 * WIDTH_REL};
`;

const bottomModal = {
  justifyContent: 'flex-end',
  margin: 0,
};

const NavWrapper = styled.ImageBackground`
  height: ${100 * HEIGHT_REL};
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
  margin-top: ${10 * HEIGHT_REL};
`;

const List = styled.FlatList`
  margin-bottom: ${20 * HEIGHT_REL};
`;

const TrophyIcon = styled.Image.attrs({
  source: trophyGray,
})`
  width: ${80 * WIDTH_REL};
  height: ${80 * HEIGHT_REL};
  margin-top: ${-35 * HEIGHT_REL};
  resize-mode: contain;
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
  margin-left: ${15 * WIDTH_REL};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
`;

const Podium = styled.Image`
  width: ${30 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  margin-right: ${20 * WIDTH_REL};
  margin-left: ${35 * WIDTH_REL};
  align-items: center;
  justify-content: center;
  resize-mode: contain;
`;

const RankPosition = styled.View`
  width: ${30 * WIDTH_REL};
  height: ${23 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
  background-color: #18ec98;
  margin-right: ${20 * WIDTH_REL};
  margin-left: ${35 * WIDTH_REL};
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
  width: ${370 * WIDTH_REL};
  height: ${70 * HEIGHT_REL};
  background-color: #fff;
  align-self: center;
  align-items: center;
`;

const Content = styled.View``;

const ContentIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const IconContent = styled.View`
  width: ${30 * WIDTH_REL};
  margin-left: ${-10 * WIDTH_REL};
`;

const NormalListContent = styled.View`
  background: #fff;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: ${480 * HEIGHT_REL};
  margin-top: ${10 * HEIGHT_REL};
`;

const UserContent = styled.View`
  width: ${165 * WIDTH_REL};
`;

export default Leagues;
