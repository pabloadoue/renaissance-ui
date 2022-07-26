import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import {
    HStack,
    Input,
    Text,
    useColorMode,
    useColorModeValue,
    View,
} from 'native-base';

import type { TTextInputField } from './FormHandler';
import { UIIcon } from './UIIcon';

const TextInput = (props: TTextInputField, ref: any) => {
    const inputRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState(
        useColorModeValue('gray5.500', 'gray6.500')
    );

    useEffect(() => {
        if (props.borderBottom || props.error) {
            setBorderBottomWidth(0.5);
        } else {
            setBorderBottomWidth(0);
        }
    }, [props.borderBottom, props.error]);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus();
            },
            blur: () => {
                inputRef.current.blur();
            },
            name: props.name,
            disabled: props.disabled,
            value: props.value,
        };
    });

    useEffect(() => {
        if (props.error) {
            setBorderBottomColor('red');
        } else if (focused) {
            setBorderBottomColor('blue.500');
        } else {
            if (colorMode === 'light') {
                setBorderBottomColor('gray5.500');
            } else {
                setBorderBottomColor('gray4.500');
            }
        }
    }, [props.error, focused, colorMode]);

    const error = () => {
        if (typeof props.error === 'string') {
            return (
                <View width={'100%'} paddingX={4}>
                    <Text color={'red'}>{props.error}</Text>
                </View>
            );
        }
        return null;
    };

    const change = (value: string) => {
        if (checkValid(props.type, value)) {
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
        } else {
            console.log('Not valid');
        }
    };

    return (
        <View
            width={'100%'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            paddingLeft={0}
        >
            <View
                width={'100%'}
                borderBottomWidth={borderBottomWidth}
                borderBottomColor={borderBottomColor}
                height={12}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <HStack width="100%">
                    {typeof props.icon !== 'undefined' && (
                        <View
                            width={8}
                            justifyContent="center"
                            alignItems={'center'}
                        >
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
                        </View>
                    )}

                    <View flex={1}>
                        <Input
                            variant={'unstyled'}
                            ref={inputRef}
                            size={'xl'}
                            autoCapitalize={'none'}
                            type={
                                props.type === 'password' ? 'password' : 'text'
                            }
                            placeholder={props.label}
                            value={`${props.value}`}
                            isDisabled={props.disabled}
                            onChangeText={change}
                            padding={0}
                            paddingLeft={4}
                            paddingRight={8}
                            paddingTop={2}
                            paddingBottom={2}
                            keyboardType={
                                props.type === 'password'
                                    ? 'default'
                                    : props.type === 'email'
                                        ? 'email-address'
                                        : props.type === 'number'
                                            ? 'number-pad'
                                            : props.type === 'phone'
                                                ? 'phone-pad'
                                                : props.type === 'url'
                                                    ? 'url'
                                                    : props.type === 'uri'
                                                        ? 'url'
                                                        : 'default'
                            }
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            returnKeyType={props.returnKeyType}
                            onSubmitEditing={() => {
                                if (typeof props.next === 'function') {
                                    props.next(props.name);
                                }
                            }}
                        />
                    </View>
                </HStack>
            </View>
            {error()}
        </View>
    );
};

const checkValid = (
    type:
        | 'email'
        | 'password'
        | 'number'
        | 'phone'
        | 'text'
        | 'search'
        | 'decimal'
        | 'url'
        | 'uri'
        | undefined,
    input: string
) => {
    if (type === 'email') {
        if (input.length > 0) {
            const re = /^[a-zA-Z0-9.@\-_]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === 'number') {
        if (input.length > 0) {
            const re = /^[0-9]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === 'decimal') {
        if (input.length > 0) {
            const re = /^[0-9.-]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === 'phone') {
        if (input.length > 0) {
            const re = /^[0-9+]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === 'uri') {
        if (input.length > 0) {
            const re = /^[a-zA-Z0-9.\-_]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    }

    return true;
};

export const UITextInput = forwardRef(TextInput);
