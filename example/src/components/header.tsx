import React from 'react';
import { useColorMode, View } from 'native-base';
import { UIHeader } from 'renaissance-ui';

export default function Header(props: any) {
    const { colorMode } = useColorMode();
    let left = {};
    if (typeof props.navigation?.openDrawer === 'function') {
        left = {
            icon: 'menu',
            color: 'gray',
            press: () => {
                props.navigation?.openDrawer();
            },
        };
    }

    return (
        <View width="100%" position="absolute" zIndex={1000}>
            <UIHeader
                title={props.title}
                left={left}
                bg={{
                    dark: 'gray5.500',
                    light: 'white',
                }}
                shadow={true}
                right={[
                    {
                        icon: 'lightbulb',
                        color: 'gray',
                        tooltip: 'Toggle Darkmode',
                        press: () => {
                            if (colorMode === 'light') {
                                props.setColorMode('dark');
                            } else {
                                props.setColorMode('light');
                            }
                        },
                    },
                ]}
            />
        </View>
    );
}
