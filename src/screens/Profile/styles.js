import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Body = styled.ScrollView`
    flex:1;
    background-color: ${colors.primaryDark};
`;

export const TopView = styled.View`
    align-items: center;
    padding-top: 30px;
    border-bottom-color:#999;
`;

export const AvatarView = styled.View`
    width: 100%;
    align-items: center;
`;
export const DataView = styled.View`
    width: 100%;
    padding:70px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.Text`
    color: ${colors.background};
`;
export const MidView = styled.View`
    flex:1;
    align-items:center;
    background-color: ${colors.background};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;

`;

export const CuponsView = styled.View`
    
    width: 100%;
    margin-top: 30px;
`;