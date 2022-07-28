import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { LinkingOptions } from '@react-navigation/native';
import { NativeBaseProvider, useColorMode } from 'native-base';

import Navigator from './navigator';
import theme from './theme';

export function RenaissanceProvider(props: TRenaissanceProviderProps) {
    const { colorMode } = props;

    const lightTheme = theme('light', props.pallete, props.fonts);
    const darkTheme = theme('dark', props.pallete, props.fonts);

    //console.log(lightTheme.components.IconButton.sizes);

    const getTheme = (mode: 'light' | 'dark' | null | undefined) => {
        if (mode === 'dark') {
            return darkTheme;
        } else {
            return lightTheme;
        }
    };

    return (
        <NativeBaseProvider theme={getTheme(colorMode)}>
            <ColorModeProvider colorMode={colorMode}>
                <SafeAreaProvider>
                    <Navigator linking={props.linking}>
                        {props.children}
                    </Navigator>
                </SafeAreaProvider>
            </ColorModeProvider>
        </NativeBaseProvider>
    );
}

const ColorModeProvider = (props: {
    colorMode: 'light' | 'dark';
    children: JSX.Element | JSX.Element[];
}) => {
    const { setColorMode } = useColorMode();
    const { colorMode } = props;

    useEffect(() => {
        setColorMode(colorMode);
    }, [colorMode, setColorMode]);

    return <>{props.children}</>;
};

RenaissanceProvider.defaultProps = {
    pallete: {
        primary: {
            light: '#c40000',
            dark: '#c40000',
        },
        accent: {
            light: 'rgb(255,204,0)',
            dark: 'rgb(255,204,0)',
        },
    },
};

export type TRenaissanceProviderProps = {
    children: React.ReactNode;
    colorMode: 'light' | 'dark';
    pallete: TRenaissanceProviderPallete;
    linking?: LinkingOptions<any>;
    fonts?: any;
};

export type TRenaissanceProviderPallete = {
    primary: {
        light: string;
        dark: string;
    };
    accent: {
        light: string;
        dark: string;
    };
};
