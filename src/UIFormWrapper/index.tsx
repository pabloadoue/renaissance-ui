import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { useTheme } from 'native-base';

import SelectOptions from './SelectOptions';

export function UIFormWrapper(props: TUIFormWrapperProps) {
    //const { colorMode } = useColorMode();
    const { colors } = useTheme();

    const primary = colors.primary['500'];
    //const bg = colorMode === "dark" ? colors.gray5["500"] : colors.white;
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: primary,
            background: 'transparent',
            border: 'transparent',
        },
    };

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Form">
                    {() => {
                        return <>{props.children}</>;
                    }}
                </Stack.Screen>
                <Stack.Screen name="SelectOptions" component={SelectOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

type TUIFormWrapperProps = {
    children: JSX.Element | JSX.Element[];
};
