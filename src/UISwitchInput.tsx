import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { HStack, Switch, Text, useColorMode, View } from 'native-base';

import type { TSwitchInputField } from './FormHandler';
import { UIIcon } from './UIIcon';

function SwitchInput(props: TSwitchInputField, _ref: any) {
    const inputRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState('gray5.500');
    const [value, setValue] = useState(props.value === true);

    useEffect(() => {
        setValue(props.value === true);
    }, [props.value]);

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
        } else {
            if (colorMode === 'light') {
                setBorderBottomColor('gray5.500');
            } else {
                setBorderBottomColor('gray4.500');
            }
        }
    }, [props.error, colorMode]);

    const change = (value: boolean) => {
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
                    <HStack flex={1} space={1} paddingLeft={2}>
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
                    <View
                        justifyContent="flex-end"
                        alignItems={'center'}
                        paddingLeft={2}
                    >
                        <Switch
                            ref={inputRef}
                            size={'sm'}
                            colorScheme={'green'}
                            isChecked={value}
                            onValueChange={change}
                            isDisabled={props.disabled}
                        />
                    </View>
                </HStack>
            </View>
        </View>
    );
}

export const UISwitchInput = forwardRef(SwitchInput);
