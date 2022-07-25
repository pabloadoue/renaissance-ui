import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HStack, Text, useColorMode, useTheme, View } from 'native-base';
import { UIButton } from 'renaissance-ui';

const Drawer = createDrawerNavigator();

export default function CustomDrawer(props: any) {
    const [title, setTitle] = useState('');

    const { setColorMode } = props;
    const { colorMode } = useColorMode();
    const { colors } = useTheme();
    const { width } = useWindowDimensions();
    const drawerBg = colorMode === 'light' ? colors.white : colors.gray5['500'];

    const content = () => {
        if (typeof props.children.map === 'function') {
            return props.children.map((child: any) => {
                return (
                    <Drawer.Screen
                        name={child.props.name}
                        key={child.props.name}
                    >
                        {(props) => (
                            <Screen
                                colorMode={colorMode}
                                setColorMode={setColorMode}
                                {...child.props}
                                {...props}
                                setTitle={setTitle}
                            >
                                {child.props.component(props)}
                            </Screen>
                        )}
                    </Drawer.Screen>
                );
            });
        } else {
            const child = props.children;
            return (
                <Drawer.Screen name={child.props.name}>
                    {(props) => (
                        <Screen
                            colorMode={colorMode}
                            setColorMode={setColorMode}
                            {...child.props}
                            {...props}
                            setTitle={setTitle}
                        >
                            {child.props.component(props)}
                        </Screen>
                    )}
                </Drawer.Screen>
            );
        }
    };

    return (
        <>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: width >= 768 ? 'permanent' : 'front',
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: drawerBg,
                        width: width >= 768 ? 268 : '80%',
                    },
                }}
            >
                {content()}
            </Drawer.Navigator>
            {width >= 768 ? (
                <Header
                    title={title}
                    setColorMode={setColorMode}
                    colorMode={colorMode}
                />
            ) : null}
        </>
    );
}

const Header = (props: any) => {
    const { title, setColorMode, colorMode, openDrawer } = props;

    return (
        <View
            width="100%"
            position="absolute"
            _dark={{ bg: 'gray5.500' }}
            _light={{ bg: 'white' }}
            paddingX={4}
            shadow={1}
        >
            <SafeAreaView edges={['top']}>
                <HStack
                    width="100%"
                    space={2}
                    style={{
                        height: 60,
                    }}
                >
                    {typeof openDrawer === 'function' ? (
                        <View justifyContent="center" alignItems={'flex-start'}>
                            <UIButton
                                icon="123"
                                color={'gray'}
                                size={'lg'}
                                onPress={() => {
                                    openDrawer();
                                }}
                            />
                        </View>
                    ) : null}
                    <View
                        flex={6}
                        justifyContent="center"
                        alignItems={'flex-start'}
                    >
                        <Text fontSize={'lg'} fontWeight={'regular'}>
                            {title}
                        </Text>
                    </View>
                    <View
                        flex={3}
                        justifyContent="center"
                        alignItems={'flex-end'}
                    >
                        <UIButton
                            icon="123"
                            size="lg"
                            color="gray"
                            onPress={() => {
                                if (colorMode === 'light') {
                                    setColorMode('dark');
                                } else {
                                    setColorMode('light');
                                }
                            }}
                        />
                    </View>
                </HStack>
            </SafeAreaView>
        </View>
    );
};

const Screen = (props: any) => {
    const { width } = useWindowDimensions();
    const { navigation, options, setTitle, setColorMode, colorMode } = props;
    const { title } = options;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setTitle(title);
        });

        return unsubscribe;
    }, [navigation, setTitle, title]);

    return (
        <>
            <View height="100%" width="100%">
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        paddingTop: 80,
                        paddingBottom: 40,
                    }}
                    extraHeight={200}
                >
                    <SafeAreaView
                        edges={['top', 'bottom']}
                        style={{ width: '100%' }}
                    >
                        {props.children}
                    </SafeAreaView>
                </KeyboardAwareScrollView>
            </View>
            {width < 768 ? (
                <Header
                    title={title}
                    openDrawer={navigation.openDrawer}
                    setColorMode={setColorMode}
                    colorMode={colorMode}
                />
            ) : null}
        </>
    );
};

export const DrawerScreen = Drawer.Screen;
