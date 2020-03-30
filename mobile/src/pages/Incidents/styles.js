import styled from 'styled-components/native';
import Constants from 'expo-constants';

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

export const HeaderText = styled.Text`
    font-size: 15px;
    color: ${props => props.theme.colors.normalText};
`;

export const HeaderRight = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between
`;

export const HeaderRightButton = styled.TouchableOpacity`
    margin-left: 8px
`;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    color: ${props => props.theme.colors.title};
    font-weight: bold;
`

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.normalText};
`

export const IncidentList = styled.FlatList`
    margin-top: 32px;
`

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.incidentBackground};
    margin-bottom: 16px
`

export const IncidentProperty = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.property};
    font-weight: bold;
`

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.normalText};
`

export const DetailsButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DetailsButtonText = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold
`;

export const ThemeView = styled.View`
    width: 60px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    right: 8px;
    top: 24px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    justify-content: center;
    align-items: center;
    elevation: 3;
`;