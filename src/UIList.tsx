import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

import { useWindowDimensions } from 'react-native';
import {
    FlatList,
    HStack,
    Pressable,
    Spinner,
    Text,
    useTheme,
    View,
} from 'native-base';

import { TUIAvatarProps, UIAvatar } from './UIAvatar';
import {
    TUIHeaderControllDefinition,
    TUIHeaderProps,
    UIHeader,
} from './UIHeader';
import { TUIIconName, UIIcon } from './UIIcon';

export const UIList = (props: TUIListProps) => {
    const { colors } = useTheme();

    const primary = colors.primary['500'];
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: primary,
            background: 'transparent',
            border: 'transparent',
        },
    };

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Tab.Navigator
                tabBar={() => null}
                initialRouteName="list"
                screenOptions={{
                    swipeEnabled: false,
                }}
            >
                <Tab.Screen name="list">
                    {(screenProps) => <ListView {...props} {...screenProps} />}
                </Tab.Screen>

                <Tab.Screen name="search">
                    {(screenProps) => (
                        <SearchView {...props} {...screenProps} />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const ListView = (props: any) => {
    const { navigation } = props;
    const [shadow, setShadow] = useState(false);

    const { width } = useWindowDimensions();
    const headerSafeArea = useMemo(() => {
        return width < 768;
    }, [width]);

    const headerControls = useMemo(() => {
        const controls: TUIHeaderControllDefinition[] = [];
        if (typeof props.results !== 'undefined') {
            controls.push({
                icon: 'search',
                tooltip: 'Buscar',
                color: 'gray',
                press: () => {
                    navigation.navigate('search');
                },
            });
        }
        return controls;
    }, [props.results, navigation]);

    return (
        <View
            flex={1}
            _dark={{
                bg: 'gray5.500',
            }}
            _light={{
                bg: 'white',
            }}
            borderLeftRadius={props.borderLeftRadius}
        >
            <View position="absolute" zIndex={1} width="100%">
                <UIHeader
                    safeArea={headerSafeArea}
                    left={props.left}
                    title={props.title}
                    shadow={shadow}
                    borderLeftRadius={props.borderLeftRadius}
                    right={headerControls}
                    color={props.color}
                    bg={
                        typeof props.bg !== 'undefined'
                            ? props.bg
                            : {
                                  light: 'white',
                                  dark: 'gray5.500',
                              }
                    }
                />
            </View>
            <ListComponent
                load={props.items}
                select={props.select}
                selected={props.selected}
                search={false}
                setShadow={setShadow}
            />
        </View>
    );
};

const SearchView = (props: any) => {
    const { navigation } = props;
    const [shadow, setShadow] = useState(false);
    const [search, setSearch] = useState('');

    const { width } = useWindowDimensions();
    const headerSafeArea = useMemo(() => {
        return width < 768;
    }, [width]);

    const headerControls = useMemo(() => {
        let controls: TUIHeaderControllDefinition[] = [];
        if (typeof props.results !== 'undefined') {
            controls.push({
                icon: 'search',
                tooltip: 'Buscar',
                color: 'gray',
                press: () => {
                    navigation.navigate('search');
                },
            });
        }

        if (typeof props.right !== 'undefined') {
            controls = [...controls, ...props.right];
        }

        return controls;
    }, [props.results, navigation, props.right]);

    return (
        <View
            flex={1}
            _dark={{
                bg: 'gray5.500',
            }}
            _light={{
                bg: 'white',
            }}
            borderLeftRadius={props.borderLeftRadius}
        >
            <View position="absolute" zIndex={1} width="100%">
                <UIHeader
                    type={'search'}
                    safeArea={headerSafeArea}
                    left={props.left}
                    title={props.title}
                    shadow={shadow}
                    borderLeftRadius={props.borderLeftRadius}
                    right={headerControls}
                    back={() => {
                        navigation.navigate('list');
                    }}
                    search={(value) => {
                        setSearch(value);
                    }}
                    color={props.color}
                    bg={
                        typeof props.bg !== 'undefined'
                            ? props.bg
                            : {
                                  light: 'white',
                                  dark: 'gray5.500',
                              }
                    }
                />
            </View>
            <ListComponent
                load={props.items}
                select={props.select}
                selected={props.selected}
                search={search}
                setShadow={setShadow}
            />
        </View>
    );
};

let searchTimeout: string | number | NodeJS.Timeout | undefined;
const ListComponent = (props: TListProps) => {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState<TUIListItem[]>([
        { id: 'loading', title: '' },
    ]);
    const [loadMore, setLoadMore] = useState(false);

    const viewContainerStyle = useMemo(() => {
        let style = {
            paddingTop: 60,
        };

        if (width < 768) {
            style.paddingTop = insets.top + 60;
        }
        return style;
    }, [insets, width]);

    const load = (
        loadPage: number,
        search: string | false,
        refresh: boolean
    ) => {
        if (search === false || search.length > 0) {
            if (refresh) {
                setRefreshing(true);
            } else {
                setLoading(true);
            }
            props
                .load(loadPage, search)
                .then((data) => {
                    const newItems: TUIListItem[] = items.filter(
                        (item) => item.id !== 'loading'
                    );
                    data.forEach((item) => {
                        newItems.push(item);
                    });
                    newItems.push({ id: 'loading', title: '' });

                    setItems(newItems);
                    setPage(loadPage);
                    setLoadMore(data.length >= 20);

                    if (refresh) {
                        setRefreshing(false);
                    } else {
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        if (props.search === false) {
            load(0, props.search, false);
        } else {
            if (props.search.length > 1) {
                setItems([{ id: 'loading', title: '' }]);
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    load(0, props.search, false);
                }, 500);
            } else {
                setItems([{ id: 'loading', title: '' }]);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.search]);

    return (
        <View flex={1} style={viewContainerStyle}>
            <FlatList
                flex={1}
                data={items}
                renderItem={({ item }) => {
                    if (item.id === 'loading') {
                        if (loading) {
                            return (
                                <View
                                    padding={4}
                                    justifyContent="center"
                                    alignItems={'center'}
                                >
                                    <Spinner />
                                </View>
                            );
                        }
                        return null;
                    } else {
                        const selected = props.selected === item.id;
                        return (
                            <ListItem
                                {...item}
                                select={props.select}
                                active={selected}
                            />
                        );
                    }
                }}
                scrollEventThrottle={1}
                onScroll={({ nativeEvent }) => {
                    if (nativeEvent.contentOffset.y > 0) {
                        props.setShadow(true);
                    } else {
                        props.setShadow(false);
                    }
                }}
                contentContainerStyle={styles.flatlistContentContainer}
                onEndReached={() => {
                    if (!loading && loadMore) {
                        const nextPage = page + 1;
                        load(nextPage, props.search, false);
                    }
                }}
                onRefresh={() => {
                    load(0, props.search, true);
                }}
                refreshing={refreshing}
                onEndReachedThreshold={1}
            />
        </View>
    );
};

const ListItem = (props: TUIListItemProps) => {
    return (
        <Pressable
            width="100%"
            onPress={() => {
                props.select(props.id);
            }}
        >
            {(params) => {
                const { isPressed, isHovered } = params;
                return (
                    <HStack
                        width="100%"
                        opacity={isPressed ? 0.7 : 1}
                        bg={
                            props.active
                                ? 'primary.500'
                                : isHovered
                                ? 'gray6.500'
                                : 'transparent'
                        }
                        paddingX={2}
                        borderRadius={8}
                        alignItems="center"
                    >
                        <HStack
                            flex={1}
                            width="100%"
                            paddingY={2}
                            borderBottomWidth={1}
                            _light={{
                                borderBottomColor: props.active
                                    ? 'transparent'
                                    : !isHovered
                                    ? 'gray6.500'
                                    : 'transparent',
                            }}
                            _dark={{
                                borderBottomColor: props.active
                                    ? 'transparent'
                                    : !isHovered
                                    ? 'gray4.500'
                                    : 'transparent',
                            }}
                            alignItems="center"
                            space={3}
                        >
                            {typeof props.avatar !== 'undefined' && (
                                <UIAvatar {...props.avatar} />
                            )}
                            <View flex={1}>
                                <Text
                                    fontSize={16}
                                    fontWeight={
                                        props.active ? 'bold' : 'medium'
                                    }
                                    numberOfLines={1}
                                    _light={{
                                        color: props.active ? 'white' : 'black',
                                    }}
                                    _dark={{
                                        color: 'white',
                                    }}
                                >
                                    {props.title}
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    _light={{
                                        color: props.active
                                            ? 'white'
                                            : 'gray.500',
                                    }}
                                    _dark={{
                                        color: props.active
                                            ? 'white'
                                            : 'gray.500',
                                    }}
                                >
                                    {props.subtitle}
                                </Text>
                            </View>
                            <UIIcon
                                name="arrow-forward-ios"
                                size={3}
                                color={props.active ? 'white' : 'gray4.500'}
                            />
                        </HStack>
                    </HStack>
                );
            }}
        </Pressable>
    );
};

type TListProps = {
    load: (page: number, search: string | false) => Promise<TUIListItem[]>;
    select: (id: string | null) => void;
    selected: string | null | false | undefined;
    setShadow: (shadow: boolean) => void;
    search: string | false;
};

export type TUIListProps = {
    title?: string;
    left?: TUIHeaderProps['left'];
    right?: TUIHeaderProps['right'];
    borderLeftRadius?: number;
    results?: (page: number, search: string | false) => Promise<TUIListItem[]>;
    items: (page: number, search: string | false) => Promise<TUIListItem[]>;
    select: (id: string | null) => void;
    selected: string | null | false | undefined;
    bg?: {
        dark: string;
        light: string;
    };
    color?: string;
};

export type TUIListItem = {
    id: string;
    title: string;
    subtitle?: string;
    icon?: TUIIconName;
    avatar?: TUIAvatarProps;
};

interface TUIListItemProps extends TUIListItem {
    active?: boolean;
    select: (id: string | null) => void;
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 8,
    },
});
