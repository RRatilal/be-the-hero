import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import {
    Container,
    ContentBox,
    Header,
    Incident,
    IncidentProperty,
    IncidentValue,
    Action,
    ActionText,
    Actions,
    HeroDescription,
    HeroTitle
} from './styles';

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contacto pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(incident.value)}`;

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function senWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <Container>
            <Header>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </Header>

            <Incident>
                <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
                <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title}</IncidentValue>

                <IncidentProperty>DESCRICAO:</IncidentProperty>
                <IncidentValue>{incident.description}</IncidentValue>

                <IncidentProperty>Valor:</IncidentProperty>
                <IncidentValue>
                    {Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(incident.value)}
                </IncidentValue>
            </Incident>

            <ContentBox>
                <HeroTitle>Salve o dia!</HeroTitle>
                <HeroTitle>Seja o heroi desse caso.</HeroTitle>

                <HeroDescription>Entre em contacto:</HeroDescription>

                <Actions>
                    <Action onPress={senWhatsapp}>
                        <ActionText>WhatsApp</ActionText>
                    </Action>

                    <Action onPress={sendMail}>
                        <ActionText>E-mail</ActionText>
                    </Action>
                </Actions>
            </ContentBox>
        </Container>
    );
}
