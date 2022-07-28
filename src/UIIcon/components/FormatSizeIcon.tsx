import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFormatSize(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 5.5c0 .83.67 1.5 1.5 1.5H14v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h3.5c.83 0 1.5-.67 1.5-1.5S21.33 4 20.5 4h-10C9.67 4 9 4.67 9 5.5zM4.5 12H6v5.5c0 .83.67 1.5 1.5 1.5S9 18.33 9 17.5V12h1.5c.83 0 1.5-.67 1.5-1.5S11.33 9 10.5 9h-6C3.67 9 3 9.67 3 10.5S3.67 12 4.5 12z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </Icon>
            );
    }
}
