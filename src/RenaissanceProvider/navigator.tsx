import React from 'react';
import {
    DefaultTheme,
    LinkingOptions,
    NavigationContainer,
    NavigationContainerProps,
} from '@react-navigation/native';
import { useTheme } from 'native-base';

export default function Navigator(props: TNavigatorProps) {
    const { colors } = useTheme();

    const primary = colors.primary['500'];
    const bg = colors.gray6['500'];

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: primary,
            background: bg,
            border: 'transparent',
        },
    };

    return (
        <NavigationContainer theme={theme} linking={props.linking}>
            {props.children}
        </NavigationContainer>
    );
}

interface TNavigatorProps extends NavigationContainerProps {
    linking?: LinkingOptions<any>;
}
