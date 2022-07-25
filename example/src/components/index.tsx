import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { useColorMode, useTheme } from 'native-base';

import Home from './home';
import Inputs from './inputs';

const Drawer = createDrawerNavigator();

export default function Components(_props: any) {
    const { colorMode } = useColorMode();
    const { colors } = useTheme();
    const { width } = useWindowDimensions();
    const drawerBg = colorMode === "light" ? colors.white : colors.gray5["500"];
    return <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? "permanent" : "front",
            headerShown: false,
            drawerStyle: {
                backgroundColor: drawerBg,
                width: width >= 768 ? 268 : "80%"
            }
        }}
    >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="inputs" component={Inputs} />
    </Drawer.Navigator>
}
