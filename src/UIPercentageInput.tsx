import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { HStack, Input, Text, useColorMode, View } from 'native-base';
import numeral from 'numeral';

import type { TPercentageField } from './FormHandler';
import { UIIcon } from './UIIcon';

function PercentageInput(props: TPercentageField, _ref: any) {
    const inputRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState('gray5.500');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (props.borderBottom || props.error) {
            setBorderBottomWidth(0.5);
        } else {
            setBorderBottomWidth(0);
        }
    }, [props.borderBottom, props.error]);

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
    }, [props.error, focused, colorMode, inputRef]);

    useEffect(() => {
        if (props.value > 0) {
            const val = props.value * 100;
            setValue(`${val}`);
        } else {
            setValue('0');
        }
    }, [props.value]);

    const change = (value: string) => {
        if (checkValid(`${value}`)) {
            setValue(`${value}`);
        }
    };

    const blur = () => {
        setFocused(false);
        let val = numeral(value).value() || 0;
        if (val > 0) {
            val = val / 100;
        }

        if (checkValid(`${val}`)) {
            let resp = {
                name: props.name,
                value: val,
            };

            if (props.disabled !== true) {
                if (typeof props.change === 'function') {
                    props.change(resp);
                } else {
                    console.log('No change function defined');
                }
            }
        }
    };

    return (
        <View>
            <View
                width="100%"
                opacity={props.disabled ? 0.5 : 1}
                height={12}
                justifyContent="center"
                paddingX={2}
                borderBottomWidth={borderBottomWidth}
                borderBottomColor={borderBottomColor}
            >
                <HStack width="100%" space={2}>
                    <HStack space={1} paddingLeft={2}>
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
                                        color: props.icon.color.dark,
                                    }}
                                    _light={{
                                        color: props.icon.color.light,
                                    }}
                                />
                            </View>
                        )}
                        <Text fontSize={18} color={'gray.500'}>
                            {props.label}
                        </Text>
                    </HStack>
                    <HStack
                        flex={1}
                        justifyContent="flex-end"
                        alignItems={'center'}
                        paddingLeft={2}
                    >
                        <Input
                            variant={'unstyled'}
                            size={'xl'}
                            ref={inputRef}
                            textAlign={'right'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            type={'text'}
                            selection={
                                focused
                                    ? {
                                          start: value.length,
                                          end: value.length,
                                      }
                                    : undefined
                            }
                            value={`${value}`}
                            isDisabled={props.disabled}
                            onChangeText={change}
                            padding={0}
                            paddingRight={2}
                            keyboardType={'numeric'}
                            onFocus={() => setFocused(true)}
                            onBlur={blur}
                            returnKeyType={props.returnKeyType}
                            onSubmitEditing={() => {
                                if (typeof props.next === 'function') {
                                    props.next(props.name);
                                }
                            }}
                        />
                        <Text paddingRight={1} fontSize={18}>
                            %
                        </Text>
                    </HStack>
                </HStack>
            </View>
        </View>
    );
}

const checkValid = (input: string | null) => {
    if (typeof input === 'string') {
        if (input.length > 0) {
            const re = /^[0-9.]+$/;
            if (!re.test(input)) {
                return false;
            }
        } else {
            return true;
        }
    }

    return true;
};

export const UIPercentageInput = forwardRef(PercentageInput);
