import React from 'react';
import { UIDrawerLayout, UIDrawerLayoutScreen, UIIcon } from 'renaissance-ui';

import Screen from './screen';

export default function DrawerView(_props: any) {
    return (
        <UIDrawerLayout
            title={'Drawer View'}
            user={{
                name: 'Pablo',
                lastName: 'Adoue',
            }}
        >
            <UIDrawerLayoutScreen
                name={'screen1'}
                component={Screen}
                options={{
                    title: 'Screen 1',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="anchor" color={color} size={size} />
                    ),
                }}
            />
            <UIDrawerLayoutScreen
                name={'screen2'}
                component={Screen}
                options={{
                    title: 'Screen 2',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="commit" color={color} size={size} />
                    ),
                }}
            />
            <UIDrawerLayoutScreen
                name={'screen3'}
                component={Screen}
                options={{
                    title: 'Screen 3',
                    drawerIcon: ({ color, size }) => (
                        <UIIcon name="event" color={color} size={size} />
                    ),
                }}
            />
        </UIDrawerLayout>
    );
}
