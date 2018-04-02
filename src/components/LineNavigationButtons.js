import React from 'react';
import SettingsButton from '@components/SettingsButton';
import styled from 'styled-components';

const LineNavigationButtons = props => {
  return (
    <ButtonsView>
      <SettingsButton />
    </ButtonsView>
  );
};

const ButtonsView = styled.View`
  flex-direction: row;
`;

export default LineNavigationButtons;
