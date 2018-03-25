/* @flow */

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import whiteBell from '@assets/images/bell.png';
import redBell from '@assets/images/red-bell.png';
import styled from 'styled-components';

type Props = {
  onPress: Function,
};

const Notification = (props: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.onPress(props.unread)}>
        <Bell source={props.unread ? redBell : whiteBell} />
      </TouchableOpacity>
    </View>
  );
};

const Bell = styled.Image`
  width: 22;
  height: 24;
  margin-left: 32;
`;

export default Notification;
