import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFilter8(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-7-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" />
                </Icon>
            );
    }
}
