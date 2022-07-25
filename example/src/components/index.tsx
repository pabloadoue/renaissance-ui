import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorMode, useTheme, View } from 'native-base';

import Header from './header';
import Home from './home';
import Inputs from './inputs';
import Modals from './modals';

const Drawer = createDrawerNavigator();

export default function Components(props: any) {
    const { setColorMode } = props;
    const { colorMode } = useColorMode();
    const { colors } = useTheme();
    const { width } = useWindowDimensions();
    const drawerBg = colorMode === 'light' ? colors.white : colors.gray5['500'];
    return (
        <View flex={1}>
            {width >= 768 ? <Header setColorMode={setColorMode} /> : null}
            <Drawer.Navigator
                screenOptions={{
                    drawerType: width >= 768 ? 'permanent' : 'front',
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: drawerBg,
                        width: width >= 768 ? 268 : '80%',
                    },
                }}
            >
                <Drawer.Screen name="home">
                    {(childProps) => (
                        <Home {...childProps} setColorMode={setColorMode} />
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="inputs">
                    {(childProps) => (
                        <Inputs {...childProps} setColorMode={setColorMode} />
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="modals">
                    {(childProps) => (
                        <Modals {...childProps} setColorMode={setColorMode} />
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
}
