import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Body = styled.ScrollView`
    flex:1;
    background-color: ${colors.backgroundDark};
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

export const NameLabel = styled.Text`
    font-size: 20;
    color: #262626;
`;

export const LocationLabel = styled.Text`
    color: #999;
`;

export const DataLabel = styled.Text`
    text-align: center;
    font-size: 16;
    font-weight: bold;
    color: #262626;
`;

export const NumberLabel = styled.Text`
    font-size: 24;
    color: #262626; 
`;

export const SectionLabel = styled.Text`
    align-self: center;
    text-align: center;
    width:140px;
    font-size: 30px;
    padding-bottom: 3px;
    margin-bottom: 5px;
    border-bottom-width:2px
`;