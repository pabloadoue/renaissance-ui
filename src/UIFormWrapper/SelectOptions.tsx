import React, { useState } from 'react';
import findValue from '@pabloadoue/find-value';
import {
    FlatList,
    HStack,
    Pressable,
    Text,
    useColorMode,
    useColorModeValue,
    useTheme,
    View,
} from 'native-base';

import type { TSelectOption } from '../FormHandler';
import { UIHeader } from '../UIHeader';
import { UIIcon } from '../UIIcon';

export default function UIFormWrapperSelectOptions(props: any) {
    const { navigation, route } = props;
    const { colors } = useTheme();
    const { colorMode } = useColorMode();
    const [topOffset, setTopOffset] = useState(0);
    const title = findValue(route.params, 'title') || '';
    const options: TSelectOption[] = findValue(route.params, 'options') || [];
    const change: ((value: any) => void) | null =
        findValue(route.params, 'change') || null;
    const value: string | number | boolean | null = findValue(
        route.params,
        'value'
    );
    const bg = colorMode === 'light' ? colors.white : colors.gray5['500'];

    return (
        <View height="100%" width="100%">
            <View position="absolute" zIndex={1000} width="100%">
                <UIHeader
                    safeArea={false}
                    borderRadius={8}
                    title={title}
                    shadow={topOffset > 0}
                    bg={
                        topOffset > 0
                            ? { dark: 'gray5.500', light: 'white' }
                            : { dark: 'transparent', light: 'transparent' }
                    }
                    left={{
                        icon: 'arrow-back-ios',
                        color: 'gray',
                        disabled: props.saving,
                        press: () => {
                            navigation.navigate('Form');
                        },
                    }}
                />
            </View>
            <FlatList
                width={'100%'}
                height={'100%'}
                bg={'gray6.500'}
                onScroll={(e) => {
                    setTopOffset(e.nativeEvent.contentOffset.y);
                }}
                data={options}
                borderRadius={8}
                renderItem={({ item, index }) => {
                    const selected = value === item.value;
                    const borderBottom = index < options.length - 1;
                    return (
                        <ListItem
                            {...item}
                            selected={selected}
                            borderBottom={borderBottom}
                            change={(value: any) => {
                                if (typeof change === 'function') {
                                    change(value);
                                    navigation.navigate('Form');
                                }
                            }}
                        />
                    );
                }}
                contentContainerStyle={{
                    backgroundColor: bg,
                    marginVertical: 80,
                    marginHorizontal: 16,
                    borderRadius: 8,
                }}
            />
        </View>
    );
}

const ListItem = (props: TListItemProps) => {
    const borderBottomColor = useColorModeValue('gray5.500', 'gray4.500');
    return (
        <View>
            <Pressable
                onPress={() => {
                    if (typeof props.change === 'function') {
                        props.change(props.value);
                    }
                }}
            >
                {(state) => {
                    const { isPressed } = state;
                    return (
                        <View
                            width="100%"
                            opacity={isPressed ? 0.5 : 1}
                            height={12}
                            justifyContent="center"
                            paddingX={2}
                            borderBottomWidth={props.borderBottom ? 1 : 0}
                            borderBottomColor={borderBottomColor}
                        >
                            <HStack>
                                <HStack space={1} flex={1}>
                                    {typeof props.icon !== 'undefined' && (
                                        <View
                                            width={8}
                                            justifyContent="center"
                                            alignItems={'center'}
                                        >
                                            <UIIcon
                                                name={props.icon}
                                                size={'md'}
                                                color={'gray2.500'}
                                            />
                                        </View>
                                    )}
                                    <Text
                                        fontSize={18}
                                        color={'gray.500'}
                                        numberOfLines={1}
                                        width="100%"
                                        paddingX={2}
                                    >
                                        {props.label}
                                    </Text>
                                </HStack>
                                <HStack
                                    justifyContent="flex-end"
                                    alignItems={'center'}
                                >
                                    {props.selected && (
                                        <UIIcon
                                            name="done"
                                            size={'md'}
                                            color={'blue.500'}
                                        />
                                    )}
                                </HStack>
                            </HStack>
                        </View>
                    );
                }}
            </Pressable>
        </View>
    );
};

interface TListItemProps extends TSelectOption {
    selected: boolean;
    borderBottom: boolean;
    change: (value: any) => void;
}
