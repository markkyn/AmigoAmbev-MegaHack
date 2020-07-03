import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Body = styled.View`
    flex:1;
    background-color: ${colors.background};
`;

export const TopView = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const AvatarView = styled.View`
    width: 100%;
    align-items: center;
`;
export const DataView = styled.View`
    width: 100%;
    padding: 0px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.Text`

`;