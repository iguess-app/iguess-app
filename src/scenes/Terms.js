import React from 'react';
import Appsee from 'react-native-appsee';
import { SceneWrapper } from '@components/Scene';
import { NavBar, Content, SceneDescription } from '@components/Scene';
import styled from 'styled-components';
import I18n from 'react-native-i18n';
import { HEIGHT_REL } from '@theme';

const Terms = () => {
  Appsee.startScreen('Terms');
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('termsTitle')} />
      <Scroll>
        <SceneDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          eleifend vitae ipsum.
        </SceneDescription>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          eleifend vitae ipsum vehicula malesuada. Ut scelerisque nunc non
          consequat ultricies. Etiam volutpat arcu velit, sed luctus enim
          tincidunt sed. Sed tortor ante, dictum vitae ullamcorper sed,
          facilisis sodales est. Cras id facilisis metus. Ut sed dapibus ante.
          Nullam euismod sapien luctus metus feugiat commodo. Aenean sit amet
          bibendum mi, et tristique nisi. Proin aliquet tellus non magna
          feugiat, ut ultricies magna convallis. Fusce nec sagittis nunc. Proin
          et gravida metus. Sed tristique augue eu lectus maximus ullamcorper.
          Praesent eros sapien, maximus sit amet dui nec, ultricies faucibus
          ante. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Maecenas volutpat at erat eu
          imperdiet. Suspendisse dignissim sem erat, vel euismod enim sagittis
          a. Etiam sit amet nisi non lectus imperdiet dictum. Nullam suscipit
          commodo pharetra. Morbi vitae facilisis est. Aliquam erat volutpat.
          Nullam bibendum nisi elit, ac convallis nunc vehicula ut. Ut leo leo,
          lobortis aliquam nisi vel, fermentum mattis sapien. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Morbi vitae mollis mauris, eu interdum purus. Maecenas metus
          nibh, facilisis vel est sit amet, bibendum volutpat ex. Proin sem
          quam, consequat consequat augue at, facilisis aliquet magna. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Integer id
          suscipit ipsum. Nam feugiat, neque a tristique tincidunt, diam elit
          iaculis ligula, quis imperdiet sapien lectus sed velit. Sed gravida
          tincidunt fringilla. Cras venenatis, odio sed pulvinar condimentum,
          nulla enim varius ligula, sit amet tempor ipsum arcu in magna.
        </Content>
      </Scroll>
    </SceneWrapper>
  );
};

const Scroll = styled.ScrollView`
  margin-bottom: ${24 * HEIGHT_REL};
`;

export default Terms;
