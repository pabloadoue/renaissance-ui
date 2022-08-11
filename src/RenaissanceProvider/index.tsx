import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, useColorMode, View } from 'native-base';

import { AppErrorContext, AppErrorProvider } from './appError';
import theme from './theme';

export function RenaissanceProvider(props: TRenaissanceProviderProps) {
    const { colorMode } = props;
    const { width, height } = useWindowDimensions();

    const lightTheme = theme('light', props.pallete, props.fonts);
    const darkTheme = theme('dark', props.pallete, props.fonts);

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
                    <AppErrorProvider>
                        <View bg={'gray6.500'} height={height} width={width}>
                            {props.children}
                        </View>
                    </AppErrorProvider>
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

export { AppErrorContext };
