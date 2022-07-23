import 'react-native-gesture-handler';

import React, { useState } from 'react';
import {
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
    useFonts,
} from '@expo-google-fonts/lato';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'native-base';
import {
    RenaissanceProvider,
    TRenaissanceProviderPallete,
} from 'renaissance-ui';

export default function App() {
    const [fontsLoaded] = useFonts({
        Lato_100Thin_Italic,
        Lato_100Thin,
        Lato_300Light_Italic,
        Lato_300Light,
        Lato_400Regular_Italic,
        Lato_400Regular,
        Lato_700Bold_Italic,
        Lato_700Bold,
        Lato_900Black_Italic,
        Lato_900Black,
    });
    const [colorMode] = useState<'light' | 'dark'>('light');
    const [pallete] = useState<TRenaissanceProviderPallete>({
        primary: {
            light: '#c40000',
            dark: '#c40000',
        },
        accent: {
            light: 'rgb(255,204,0)',
            dark: 'rgb(255,204,0)',
        },
    });
    const fonts = {
        fontConfig: {
            Lato: {
                100: {
                    normal: 'Lato_100',
                    italic: 'Lato_100Italic',
                },
                200: {
                    normal: 'Lato_100',
                    italic: 'Lato_100Italic',
                },
                300: {
                    normal: 'Lato_300Light',
                    italic: 'Lato_300LightItalic',
                },
                400: {
                    normal: 'Lato_400Regular',
                    italic: 'Lato_400RegularItalic',
                },
                500: {
                    normal: 'Lato_400Regular',
                    italic: 'Lato_400RegularItalic',
                },
                600: {
                    normal: 'Lato_700Bold',
                    italic: 'Lato_700BoldItalic',
                },
                700: {
                    normal: 'Lato_700Bold',
                    italic: 'Lato_700BoldItalic',
                },
                800: {
                    normal: 'Lato_900Black',
                    italic: 'Lato_900BlackItalic',
                },
                900: {
                    normal: 'Lato_900Black',
                    italic: 'Lato_900BlackItalic',
                },
            },
        },
        fonts: {
            heading: 'Lato',
            body: 'Lato',
            mono: 'Lato',
        },
    };

    if (fontsLoaded) {
        return (
            <RenaissanceProvider
                colorMode={colorMode}
                pallete={pallete}
                fonts={fonts}
            >
                <StatusBar style={colorMode === 'light' ? 'dark' : 'light'} />
                <Text>Hello World</Text>
            </RenaissanceProvider>
        );
    }

    return null;
}
