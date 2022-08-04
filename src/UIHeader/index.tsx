import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HStack, Input, Text, View } from 'native-base';

import { TUIButtonSize, TUIButtonVariant, UIButton } from '../UIButton';
import { TUIIconName, UIIcon } from '../UIIcon';

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
                <Text fontSize={18} fontWeight="medium" color={props.color}>
                    {props.title}
                </Text>
            );
        }
        return null;
    };

    const logo = () => {
        if (typeof props.logo !== 'undefined') {
            return props.logo({
                size: 17,
            });
        } else {
            return null;
        }
    };

    const headerStyle = {
        height: 60,
        width: '100%',
    };

    const content = () => {
        if (props.type === 'center') {
            return (
                <HStack style={headerStyle} alignItems="center">
                    <View
                        flex={3}
                        alignItems="flex-start"
                        justifyContent={'center'}
                    >
                        {controls(props.left, 0)}
                    </View>
                    <View
                        flex={6}
                        justifyContent="center"
                        alignItems={'center'}
                    >
                        {title()}
                    </View>
                    <View
                        flex={3}
                        alignItems="flex-end"
                        justifyContent={'center'}
                    >
                        {controls(props.right, 0)}
                    </View>
                </HStack>
            );
        } else if (props.type === 'search') {
            return (
                <HStack style={headerStyle} alignItems="center">
                    <View flex={1}>
                        <View position={'absolute'} zIndex={1} top={2}>
                            <UIIcon name="search" color="gray.500" size={6} />
                        </View>
                        <Input
                            placeholder="Buscar"
                            variant={'unstyled'}
                            size={'xl'}
                            paddingLeft={8}
                            autoCapitalize={'none'}
                            onChangeText={(value) => {
                                if (typeof props.search === 'function') {
                                    props.search(value);
                                }
                            }}
                        />
                    </View>
                    <View>
                        <UIButton
                            label="Regresar"
                            onPress={() => {
                                if (typeof props.back === 'function') {
                                    props.back();
                                }
                            }}
                        />
                    </View>
                </HStack>
            );
        } else {
            return (
                <HStack style={headerStyle}>
                    <HStack
                        flex={1}
                        justifyContent="flex-start"
                        alignItems={'center'}
                        space={2}
                    >
                        {typeof props.left === 'undefined' && (
                            <View width={2} />
                        )}
                        {controls(props.left, 0)}
                        {logo()}
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
            );
        }
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
            borderTopLeftRadius={props.borderLeftRadius}
        >
            <SafeArea safeArea={props.safeArea}>{content()}</SafeArea>
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
    color: 'gray.500',
    type: 'left',
};

export type TUIHeaderProps = {
    title?: string;
    type?: 'left' | 'center' | 'search';
    safeArea?: boolean;
    borderRadius?: number;
    borderLeftRadius?: number;
    shadow?: boolean;
    color?: string;
    bg?: {
        dark: string;
        light: string;
    };
    logo?: (props: any) => JSX.Element;
    left?: TUIHeaderControllDefinition;
    right?: TUIHeaderControllDefinition | TUIHeaderControllDefinition[];
    back?: () => void;
    search?: (value: string) => void;
};

export type TUIHeaderControllDefinition =
    | {
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
      }
    | undefined;
