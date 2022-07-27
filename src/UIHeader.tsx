import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HStack, Text, View } from 'native-base';

import { TUIButtonSize, TUIButtonVariant, UIButton } from './UIButton';
import type { TUIIconName } from './UIIcon';

export function UIHeader(props: TUIHeaderProps) {
    const controls = (
        entry:
            | TUIHeaderControllDefinition
            | TUIHeaderControllDefinition[]
            | undefined,
        key: number
    ): any => {
        if (typeof entry !== 'undefined') {
            if (Array.isArray(entry)) {
                return entry.map(
                    (item: TUIHeaderControllDefinition, index: number) => {
                        return controls(item, index);
                    }
                );
            } else {
                const {
                    label,
                    icon,
                    press,
                    leftIcon,
                    rightIcon,
                    color,
                    variant,
                    size,
                    loading,
                    disabled,
                    tooltip,
                } = entry;
                return (
                    <UIButton
                        icon={icon || undefined}
                        label={label || undefined}
                        leftIcon={leftIcon || undefined}
                        rightIcon={rightIcon || undefined}
                        color={color || undefined}
                        key={key}
                        size={size || undefined}
                        loading={loading || undefined}
                        variant={variant || undefined}
                        onPress={press || undefined}
                        disabled={disabled || undefined}
                        tooltip={tooltip || undefined}
                    />
                );
            }
        }
        return null;
    };

    const title = () => {
        if (typeof props.title === 'string') {
            return (
                <Text fontSize={18} fontWeight="regular">
                    {props.title}
                </Text>
            );
        }
        return null;
    };

    const headerStyle = {
        height: 60,
        width: '100%',
    };

    return (
        <View
            width="100%"
            _dark={{
                bg: props.bg?.dark,
            }}
            _light={{
                bg: props.bg?.light,
            }}
            shadow={props.shadow ? 1 : -1}
            paddingX={2}
            borderTopRadius={props.borderRadius}
        >
            <SafeArea safeArea={props.safeArea}>
                <HStack style={headerStyle}>
                    <HStack
                        flex={1}
                        justifyContent="flex-start"
                        alignItems={'center'}
                        space={2}
                    >
                        {controls(props.left, 0)}
                        {title()}
                    </HStack>
                    <HStack
                        justifyContent="flex-end"
                        alignItems={'center'}
                        space={0}
                    >
                        {controls(props.right, 0)}
                    </HStack>
                </HStack>
            </SafeArea>
        </View>
    );
}

const SafeArea = (props: {
    safeArea?: boolean;
    children: JSX.Element | JSX.Element[];
}) => {
    if (props.safeArea === true) {
        const safeAreaStyle = {
            width: '100%',
            backgroundColor: 'transparent',
        };
        return (
            <SafeAreaView edges={['top']} style={safeAreaStyle}>
                {props.children}
            </SafeAreaView>
        );
    } else {
        return <>{props.children}</>;
    }
};

UIHeader.defaultProps = {
    safeArea: true,
};

export type TUIHeaderProps = {
    title?: string;
    safeArea?: boolean;
    borderRadius?: number;
    shadow?: boolean;
    bg?: {
        dark: string;
        light: string;
    };
    left?: TUIHeaderControllDefinition;
    right?: TUIHeaderControllDefinition | TUIHeaderControllDefinition[];
};

export type TUIHeaderControllDefinition = {
    label?: string;
    icon?: TUIIconName;
    leftIcon?: TUIIconName;
    rightIcon?: TUIIconName;
    color?: string;
    variant?: TUIButtonVariant;
    size?: TUIButtonSize;
    loading?: boolean;
    press?: () => void;
    disabled?: boolean;
    tooltip?: string;
};
