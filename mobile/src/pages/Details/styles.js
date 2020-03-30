import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
    background-color: ${props => props.theme.colors.background}
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`;

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.incidentBackground};
    margin-bottom: 16px;
    margin-top: 48px
`
export const IncidentProperty = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.property};
    font-weight: bold;
    margin-top: 24px;
`

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    color: ${props => props.theme.colors.normalText};
`

export const ContentBox = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color:${props => props.theme.colors.incidentBackground};
    margin-bottom: 16px;
`

export const HeroTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.title};
    line-height: 30px
`

export const HeroDescription = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.normalText};
    margin-top: 16px;
`

export const Actions = styled.View`
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
`

export const Action = styled.TouchableOpacity`
    background-color: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items: center;
`

export const ActionText = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`