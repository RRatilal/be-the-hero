import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import {
    Container,
    Header,
    HeaderRight,
    HeaderRightButton,
    HeaderText,
    HeaderTextBold,
    Title,
    Description,
    DetailsButton,
    DetailsButtonText,
    Incident,
    IncidentList,
    IncidentProperty,
    IncidentValue,
    ThemeView
} from './styles';
import { actions } from '../../actions/themeActions';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const dispasth = useDispatch();

    const navigation = useNavigation();

    function navigateToDetails(incident) {
        navigation.navigate('Details', { incident })
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    function handleOpenMore() {
        return opacity === 0 ? setOpacity(1) : setOpacity(0);
    }

    useEffect(() => {
        // console.log(route)
        loadIncidents();
    }, [])

    return (
        < Container >
            <Header>
                <Image source={logoImg} />

                <HeaderRight>
                    <HeaderText>
                        Total de <HeaderTextBold >{total} casos</HeaderTextBold>
                    </HeaderText>
                    <HeaderRightButton
                        onPress={handleOpenMore}
                    >
                        <Feather name="more-vertical" size={18} color="#737380" />
                    </HeaderRightButton>
                    <ThemeView style={{ opacity }}>
                        <TouchableOpacity
                            onPress={() => dispasth({ type: 'TOGGLE_THEME' })}
                        >
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Theme</Text>
                        </TouchableOpacity>
                    </ThemeView>
                </HeaderRight>
            </Header>

            <Title>Bem-vindo!</Title>
            <Description>Escolha um dos casos abaixo e salve o dia</Description>

            <IncidentList
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <Incident>
                        <IncidentProperty>ONG:</IncidentProperty>
                        <IncidentValue>{incident.name}</IncidentValue>

                        <IncidentProperty>CASO:</IncidentProperty>
                        <IncidentValue>{incident.title}</IncidentValue>

                        <IncidentProperty>Valor:</IncidentProperty>
                        <IncidentValue>
                            {Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(incident.value)}
                        </IncidentValue>

                        <DetailsButton
                            onPress={() => navigateToDetails(incident)}
                        >
                            <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </DetailsButton>
                    </Incident>
                )}
            />
        </Container >
    );
}

