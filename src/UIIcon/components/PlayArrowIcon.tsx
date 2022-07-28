import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPlayArrow(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M8 5v14l11-7z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M8 5v14l11-7L8 5z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                </Icon>
            );
    }
}
