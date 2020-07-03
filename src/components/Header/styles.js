import styled from 'styled-components/native';

import { colors } from '../../styles'

export const Wrapper = styled.View`
    height: 50px;
    background-color: ${colors.primary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 15px;
`

export const Logo = styled.Image`
    height: 32px;
    width: 90px;
    margin-right:auto;
    margin-left:auto;

`; 