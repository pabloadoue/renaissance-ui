import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Spinner, View, VStack } from 'native-base';
import {
    RenaissanceProvider,
    TRenaissanceProviderPallete,
} from 'renaissance-ui';

const Stack = createNativeStackNavigator();

import Components from './components';
import DrawerView from './drawerView';
import Linking from './linking';
import ListDetailView from './listDetailView';
import Logo from './Logo';

export default function App() {
    const colorScheme = useColorScheme();
    const [loading, setLoading] = useState(true);
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
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
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

    const load = useCallback(async () => {
        try {
            const savedColorMode: string | null = await AsyncStorage.getItem(
                'colorMode'
            );
            if (
                (savedColorMode && savedColorMode === 'dark') ||
                savedColorMode === 'light'
            ) {
                setColorMode(savedColorMode);
            } else {
                await AsyncStorage.setItem('colorMode', 'light');
                setColorMode('light');
            }
        } catch (error) {
            throw error;
        }
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            load()
                .then(() => {
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [fontsLoaded, setLoading, load]);

    const switchColorMode = (newColorMode: 'light' | 'dark') => {
        AsyncStorage.setItem('colorMode', newColorMode)
            .then(() => {
                setColorMode(newColorMode);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (loading) {
        return (
            <RenaissanceProvider
                colorMode={colorScheme === 'dark' ? 'dark' : 'light'}
                pallete={pallete}
                fonts={fonts}
                linking={Linking()}
            >
                <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
                <VStack
                    flex={1}
                    justifyContent="center"
                    alignItems={'center'}
                    bg={'gray6.500'}
                >
                    <Logo
                        color={
                            colorScheme === 'light' ? 'primary.500' : 'white'
                        }
                        size={25}
                    />
                    <View marginTop={4}>
                        <Spinner
                            color={
                                colorScheme === 'light' ? 'gray.500' : 'white'
                            }
                        />
                    </View>
                </VStack>
            </RenaissanceProvider>
        );
    } else {
        return (
            <RenaissanceProvider
                colorMode={colorMode}
                pallete={pallete}
                linking={Linking()}
            >
                <StatusBar style={colorMode === 'light' ? 'dark' : 'light'} />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                >
                    <Stack.Screen name="components">
                        {(props) => (
                            <Components
                                {...props}
                                setColorMode={switchColorMode}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="drawerView">
                        {(props) => (
                            <DrawerView
                                {...props}
                                setColorMode={switchColorMode}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="listDetailView">
                        {(props) => (
                            <ListDetailView
                                {...props}
                                setColorMode={switchColorMode}
                            />
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </RenaissanceProvider>
        );
    }
}
