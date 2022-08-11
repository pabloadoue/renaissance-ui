import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconArrowLeft(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M14 7l-5 5 5 5V7z" />
                    <Path d="M24 0v24H0V0h24z" fill="none" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M14 7l-5 5 5 5V7z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M14 7l-5 5 5 5V7z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M14 7l-5 5 5 5V7z" />
                </Icon>
            );
    }
}
