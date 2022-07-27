import React, { useEffect, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    FlatList,
    HStack,
    Pressable,
    Text,
    useColorMode,
    useTheme,
    View,
} from 'native-base';
import { TUIIconName, UIIcon } from 'renaissance-ui';

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
    const [title, setTitle] = useState('');
    const drawerBg = colorMode === 'light' ? colors.white : colors.gray5['500'];
    return (
        <View flex={1}>
            {width >= 768 ? (
                <Header title={title} setColorMode={setColorMode} />
            ) : null}
            <Drawer.Navigator
                screenOptions={{
                    drawerType: width >= 768 ? 'permanent' : 'front',
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: drawerBg,
                        width: width >= 768 ? 268 : '80%',
                    },
                }}
                drawerContent={(props) => (
                    <DrawerContent {...props} setTitle={setTitle} />
                )}
            >
                <Drawer.Screen name="home">
                    {(childProps) => (
                        <Home
                            {...childProps}
                            title={title}
                            setColorMode={setColorMode}
                        />
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="inputs">
                    {(childProps) => (
                        <Inputs
                            {...childProps}
                            title={title}
                            setColorMode={setColorMode}
                        />
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="modals">
                    {(childProps) => (
                        <Modals
                            {...childProps}
                            title={title}
                            setColorMode={setColorMode}
                        />
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
}

const DrawerContent = (props: any) => {
    const [active, setActive] = useState('');
    const { width } = useWindowDimensions();
    const { setTitle } = props;

    useEffect(() => {
        Object.keys(props.descriptors).map((key) => {
            const screen = props.descriptors[key];
            const { route, navigation } = screen;
            const { name } = route;
            const isActive = navigation.isFocused();

            if (isActive) {
                setActive(name);
            }
        });
    }, [props.descriptors, setActive]);

    /*const screens: TDrawerItemProps[] = [
        {
            label: 'Home',
            screen: 'home',
            icon: 'home',
            navigation: '',
            active: false,
        },
        {
            label: 'Modals',
            screen: 'modals',
            icon: 'open-in-browser',
            navigation: '',
            active: false,
        },
        {
            label: 'Drawer View',
            screen: 'drawerView',
            icon: 'view-sidebar',
            navigation: '',
            active: false,
        },
    ];*/

    const screens: TDrawerItemProps[] = useMemo(() => {
        return [
            {
                label: 'Home',
                screen: 'home',
                icon: 'home',
                navigation: '',
                active: false,
            },
            {
                label: 'Modals',
                screen: 'modals',
                icon: 'open-in-browser',
                navigation: '',
                active: false,
            },
            {
                label: 'Drawer View',
                screen: 'drawerView',
                icon: 'view-sidebar',
                navigation: '',
                active: false,
            },
        ];
    }, []);

    useEffect(() => {
        screens.map((screen) => {
            if (screen.screen === active) {
                setTitle(screen.label);
            }
        });
    }, [active, setTitle, screens]);

    return (
        <SafeAreaView>
            <FlatList
                data={screens}
                keyExtractor={(item) => item.screen}
                contentContainerStyle={{
                    paddingVertical: width >= 768 ? 80 : 20,
                }}
                renderItem={({ item }) => {
                    const isActive = item.screen === active;
                    return (
                        <DrawerItem
                            {...item}
                            active={isActive}
                            navigation={props.navigation}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );
};

const DrawerItem = (props: TDrawerItemProps) => {
    return (
        <Pressable
            paddingX={4}
            width="100%"
            onPress={() => {
                props.navigation.navigate(props.screen);
            }}
        >
            {(params) => {
                const { isPressed, isHovered } = params;
                return (
                    <View
                        opacity={isPressed ? 0.5 : 1}
                        width="100%"
                        _light={{
                            bg: props.active
                                ? 'primary.50'
                                : isHovered
                                ? 'gray6.500'
                                : 'transparent',
                        }}
                        paddingX={4}
                        paddingY={2}
                        borderRadius={8}
                        marginY={1}
                    >
                        <HStack width="100%" space={3} alignItems="center">
                            <View>
                                <UIIcon name={props.icon} size={'md'} />
                            </View>
                            <View flex={1}>
                                <Text fontSize={16}>{props.label}</Text>
                            </View>
                        </HStack>
                    </View>
                );
            }}
        </Pressable>
    );
};

type TDrawerItemProps = {
    label: string;
    screen: string;
    icon: TUIIconName;
    active: boolean;
    navigation: any;
};
