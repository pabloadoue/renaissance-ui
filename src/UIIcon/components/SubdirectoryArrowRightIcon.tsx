import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSubdirectoryArrowRight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <Path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <Path d="M18.29 15.71l-4.58 4.58c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <Path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <Path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
                </Icon>
            );
    }
}
