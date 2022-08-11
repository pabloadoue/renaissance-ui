import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { HStack, Pressable, ScrollView, Text, View } from 'native-base';
dayjs.extend(localizedFormat);
dayjs.extend(localeData);

export default function UIDateInputTimePicker(props: UIDateTimeProps) {
    const [hours, setHours] = useState<{ label: string; value: number }[]>([]);
    const [minutes, setMinutes] = useState<{ label: string; value: number }[]>(
        []
    );

    useEffect(() => {
        const updatedHours = [];
        for (let i = 0; i < 24; i++) {
            updatedHours.push({
                label: `${i < 10 ? `0${i}` : i}`,
                value: i,
            });
        }
        setHours(updatedHours);

        const updatedMinutes = [];
        for (let i = 0; i <= 11; i++) {
            const value = 5 * i;
            updatedMinutes.push({
                label: `${value < 10 ? `0${value}` : `${value}`}`,
                value: value,
            });
        }
        setMinutes(updatedMinutes);
    }, []);

    const renderHours = () => {
        return hours.map((hour, index) => {
            return (
                <View
                    width="100%"
                    key={index}
                    alignItems={'flex-end'}
                    justifyContent={'flex-end'}
                >
                    <Pressable
                        width={16}
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => {
                            const date = props.value.hour(hour.value);
                            props.change(date);
                        }}
                    >
                        {(params) => {
                            const { isPressed } = params;
                            const currentHour = props.value.hour();
                            const selected = currentHour === hour.value;
                            return (
                                <View
                                    width="100%"
                                    justifyContent={'center'}
                                    bg={
                                        selected ? 'primary.500' : 'transparent'
                                    }
                                    alignItems="center"
                                    opacity={isPressed ? 0.5 : 1}
                                    paddingY={1}
                                    borderRadius={4}
                                >
                                    <Text
                                        color={selected ? 'white' : 'gray.500'}
                                        fontSize={18}
                                    >
                                        {hour.label}
                                    </Text>
                                </View>
                            );
                        }}
                    </Pressable>
                </View>
            );
        });
    };

    const renderMinutes = () => {
        return minutes.map((minute, index) => {
            return (
                <View
                    width="100%"
                    key={index}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}
                >
                    <Pressable
                        width={16}
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => {
                            const date = props.value.minute(minute.value);
                            props.change(date);
                            props.close();
                        }}
                    >
                        {(params) => {
                            const { isPressed } = params;
                            const currentMinute = props.value.minute();
                            const selected = currentMinute === minute.value;
                            return (
                                <View
                                    width="100%"
                                    justifyContent={'center'}
                                    bg={
                                        selected ? 'primary.500' : 'transparent'
                                    }
                                    alignItems="center"
                                    opacity={isPressed ? 0.5 : 1}
                                    paddingY={1}
                                    borderRadius={4}
                                >
                                    <Text
                                        color={selected ? 'white' : 'gray.500'}
                                        fontSize={18}
                                    >
                                        {minute.label}
                                    </Text>
                                </View>
                            );
                        }}
                    </Pressable>
                </View>
            );
        });
    };

    return (
        <View width="100%" alignItems={'center'}>
            <View width="100%" maxWidth={'420'} height={256}>
                <HStack flex={1} space={4}>
                    <View
                        flex={1}
                        justifyContent="flex-end"
                        alignItems={'flex-end'}
                    >
                        <ScrollView height={'100%'} width={20}>
                            {renderHours()}
                        </ScrollView>
                    </View>
                    <View
                        flex={1}
                        justifyContent="flex-start"
                        alignItems={'flex-start'}
                    >
                        <ScrollView height={'100%'} width={20}>
                            {renderMinutes()}
                        </ScrollView>
                    </View>
                </HStack>
            </View>
        </View>
    );
}

type UIDateTimeProps = {
    value: Dayjs;
    change: (value: Dayjs) => void;
    close: () => void;
};
