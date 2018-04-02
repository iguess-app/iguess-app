import React from 'react';
import Notification from '@components/Notification';
import styled from 'styled-components';

const LineNavigationButtons = props => {
  const { unreadNotification, onPressNotification } = props;

  return (
    <ButtonsView>
      <Notification unread={unreadNotification} onPress={onPressNotification} />
    </ButtonsView>
  );
};

const ButtonsView = styled.View`
  flex-direction: row;
`;

export default LineNavigationButtons;
