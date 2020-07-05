import styled from 'styled-components/native';

import { colors } from '../../styles';

export const TopView = styled.View`
    height: 270px;
    flex-direction:row;
    background-color: ${colors.primaryDark};
    padding: 30px;
    padding-top: 0px;
`;

export const Beer = styled.Image`
    height: 300px;
    width: 90px;
    position:relative;
    top:30px;
    z-index:5;
`;
export const Logo = styled.Image`
    height: 47px;
    width: 117px;
    margin-bottom: 30px;
`;


export const TextView = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30px;
`;

export const DescriptionL = styled.Text`
    color: #f1f1f1;
    margin-right: 30px;
`;

export const DescriptionR = styled.Text`
    color: #f1f1f1;
    text-align: right;
`;

export const MidView = styled.View`

`;