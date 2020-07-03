import styled from "styled-components/native";

import { colors } from '../../styles';

export const LogoView = styled.View`
    flex:0.7;
    justify-content:flex-end;
    align-items: center;
    background-color: ${colors.background};
`;

export const LogoImg = styled.Image`
    width: 288px;
    height: 192px;
`;

export const MainView = styled.View`
    flex:1;
    padding: 30px 30px;
    background-color: ${colors.primary};
`;
export const Label = styled.Text`
    font-size: 18px;
    font-weight:bold;
    color: ${colors.background};
`;

export const InputView = styled.View`
    margin-top: 10px;
`;
export const BottomView = styled.View`
`;