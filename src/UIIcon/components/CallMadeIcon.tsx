import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCallMade(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                </Icon>
            );
    }
}
