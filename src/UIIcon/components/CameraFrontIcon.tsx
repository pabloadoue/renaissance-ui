import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCameraFront(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2zM17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7v-2h10v2zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10v10.5z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 12.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v9.5zm-6.15 6.35c-.31-.31-.85-.09-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm7-8H5v18h14V0zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2zM17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7v-2h10v2zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10v10.5z" />
                </Icon>
            );
    }
}
