import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { HStack, Pressable, Text, useTheme, View } from 'native-base';
dayjs.extend(localizedFormat);
dayjs.extend(localeData);

import { UIIcon } from '../UIIcon';

export default function UIDateInputCalendar(props: UIDateCalendarProps) {
    const [calendarView, setCalendarView] = useState<
        'calendar' | 'months' | 'years'
    >('calendar');
    const [months, setMonths] = useState<{ label: string; value: number }[]>(
        []
    );
    const [years, setYears] = useState<{ label: string; value: number }[]>([]);
    const { colors } = useTheme();
    const [yearsPage, setYearsPage] = useState<number>(0);

    useEffect(() => {
        if (props.value.isValid()) {
            let result: { label: string; value: number }[] = [];
            dayjs.months().map((name, index) => {
                result.push({
                    label: name,
                    value: index,
                });
            });
            setMonths(result);

            let yearsResult: { label: string; value: number }[] = [];
            for (let i = 19; i > -1; i--) {
                const year = props.value.year() - (i + 20 * yearsPage);
                yearsResult.push({ label: `${year}`, value: year });
            }

            setYears(yearsResult);
        }
    }, [props.value, yearsPage]);

    const renderMonths = () => {
        return months.map((month) => {
            return (
                <View
                    key={month.value}
                    width="28%"
                    justifyContent={'center'}
                    alignItems="center"
                    marginBottom={4}
                    marginX={2}
                >
                    <Pressable
                        width="100%"
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => {
                            const date = props.value.month(month.value);
                            props.change(date);
                            setCalendarView('calendar');
                        }}
                    >
                        {(params) => {
                            const { isPressed } = params;
                            const currentMonth = props.value.month();
                            const selected = currentMonth === month.value;
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
                                    >
                                        {month.label}
                                    </Text>
                                </View>
                            );
                        }}
                    </Pressable>
                </View>
            );
        });
    };

    const renderYears = () => {
        return years.map((year) => {
            return (
                <View
                    key={year.value}
                    width="20%"
                    justifyContent={'center'}
                    alignItems="center"
                    marginBottom={4}
                    marginX={2}
                >
                    <Pressable
                        width="100%"
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => {
                            const date = props.value.year(year.value);
                            props.change(date);
                            setCalendarView('months');
                        }}
                    >
                        {(params) => {
                            const { isPressed } = params;
                            const currentYear = props.value.year();
                            const selected = currentYear === year.value;
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
                                    >
                                        {year.label}
                                    </Text>
                                </View>
                            );
                        }}
                    </Pressable>
                </View>
            );
        });
    };

    const content = () => {
        if (calendarView === 'calendar') {
            return (
                <Calendar
                    initialDate={props.value.format('YYYY-MM-DD')}
                    markedDates={{
                        [props.value.format('YYYY-MM-DD')]: {
                            selected: true,
                            selectedColor: colors.primary['500'],
                        },
                    }}
                    theme={{
                        calendarBackground: 'transparent',
                        stylesheet: {
                            calendar: {
                                main: {
                                    container: {
                                        backgroundColor: 'transparent',
                                    },
                                },
                            },
                        },
                        dayTextColor: colors.gray['500'],
                        textDisabledColor: colors.gray3['500'],
                    }}
                    onDayPress={({ dateString }) => {
                        const hour = props.value.hour();
                        const minute = props.value.minute();
                        const second = props.value.second();
                        const value = dayjs(dateString)
                            .hour(hour)
                            .minute(minute)
                            .second(second);
                        props.change(value);
                        props.close();
                    }}
                    renderHeader={(date) => {
                        return (
                            <View>
                                <Pressable
                                    onPress={() => {
                                        setCalendarView('months');
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <Text
                                                fontWeight={'bold'}
                                                opacity={isPressed ? 0.5 : 1}
                                                fontSize={16}
                                            >
                                                {dayjs(date).format(
                                                    'MMMM YYYY'
                                                )}
                                            </Text>
                                        );
                                    }}
                                </Pressable>
                            </View>
                        );
                    }}
                    renderArrow={(direction) => {
                        if (direction === 'left') {
                            return (
                                <UIIcon
                                    name="arrow-back-ios"
                                    size={4}
                                    color={'primary.500'}
                                />
                            );
                        } else {
                            return (
                                <UIIcon
                                    name="arrow-forward-ios"
                                    size={4}
                                    color={'primary.500'}
                                />
                            );
                        }
                    }}
                />
            );
        } else if (calendarView === 'months') {
            return (
                <View width="100%" paddingY={2}>
                    <View
                        width="100%"
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <HStack width="100%" paddingX={8}>
                            <View
                                flex={1}
                                justifyContent={'center'}
                                alignItems={'flex-start'}
                            >
                                <Pressable
                                    onPress={() => {
                                        const year = props.value.year() - 1;
                                        const date = props.value.year(year);
                                        props.change(date);
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <View opacity={isPressed ? 0.5 : 1}>
                                                <UIIcon
                                                    name="arrow-back-ios"
                                                    size={4}
                                                    color={'primary.500'}
                                                />
                                            </View>
                                        );
                                    }}
                                </Pressable>
                            </View>
                            <View
                                flex={1}
                                justifyContent="center"
                                alignItems={'center'}
                            >
                                <Pressable
                                    onPress={() => {
                                        setCalendarView('years');
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <Text
                                                fontWeight={'bold'}
                                                opacity={isPressed ? 0.5 : 1}
                                                fontSize={16}
                                            >
                                                {props.value.format('YYYY')}
                                            </Text>
                                        );
                                    }}
                                </Pressable>
                            </View>
                            <View
                                flex={1}
                                justifyContent={'center'}
                                alignItems={'flex-end'}
                            >
                                <Pressable
                                    onPress={() => {
                                        const year = props.value.year() + 1;
                                        const date = props.value.year(year);
                                        props.change(date);
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <View opacity={isPressed ? 0.5 : 1}>
                                                <UIIcon
                                                    name="arrow-forward-ios"
                                                    size={4}
                                                    color={'primary.500'}
                                                />
                                            </View>
                                        );
                                    }}
                                </Pressable>
                            </View>
                        </HStack>
                    </View>
                    <View width="100%">
                        <HStack
                            flex={1}
                            flexWrap={'wrap'}
                            alignItems={'center'}
                        >
                            {renderMonths()}
                        </HStack>
                    </View>
                </View>
            );
        } else if (calendarView === 'years') {
            return (
                <View width="100%" paddingY={2}>
                    <View
                        width="100%"
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <HStack width="100%" paddingX={8}>
                            <View
                                flex={1}
                                justifyContent={'center'}
                                alignItems={'flex-start'}
                            >
                                <Pressable
                                    onPress={() => {
                                        setYearsPage(yearsPage + 1);
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <View opacity={isPressed ? 0.5 : 1}>
                                                <UIIcon
                                                    name="arrow-back-ios"
                                                    size={4}
                                                    color={'primary.500'}
                                                />
                                            </View>
                                        );
                                    }}
                                </Pressable>
                            </View>
                            <View
                                flex={1}
                                justifyContent="center"
                                alignItems={'center'}
                            />
                            <View
                                flex={1}
                                justifyContent={'center'}
                                alignItems={'flex-end'}
                            >
                                <Pressable
                                    onPress={() => {
                                        setYearsPage(yearsPage - 1);
                                    }}
                                >
                                    {(params) => {
                                        const { isPressed } = params;
                                        return (
                                            <View opacity={isPressed ? 0.5 : 1}>
                                                <UIIcon
                                                    name="arrow-forward-ios"
                                                    size={4}
                                                    color={'primary.500'}
                                                />
                                            </View>
                                        );
                                    }}
                                </Pressable>
                            </View>
                        </HStack>
                    </View>
                    <View width="100%">
                        <HStack
                            flex={1}
                            flexWrap={'wrap'}
                            alignItems={'center'}
                        >
                            {renderYears()}
                        </HStack>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    };

    return (
        <View width="100%" alignItems={'center'}>
            <View width="100%" maxWidth={'420'}>
                {content()}
            </View>
        </View>
    );
}

type UIDateCalendarProps = {
    value: Dayjs;
    change: (value: Dayjs) => void;
    close: () => void;
};
