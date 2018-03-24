import React from 'react';
import Notification from '@components/Notification';
import AddGuessline from '@components/AddGuessline';
import styled from 'styled-components';

const NavigationButtons = props => {
  const { unreadNotification, onPressNotification } = props;

  return (
    <ButtonsView>
      <Notification unread={unreadNotification} onPress={onPressNotification} />
      <AddGuessline />
    </ButtonsView>
  );
};

const ButtonsView = styled.View`
  flex-direction: row;
`;

export default NavigationButtons;
