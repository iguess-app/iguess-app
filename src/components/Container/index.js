/* @flow */

import React, { Element } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'

const container = styled.View`
    flex: 1;
    paddingTop: 40;
    backgroundColor: ${DEFAULT_BACKGROUND_COLOR};
`

export default container;