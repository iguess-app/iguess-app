import React, { Component } from 'react';
import GameList from '@components/GameList';
import { SceneWrapper } from '@components/Scene';
import Loading from '@scenes/Loading';
import { connect } from 'react-redux';
import * as linesActions from '@redux/lines/actions';

class PreviousLines extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOpacity: 1 };
  }

  componentDidMount() {
    this.props.dispatch(linesActions.fetchLine());
  }

  _renderGames() {
    const { loading, activeLine } = this.props;

    const wait = loading || !activeLine ? true : false;

    return <GameList base={activeLine} loading={wait} />;
  }

  render() {
    const { activeLine, championship, pontuation } = this.props;

    if (
      championship === undefined ||
      pontuation === undefined ||
      activeLine === undefined
    ) {
      return <Loading />;
    }

    return <SceneWrapper>{this._renderGames()}</SceneWrapper>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.lines.loading,
    activeLine: state.lines.activeLine,
    championship: state.lines.activeLine.championship,
    pontuation: state.lines.activeLine.guessLinePontuation,
  };
};

export default connect(mapStateToProps)(PreviousLines);
