import React from 'react';
import { Button, IconButton } from 'native-base';

import type { TUIIconName } from './UIIcon';
import { UIIcon } from './UIIcon';

export function UIButton(props: TUIButtonProps) {
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
                    if (typeof props.onPress === 'function') {
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
                icon={<UIIcon name={props.icon} size={'xl'} />}
                onPress={() => {
                    if (typeof props.onPress === 'function') {
                        props.onPress();
                    }
                }}
            />
        );
    }

    return null;
}

UIButton.defaultProps = {
    variant: 'ghost',
    color: 'primary',
    disabled: false,
    size: 'lg',
};

export type TUIButtonProps = {
    label?: string;
    size: 'sm' | 'md' | 'lg';
    icon?: TUIIconName;
    leftIcon?: TUIIconName;
    rightIcon?: TUIIconName;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    color?: string;
    variant?: 'solid' | 'subtle' | 'link' | 'outline' | 'ghost';
};
