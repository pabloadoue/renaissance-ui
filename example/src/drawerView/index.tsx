import React from 'react';
import { useColorMode } from 'native-base';
import { UIDrawerLayout, UIDrawerLayoutScreen, UIIcon } from 'renaissance-ui';

import Screen from './screen';

export default function DrawerView(props: any) {
    const { colorMode } = useColorMode();
    return (
        <UIDrawerLayout
            title={'Drawer View'}
            user={{
                name: 'Pablo',
                lastName: 'Adoue',
            }}
            toggleColorMode={() => {
                if (colorMode === 'light') {
                    props.setColorMode('dark');
                } else {
                    props.setColorMode('light');
                }
            }}
        >
            <UIDrawerLayoutScreen
                name={'screen1'}
                options={{
                    title: 'Screen 1',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="anchor" color={color} size={size} />
                    ),
                }}
            >
                {(screenProps) => <Screen {...props} {...screenProps} />}
            </UIDrawerLayoutScreen>
            <UIDrawerLayoutScreen
                name={'screen2'}
                options={{
                    title: 'Screen 2',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="commit" color={color} size={size} />
                    ),
                }}
            >
                {(screenProps) => <Screen {...props} {...screenProps} />}
            </UIDrawerLayoutScreen>
            <UIDrawerLayoutScreen
                name={'screen3'}
                options={{
                    title: 'Screen 3',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="event" color={color} size={size} />
                    ),
                }}
            >
                {(screenProps) => <Screen {...props} {...screenProps} />}
            </UIDrawerLayoutScreen>
        </UIDrawerLayout>
    );
}
