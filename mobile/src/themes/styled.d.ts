import styled from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            normalText: string,
            title: string,
            property: string,
            button: string,
            background: string,
            incidentBackground: string
        }
    }
}