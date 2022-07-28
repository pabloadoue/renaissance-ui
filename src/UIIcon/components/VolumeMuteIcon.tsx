import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconVolumeMute(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M7 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L11 9H8c-.55 0-1 .45-1 1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" />
                </Icon>
            );
    }
}
