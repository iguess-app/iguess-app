import React from 'react';
import styled from 'styled-components';

const Team = props => {
  const { name, image } = props;

  return (
    <TeamView>
      <TeamImage source={image} />
      <TeamName>{name}</TeamName>
    </TeamView>
  );
};

const TeamView = styled.View`
  align-self: flex-end;
  margin-horizontal: 16;
  margin-top: 40;
`;

const TeamName = styled.Text`
  opacity: 0.4;
  font-size: 12;
  color: #4d6980;
`;

const TeamImage = styled.Image`
  width: 44;
  height: 53;
`;

export default Team;
