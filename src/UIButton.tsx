import React from 'react';
import { Button, IconButton, Tooltip } from 'native-base';

import type { TUIIconName } from './UIIcon';
import { UIIcon } from './UIIcon';

export function UIButton(props: TUIButtonProps) {
    const content = () => {
        if (typeof props.label === 'string') {
            return (
                <Button
                    variant={props.variant}
                    isLoading={props.loading}
                    isDisabled={props.disabled}
                    colorScheme={props.color}
                    size={props.size}
                    leftIcon={
                        props.leftIcon && (
                            <UIIcon name={props.leftIcon} size={'sm'} />
                        )
                    }
                    rightIcon={
                        props.rightIcon && (
                            <UIIcon name={props.rightIcon} size={'sm'} />
                        )
                    }
                    onPress={() => {
                        if (
                            typeof props.onPress === 'function' &&
                            props.disabled !== true
                        ) {
                            props.onPress();
                        }
                    }}
                >
                    {props.label}
                </Button>
            );
        } else if (typeof props.icon === 'string') {
            return (
                <IconButton
                    variant={props.variant}
                    isDisabled={props.disabled}
                    colorScheme={props.color}
                    size={props.size}
                    icon={<UIIcon name={props.icon} size={'md'} />}
                    onPress={() => {
                        if (
                            typeof props.onPress === 'function' &&
                            props.disabled !== true
                        ) {
                            props.onPress();
                        }
                    }}
                />
            );
        }
        return null;
    };

    if (typeof props.tooltip === 'string') {
        return (
            <Tooltip label={props.tooltip} openDelay={250}>
                {content()}
            </Tooltip>
        );
    } else {
        return <>{content()}</>;
    }
}

UIButton.defaultProps = {
    variant: 'ghost',
    color: 'primary',
    disabled: false,
    size: 'lg',
};

export type TUIButtonProps = {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: TUIIconName;
    leftIcon?: TUIIconName;
    rightIcon?: TUIIconName;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    color?: string;
    variant?: TUIButtonVariant;
    tooltip?: string;
};

export type TUIButtonVariant =
    | 'solid'
    | 'subtle'
    | 'link'
    | 'outline'
    | 'ghost';
export type TUIButtonSize = 'sm' | 'md' | 'lg';
