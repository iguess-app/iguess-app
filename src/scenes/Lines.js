import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import GameList from '@components/GameList';
import SelectedLine from '@components/SelectedLine';
import { SceneWrapper, TextBaseBold } from '@components/Scene';
import Loading from '@scenes/Loading';
import { alignLeft } from '@assets/images';
import { DEFAULT_BACKGROUND, MENU_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';
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

  _changeSelectedLineOpacity({ contentOffset }) {
    let opacity = contentOffset.y <= 0 ? 1 : 1 / (0.3 * contentOffset.y);

    this.setState({ selectedOpacity: opacity });
  }

  _renderGames() {
    const { loading, activeLine } = this.props;

    const wait = loading || !activeLine ? true : false;

    return <GameList prev base={activeLine} loading={wait} />;
  }

  render() {
    const { activeLine, swipe, championship, pontuation } = this.props;

    if (
      championship === undefined ||
      pontuation === undefined ||
      activeLine === undefined
    ) {
      return <Loading />;
    }

    const championshipName = championship.championship;
    const season = championship.season;

    return (
      <SceneWrapper background={DEFAULT_BACKGROUND}>
        <Navigation>
          <Menu onPress={swipe} />
        </Navigation>
        <SelectedLine
          season={season}
          name={championshipName}
          points={pontuation}
          opacity={this.state.selectedOpacity}
        />
        {this._renderGames()}
      </SceneWrapper>
    );
  }
}

// const SecondarySelectedLine = props => {
//   const { name, scroll, principalOpacity } = props;

//   if (principalOpacity < 0.2) {
//     const inversionConstant = 2.5;
//     const inversalOpacity = opacity => 1 - inversionConstant * opacity;
//     const initialPosition = { x: 0, y: 0, animated: true };

//     return (
//       <NavTouchable onPress={() => scroll.scrollTo(initialPosition)}>
//         <NavText opacity={inversalOpacity(principalOpacity)}>{name}</NavText>
//         <Chevron opacity={inversalOpacity(principalOpacity)} />
//       </NavTouchable>
//     );
//   }

//   return null;
// };

const Navigation = styled.View`
  flex-direction: row;
  margin-top: ${23 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const Menu = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <MenuWrapper>
      <MenuIcon />
      <MenuText>MENU</MenuText>
    </MenuWrapper>
  </TouchableOpacity>
);

const MenuWrapper = styled.View`
  flex-direction: row;
`;
const MenuIcon = styled.Image.attrs({
  source: alignLeft,
})`
  width: ${24 * WIDTH_REL};
  height: ${15 * HEIGHT_REL};
`;

const MenuText = styled(TextBaseBold)`
  font-size: ${12 * HEIGHT_REL};
  margin-left: ${8 * WIDTH_REL};
  color: ${MENU_COLOR};
`;

// const NavTouchable = styled.TouchableOpacity`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
//   margin-top: ${2 * HEIGHT_REL};
// `;

// const NavText = styled(TextBaseBold)`
//   font-size: ${16 * RATIO};
//   color: ${SELECT_LINE_PRIMARY_TEXT};
//   opacity: ${props => props.opacity};
//   margin-right: ${16 * WIDTH_REL};
// `;

// const Chevron = styled.Image.attrs({
//   source: chevronDown,
// })`
//   width: ${14 * WIDTH_REL};
//   resize-mode: contain;
//   margin-top: ${4 * HEIGHT_REL};
// `;

const mapStateToProps = state => {
  return {
    loading: state.lines.loading,
    activeLine: state.lines.activeLine,
    championship: state.lines.activeLine.championship,
    pontuation: state.lines.activeLine.guessLinePontuation,
  };
};

export default connect(mapStateToProps)(Lines);
