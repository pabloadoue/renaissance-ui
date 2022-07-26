import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HStack, Pressable, Spinner, Text, View } from 'native-base';

import type { TSelectField } from './FormHandler';
import { UIIcon } from './UIIcon';

export function UISelect(props: TSelectField) {
    const navigation = useNavigation();

    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState('gray5.500');

    useEffect(() => {
        if (props.error) {
            setBorderBottomColor('red');
        } else if (props.borderBottom) {
            setBorderBottomWidth(0.5);
            setBorderBottomColor('gray5.500');
        } else {
            setBorderBottomWidth(0);
            setBorderBottomColor('gray5.500');
        }
    }, [props.borderBottom, props.error]);

    const change = (value: any) => {
        let resp = {
            name: props.name,
            value: value,
        };

        if (props.disabled !== true) {
            if (typeof props.change === 'function') {
                props.change(resp);
            } else {
                console.log('No change function defined');
            }
        }
    };

    const value = () => {
        let result = '';
        props.options.map((option) => {
            if (option.value === props.value) {
                result = option.label;
            }
        });

        return result;
    };

    const right = () => {
        if (props.loading) {
            return <HStack
                flex={1}
                justifyContent="flex-end"
                alignItems={'center'}
                space={1}
                paddingLeft={2}
            >
                <Spinner />
            </HStack>
        } else {
            return <HStack
                flex={1}
                justifyContent="flex-end"
                alignItems={'center'}
                space={1}
                paddingLeft={2}
            >
                <Text
                    fontSize={18}
                    color={'gray2.500'}
                    numberOfLines={1}
                    paddingX={2}
                >
                    {value()}
                </Text>
                <View>
                    <UIIcon
                        name="arrow-forward-ios"
                        color={'gray4.500'}
                    />
                </View>
            </HStack>
        }
    }

    return (
        <View>
            <Pressable
                onPress={() => {
                    if (props.disabled !== true && !props.loading) {
                        //@ts-expect-error
                        navigation.navigate("SelectOptions", {
                            title: props.label,
                            options: props.options,
                            change: change,
                            value: props.value
                        });
                    }
                }}
            >
                {(state) => {
                    const { isPressed } = state;
                    return (
                        <View
                            width="100%"
                            opacity={props.disabled || isPressed || props.loading ? 0.5 : 1}
                            height={12}
                            justifyContent="center"
                            paddingX={2}
                            borderBottomWidth={borderBottomWidth}
                            borderBottomColor={borderBottomColor}
                        >
                            <HStack width="100%" space={2}>
                                <HStack space={1}>
                                    <View
                                        width={8}
                                        justifyContent="center"
                                        alignItems={'center'}
                                    >
                                        {typeof props.icon !== 'undefined' && (
                                            <UIIcon
                                                name={props.icon.name}
                                                size={'md'}
                                                _dark={{
                                                    color: props.icon.color.dark
                                                }}
                                                _light={{
                                                    color: props.icon.color.light
                                                }}
                                            />
                                        )}
                                    </View>
                                    <Text fontSize={18} color={'gray.500'}>
                                        {props.label}
                                    </Text>
                                </HStack>
                                {right()}
                            </HStack>
                        </View>
                    );
                }}
            </Pressable>
        </View>
    );
}
