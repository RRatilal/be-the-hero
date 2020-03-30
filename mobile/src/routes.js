import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import dark from './themes/dark';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Details from './pages/Details';

import { store } from './store'

export default function Routes() {
    const theme = useSelector(state => state.themeReducers.theme);

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>

                <AppStack.Navigator screenOptions={{ headerShown: false }} >
                    <AppStack.Screen name="Incidents" component={Incidents} />
                    <AppStack.Screen name="Details" component={Details} />
                </AppStack.Navigator>

            </NavigationContainer>
        </ThemeProvider>
    );
}