import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Text, useColorMode, View } from 'native-base';
const Drawer = createDrawerNavigator();

import { TUIListProps, UIList } from '../UIList';

export const UIListDetailViewLayout = (props: TUIListDetailViewLayoutProps) => {
    const { width } = useWindowDimensions();

    return (
        <>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    swipeEnabled: true,
                    lazy: false,
                    drawerType: width >= 768 ? 'permanent' : 'back',
                    drawerStyle: {
                        backgroundColor: 'transparent',
                        borderRightWidth: 0,
                        width: width >= 768 ? 380 : width,
                    },
                }}
                // eslint-disable-next-line react/no-unstable-nested-components
                drawerContent={(drawerProps) => {
                    return <DrawerContent {...props} {...drawerProps} />;
                }}
                defaultStatus={'open'}
            >
                <Drawer.Screen name={'detail'} options={{ swipeEnabled: true }}>
                    {(screenProps) => {
                        if (props.selected) {
                            const { navigation } = screenProps;
                            return props.detail({
                                ...screenProps,
                                selected: props.selected,
                                back: () => {
                                    props.select(null);
                                    navigation.openDrawer();
                                },
                            });
                        } else {
                            return (
                                <View
                                    flex={1}
                                    padding={4}
                                    justifyContent="center"
                                    alignItems={'center'}
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight="bold"
                                        color="gray.500"
                                    >
                                        {props.emptyMessage}
                                    </Text>
                                </View>
                            );
                        }
                    }}
                </Drawer.Screen>
            </Drawer.Navigator>
        </>
    );
};

const DrawerContent = (props: IDrawerContentProps) => {
    const { width } = useWindowDimensions();
    const { colorMode } = useColorMode();

    const borderLeftRadius = useMemo(() => {
        if (width >= 768) {
            return 8;
        }
        return 0;
    }, [width]);

    return (
        <UIList
            title={props.title}
            left={props.left}
            borderLeftRadius={borderLeftRadius}
            results={props.results}
            items={props.items}
            select={(id) => {
                props.navigation.closeDrawer();
                props.select(id);
            }}
            right={props.right}
            color={colorMode === 'light' ? 'black' : 'white'}
            bg={
                width < 768
                    ? {
                          light: 'white',
                          dark: 'gray5.500',
                      }
                    : {
                          light: 'white',
                          dark: 'gray5.500',
                      }
            }
            selected={props.selected}
        />
    );
};

interface IDrawerContentProps
    extends DrawerContentComponentProps,
        TUIListDetailViewLayoutProps {}

export interface TUIListDetailViewLayoutProps extends TUIListProps {
    emptyMessage: string;
    detail: (props: any) => JSX.Element;
}
