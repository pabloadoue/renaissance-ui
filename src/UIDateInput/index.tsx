import React, { forwardRef, useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { HStack, Pressable, Text, useColorMode, View } from 'native-base';
dayjs.extend(localizedFormat);
dayjs.extend(localeData);

import type { TDateField } from '../FormHandler';
import { UIIcon } from '../UIIcon';

import Calendar from './calendar';
import Time from './time';

function DateInput(props: TDateField, _ref: any) {
    const inputRef = useRef<any>(null);
    const { colorMode } = useColorMode();
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [timeOpen, setTimeOpen] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState('gray5.500');
    const [value, setValue] = useState(dayjs());

    useEffect(() => {
        const date = dayjs(props.value);
        if (date.isValid()) {
            setValue(date);
        } else {
            setValue(dayjs());
        }
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
    }, [props.error, colorMode, inputRef]);

    const change = (date: Dayjs) => {
        if (!props.time) {
            date.hour(0).minute(0);
        }
        date.second(0).millisecond(0);
        setValue(date);
        let resp = {
            name: props.name,
            value: date.format(),
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
                justifyContent="center"
                paddingX={2}
                borderBottomWidth={borderBottomWidth}
                borderBottomColor={borderBottomColor}
            >
                <HStack width="100%" space={2} height={12} alignItems="center">
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
                        space={2}
                    >
                        <Pressable
                            onPress={() => {
                                setCalendarOpen(!calendarOpen);
                                setTimeOpen(false);
                            }}
                        >
                            {(params) => {
                                const { isPressed } = params;
                                return (
                                    <View
                                        bg={'gray5.500'}
                                        paddingX={2}
                                        paddingY={0}
                                        borderRadius={4}
                                        opacity={isPressed ? 0.5 : 1}
                                    >
                                        <Text fontSize={18}>
                                            {value.format('ll')}
                                        </Text>
                                    </View>
                                );
                            }}
                        </Pressable>
                        {props.time && (
                            <Pressable
                                onPress={() => {
                                    setTimeOpen(!timeOpen);
                                    setCalendarOpen(false);
                                }}
                            >
                                {(params) => {
                                    const { isPressed } = params;
                                    return (
                                        <View
                                            bg={'gray5.500'}
                                            paddingX={2}
                                            paddingY={0}
                                            borderRadius={4}
                                            opacity={isPressed ? 0.5 : 1}
                                        >
                                            <Text fontSize={18}>
                                                {value.format('HH:mm')}
                                            </Text>
                                        </View>
                                    );
                                }}
                            </Pressable>
                        )}
                    </HStack>
                </HStack>
                {calendarOpen && (
                    <View width="100%">
                        <Calendar
                            value={value}
                            change={change}
                            close={() => setCalendarOpen(false)}
                        />
                    </View>
                )}
                {timeOpen && (
                    <View width="100%">
                        <Time
                            value={value}
                            change={change}
                            close={() => setTimeOpen(false)}
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

export const UIDateInput = forwardRef(DateInput);
