import React, { Component } from 'react';
import Lines from '@containers/Lines';
import Settings from '@containers/Settings';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { swipe } from '@redux/flags/actions';
import styled from 'styled-components';

class Launch extends Component<void, void, void> {
  render() {
    const { dispatch } = this.props;

    return (
      <BackgroundContainer>
        <Swiper
          loop={false}
          index={1}
          showsPagination={false}
          onIndexChanged={index => dispatch(swipe(index))}
          ref={ref => (this.swiper = ref)}
        >
          <Settings swipe={() => this.swiper.scrollBy(1)} />
          <Lines swipe={() => this.swiper.scrollBy(-1)} />
        </Swiper>
      </BackgroundContainer>
    );
  }
}

const BackgroundContainer = styled.View`
  flex: 1;
`;

function mapStateToProps(state) {
  return {
    activeSwiperScreen: state.flags.activeSwiperScreen,
  };
}

export default connect(mapStateToProps)(Launch);
