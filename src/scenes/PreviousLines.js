import React, { Component } from 'react';
import UXCam from 'react-native-ux-cam';
import GameList from '@components/GameList';
import { SceneWrapper, NavBar } from '@components/Scene';
import Loading from '@scenes/Loading';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
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
    UXCam.startWithKey('20f7d8b48c2c0c0');
    UXCam.tagScreenName('PreviousLines');

    const { activeLine, championship, pontuation } = this.props;

    if (
      championship === undefined ||
      pontuation === undefined ||
      activeLine === undefined
    ) {
      return <Loading />;
    }

    return (
      <SceneWrapper>
        <NavBar title={I18n.t('pastMatchs')} />
        {this._renderGames()}
      </SceneWrapper>
    );
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
