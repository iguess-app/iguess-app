import React, { Component } from 'react';
import styled from 'styled-components';
import GameList from '@components/GameList';
import SelectedLine from '@components/SelectedLine';
import { SceneWrapper } from '@components/Scene';
import SettingsButton from '@components/SettingsButton';
import Loading from '@scenes/Loading';
import { chevronDown } from '@assets/images';
import {
  SELECT_LINE_PRIMARY_TEXT,
  DEFAULT_BACKGROUND,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { TextBaseBold } from '@components/Scene';
import { connect } from 'react-redux';
import * as linesActions from '@redux/lines/actions';

class Lines extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOpacity: 1 };
  }

  componentWillMount() {
    this.props.dispatch(linesActions.fetchLine());
  }

  _changeSelectedLineOpacity(event) {
    let offset = event.nativeEvent.contentOffset.y;
    let opacity = offset <= 0 ? 1 : 1 / (0.3 * offset);

    this.setState({ selectedOpacity: opacity });
  }

  render() {
    const { games, swipe, loading, championship, pontuation } = this.props;

    if (loading || championship === undefined || pontuation === undefined) {
      return <Loading />;
    }

    const championshipName = championship.championship;
    const season = championship.season;

    return (
      <SceneWrapper background={DEFAULT_BACKGROUND}>
        <Navigation>
          <SettingsButton onPress={swipe} />
          <SecondarySelectedLine
            name={championshipName}
            scroll={this.scroll}
            principalOpacity={this.state.selectedOpacity}
          />
        </Navigation>
        <Scroll
          onScroll={this._changeSelectedLineOpacity.bind(this)}
          scrollEventThrottle={16}
          innerRef={ref => (this.scroll = ref)}
        >
          <SelectedLine
            season={season}
            name={championshipName}
            points={pontuation}
            opacity={this.state.selectedOpacity}
          />
          <GameList games={games} />
        </Scroll>
      </SceneWrapper>
    );
  }
}

const SecondarySelectedLine = props => {
  const { name, scroll, principalOpacity } = props;

  if (principalOpacity < 0.2) {
    const inversionConstant = 2.5;
    const inversalOpacity = opacity => 1 - inversionConstant * opacity;
    const initialPosition = { x: 0, y: 0, animated: true };

    return (
      <NavTouchable onPress={() => scroll.scrollTo(initialPosition)}>
        <NavText opacity={inversalOpacity(principalOpacity)}>{name}</NavText>
        <Chevron opacity={inversalOpacity(principalOpacity)} />
      </NavTouchable>
    );
  }

  return null;
};

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Navigation = styled.View`
  flex: 0.08;
  flex-direction: row;
  margin-top: ${46 * HEIGHT_REL};
  margin-horizontal: 8%;
`;

const NavTouchable = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2;
`;

const NavText = styled(TextBaseBold)`
  font-size: 16;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
  margin-right: 16;
`;

const Chevron = styled.Image.attrs({
  source: chevronDown,
})`
  width: ${14 * WIDTH_REL};
  resize-mode: contain;
  margin-top: 4;
`;

const mapStateToProps = state => {
  return {
    loading: state.lines.loading,
    games: state.lines.activeLine,
    championship: state.lines.activeLine.championship,
    pontuation: state.lines.activeLine.guessLinePontuation,
  };
};

export default connect(mapStateToProps)(Lines);
