import React, { ReactNode, useMemo, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import findValue from '@pabloadoue/find-value';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import {
    Button,
    FlatList,
    Text,
    useColorMode,
    useTheme,
    View,
} from 'native-base';

import { TUIAvatarProps, UIAvatar } from './UIAvatar';
import { UIButton } from './UIButton';
import { UIHeader } from './UIHeader';
import { TUIIconName, UIIcon } from './UIIcon';

const Drawer = createDrawerNavigator();
const { Screen } = Drawer;

export const UIDrawerLayout = (props: TUIDrawerLayoutProps) => {
    const { width, height } = useWindowDimensions();
    const { colors } = useTheme();
    const { colorMode } = useColorMode();
    const drawerBg =
        colorMode === 'light'
            ? width >= 768
                ? colors.primary['500']
                : colors.white
            : colors.gray4['500'];
    const [drawerWidth, setDrawerWidth] = useState(width >= 768 ? 74 : width);

    const toggleDrawerWidth = () => {
        if (width >= 768) {
            if (drawerWidth === 68) {
                setDrawerWidth(268);
            } else {
                setDrawerWidth(68);
            }
        }
    };

    return (
        <View height={height} width={width}>
            {width >= 768 ? (
                <>
                    <StatusBar style={'light'} />
                    <SafeAreaView
                        edges={['top']}
                        style={{ backgroundColor: drawerBg }}
                    />
                </>
            ) : null}
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    swipeEnabled: true,
                    lazy: true,
                    drawerType: width >= 768 ? 'permanent' : 'back',
                    drawerStyle: {
                        backgroundColor: drawerBg,
                        width: drawerWidth,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
                // eslint-disable-next-line react/no-unstable-nested-components
                drawerContent={(drawerProps) => (
                    <DrawerContent
                        {...props}
                        drawerWidth={drawerWidth}
                        toggleDrawerWidth={toggleDrawerWidth}
                        toggleColorMode={props.toggleColorMode}
                        {...drawerProps}
                    />
                )}
            >
                {props.children}
            </Drawer.Navigator>
        </View>
    );
};

const DrawerContent = (props: IDrawerContentProps) => {
    const { descriptors, navigation, drawerWidth } = props;
    const { width } = useWindowDimensions();
    const { colorMode } = useColorMode();

    const screens = useMemo(() => {
        const result: TDrawerItemProps[] = [];
        Object.keys(descriptors).map((key) => {
            const screen = descriptors[key];
            if (typeof screen !== 'undefined') {
                const { options, route } = screen;
                const { title, drawerIcon } = options;
                const { name } = route;
                const active = screen.navigation.isFocused();
                if (
                    typeof title !== 'undefined' &&
                    typeof drawerIcon !== 'undefined'
                ) {
                    result.push({
                        title: title,
                        name: name,
                        navigation: screen.navigation,
                        active: active,
                        drawerIcon: drawerIcon,
                        drawerWidth: drawerWidth,
                    });
                }
            }
        });
        return result;
    }, [descriptors, drawerWidth]);

    return (
        <View flex={1}>
            <View flex={1}>
                <View
                    paddingX={drawerWidth < 100 ? 2 : 0}
                    paddingY={drawerWidth < 100 ? 2 : 0}
                >
                    {drawerWidth < 100 ? (
                        <UIButton
                            icon={'apps'}
                            color={'white'}
                            tooltip={'Inicio'}
                            size={'xl'}
                            onPress={() => {
                                navigation.navigate('home');
                            }}
                        />
                    ) : (
                        <UIHeader
                            type="center"
                            safeArea={width < 768}
                            title={props.title}
                            color={colorMode === 'light' ? 'black' : 'white'}
                            shadow={true}
                            bg={{
                                dark: 'gray4.500',
                                light: 'white',
                            }}
                            left={{
                                icon: 'apps',
                                color:
                                    colorMode === 'light'
                                        ? 'primary'
                                        : 'primary',
                                press: () => {
                                    navigation.navigate('home');
                                },
                            }}
                        />
                    )}
                </View>
                <FlatList
                    flex={1}
                    data={screens}
                    renderItem={({ item }) => {
                        return <DrawerItem {...item} />;
                    }}
                    paddingX={drawerWidth < 100 ? 2 : 4}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={
                        drawerWidth < 100
                            ? styles.drawerContentSmall
                            : styles.drawerContentLarge
                    }
                />
                <View paddingX={drawerWidth < 100 ? 2 : 2}>
                    {typeof props.toggleColorMode === 'function' && (
                        <DrawerItem
                            title={'Toogle Color Mode'}
                            name="toggle-color-mode"
                            // eslint-disable-next-line react/no-unstable-nested-components
                            drawerIcon={() => <UIIcon name="lightbulb" />}
                            drawerWidth={drawerWidth}
                            navigation={navigation}
                            active={false}
                            onPress={() => {
                                if (
                                    typeof props.toggleColorMode === 'function'
                                ) {
                                    props.toggleColorMode();
                                }
                            }}
                        />
                    )}
                    {drawerWidth < 100 ? (
                        <Button
                            variant={'ghost'}
                            colorScheme="white"
                            size={'lg'}
                        >
                            <UIAvatar {...props.user} size={'sm'} />
                        </Button>
                    ) : (
                        <Button
                            variant={'ghost'}
                            leftIcon={<UIAvatar {...props.user} size={'sm'} />}
                            _text={{
                                marginLeft: 2,
                            }}
                            colorScheme="black"
                            size={'lg'}
                            justifyContent={'flex-start'}
                        >
                            Pablo Adoue Peralta
                        </Button>
                    )}
                    <SafeAreaView edges={['bottom']} />
                </View>
            </View>
        </View>
    );
};

const DrawerItem = (props: TDrawerItemProps) => {
    const { active, drawerWidth } = props;

    if (typeof props.drawerIcon === 'function') {
        const icon = props.drawerIcon({
            color: 'white',
            size: 6,
            focused: false,
        });

        const iconName: TUIIconName | null =
            //@ts-ignore
            findValue(icon, 'props.name') || null;
        if (iconName) {
            if (drawerWidth < 100) {
                return (
                    <View marginY={2} width={'100%'}>
                        <UIButton
                            icon={iconName}
                            color={'white'}
                            hovered={active}
                            tooltip={props.title}
                            size={'xl'}
                            onPress={() => {
                                if (typeof props.onPress === 'function') {
                                    props.onPress();
                                } else {
                                    props.navigation.navigate(props.name);
                                }
                            }}
                        />
                        <Text
                            color={'white'}
                            fontSize={10}
                            numberOfLines={1}
                            alignSelf={'center'}
                        >
                            {props.title}
                        </Text>
                    </View>
                );
            } else {
                return (
                    <UIButton
                        color={'black'}
                        hovered={active}
                        align={'left'}
                        size={'xl'}
                        label={props.title}
                        leftIcon={iconName}
                        onPress={() => {
                            if (typeof props.onPress === 'function') {
                                props.onPress();
                            } else {
                                props.navigation.navigate(props.name);
                            }
                        }}
                    />
                );
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
};

export const UIDrawerLayoutScreenWrapper = (props: any) => {
    const { width } = useWindowDimensions();
    const { colors } = useTheme();
    const { colorMode } = useColorMode();
    const drawerBg =
        colorMode === 'light'
            ? width >= 768
                ? colors.primary['500']
                : colors.white
            : colors.gray4['500'];

    const children = () => {
        if (typeof props.children !== 'undefined') {
            if (React.isValidElement(props.children)) {
                return React.cloneElement(props.children, {
                    ...props,
                });
            }
        }
        return null;
    };

    return (
        <View width="100%" height="100%" bg={drawerBg}>
            <View
                width="100%"
                height="100%"
                borderLeftRadius={8}
                bg="gray6.500"
            >
                {children()}
            </View>
        </View>
    );
};

export const UIDrawerLayoutScreen = Screen;

type TUIDrawerLayoutUser = {
    name: TUIAvatarProps['name'];
    lastName: TUIAvatarProps['lastName'];
};

interface IDrawerContentProps extends DrawerContentComponentProps {
    title: string;
    user: TUIDrawerLayoutUser;
    toggleDrawerWidth: () => void;
    drawerWidth: number;
    toggleColorMode?: () => void;
}

export interface TUIDrawerLayoutProps {
    title: string;
    user: TUIDrawerLayoutUser;
    children: JSX.Element | JSX.Element[];
    toggleColorMode?: () => void;
}

type TDrawerItemProps = {
    title: string;
    name: string;
    navigation: any;
    active: boolean;
    drawerIcon:
        | ((props: {
              color: string;
              size: number;
              focused: boolean;
          }) => ReactNode)
        | (() => JSX.Element)
        | undefined;
    onPress?: () => void;
    drawerWidth: number;
};

const styles = StyleSheet.create({
    drawerContentSmall: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    drawerContentLarge: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingTop: 14,
    },
});