import React, { Component } from 'react';
import GameCard from './GameCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import { SCENE_BACKGROUND_COLOR, CARD_LIST_TITLE_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

class GameList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
  }

  render() {
    return (
      <Wrapper>
        <Title first>HOJE</Title>
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              HomeGuess={item.HomeGuess}
              AwayGuess={item.AwayGuess}
            />
          )}
        />
        <Title>AMANHÃ</Title>
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              HomeGuess={item.HomeGuess}
              AwayGuess={item.AwayGuess}
            />
          )}
        />
      </Wrapper>
    );
  }
}

const List = styled.FlatList`
  margin-top: ${16*HEIGHT_REL};
`;

export const Wrapper = styled.ScrollView`
  margin-top: ${60*HEIGHT_REL};
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

const mapStateToProps = state => {
  return {
    games: gamesSelectors.getGames(state),
  };
}

const Title = styled.Text`
  margin-top: ${props => props.first ? 20*HEIGHT_REL : 0};
  font-size: 28;
  font-weight: bold;
  color: ${CARD_LIST_TITLE_COLOR};
  margin-left: ${32*WIDTH_REL};
`

export default connect(mapStateToProps)(GameList);