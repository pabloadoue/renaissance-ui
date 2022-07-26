import React, { useEffect, useState, forwardRef, useRef } from 'react';
import { HStack, Text, View, Input, useColorMode } from 'native-base';
import numeral from "numeral";

import type { TCurrencyField } from './FormHandler';
import { UIIcon } from './UIIcon';

function CurrencyInput(props: TCurrencyField, _ref: any) {
    const inputRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState('gray5.500');
    const [value, setValue] = useState("");

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
        let a = numeral(props.value).value();
        let value = "0";
        if (a === null) {
            a = 0;
        }
        if (a % 1 === 0) {
            value = numeral(a).format('$ 0,0');
        } else {
            const decimals = countDecimals(a);
            if (decimals === 1) {
                value = numeral(a).format('$ 0,0[.]0');
            } else if (decimals === 2) {
                value = numeral(a).format('$ 0,0[.]00');
            } else if (decimals === 3) {
                value = numeral(a).format('$ 0,0[.]000');
            } else if (decimals === 4) {
                value = numeral(a).format('$ 0,0[.]0000');
            } else {
                value = numeral(a).format('$ 0,0[.]0000');
            }
        }
        if (typeof props.value === "string") {
            const val = `${props.value}`;
            if (val.includes(".")) {
                const decimals = val.split(".")[1]?.length || 0;
                if (decimals <= 0) {
                    value = `${value}.`;
                }
            }
        }
        setValue(value);
    }, [props.value]);

    const change = (val: string) => {
        let value: number | string | null = numeral(val).value();
        if (value === null) {
            value = 0;
        } else {
            if (val.includes(".")) {
                const decimals = val.split(".")[1]?.length || 0;
                if (decimals <= 0) {
                    value = `${value}.`;
                }
            }
        }

        if (checkValid(`${value}`)) {
            let resp = {
                name: props.name,
                value: `${value}`
            };

            if (props.disabled !== true) {
                if (typeof props.change === "function") {
                    props.change(resp);
                } else {
                    console.log("No change function defined");
                }
            }
        }
    }

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
                                        color: props.icon.color.dark
                                    }}
                                    _light={{
                                        color: props.icon.color.light
                                    }}
                                />
                            </View>
                        )}
                        <Text fontSize={18} color={'gray.500'}>
                            {props.label}
                        </Text>
                    </HStack>
                    <View
                        flex={1}
                        justifyContent="flex-end"
                        alignItems={'center'}
                        paddingLeft={2}
                    >
                        <Input
                            variant={"unstyled"}
                            size={"xl"}
                            ref={inputRef}
                            textAlign={"right"}
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            type={"text"}
                            selection={focused ? typeof props.currency === "string" ? { start: (value.length + props.currency.length + 1), end: (value.length + props.currency.length + 1) } : { start: value.length, end: value.length } : undefined}
                            value={typeof props.currency === "string" ? `${props.currency} ${value}` : `${value}`}
                            isDisabled={props.disabled}
                            onChangeText={change}
                            padding={0}
                            paddingRight={4}
                            keyboardType={"numeric"}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            returnKeyType={props.returnKeyType}
                            onSubmitEditing={() => {
                                if (typeof props.next === "function") {
                                    props.next(props.name);
                                }
                            }}
                        />
                    </View>
                </HStack>
            </View>
        </View>
    );
}

const countDecimals = (input: number) => {
    const value = `${input}`;
    return value.split(".")[1]?.length || 0;
}

const checkValid = (input: string | null) => {
    if (typeof input === "string") {
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

export const UICurrencyInput = forwardRef(CurrencyInput);