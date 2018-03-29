import React from 'react';
import styled from 'styled-components';

const Team = props => {
  const { name, image, style } = props;

  return (
    <TeamView style={style}>
      <TeamImage source={image} />
      <TeamName>{name}</TeamName>
    </TeamView>
  );
};

const TeamView = styled.View`
  margin-horizontal: 16;
  margin-top: 40;
  align-items: center;
`;

const TeamName = styled.Text`
  opacity: 0.8;
  font-size: 12;
  font-weight: bold;
  margin-top: 4;
  color: #4d6980;
`;

const TeamImage = styled.Image`
  width: 44;
  height: 53;
  resize-mode: contain;
`;

export default Team;
